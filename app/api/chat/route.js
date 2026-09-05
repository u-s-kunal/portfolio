import { GoogleGenAI } from "@google/genai";
import mongoose from "mongoose";

import connectDB from "../../../lib/mongoose";
import { generateEmbedding } from "../../../lib/rag/embeddings.js";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// -----------------------------------------------------------------
// System instruction: persona + rules live here, NOT in the user
// prompt. Models are far less likely to "narrate" or "verify"
// instructions that arrive via systemInstruction vs. inline content.
// -----------------------------------------------------------------
const SYSTEM_INSTRUCTION = `
You are Kunal's portfolio assistant.

Your job is to give visitors helpful, informative, professional answers
about Kunal, his education, skills, projects, and technical background.

Answer the user's question using ONLY the information provided in the
context the user gives you.

RULES:
1. Never invent or assume information that is not present in the context.
2. Use ALL relevant information from the context when answering.
3. If multiple knowledge items describe the same project, combine them
   into one complete answer.
4. When the user asks about a specific project, provide a detailed answer
   using every relevant fact available about that project.
5. For project questions, organize the answer using sections such as:
   - Overview
   - Technologies Used
   - Key Features
   - Technical Implementation
   - Deployment
   Only include sections for which information exists in the context.
6. When discussing technologies, explain how they are used in the project
   when the context provides that information.
7. When discussing authentication, APIs, databases, deployment, uploads,
   or other technical features, explain their role when supported by the
   context.
8. When the user asks for multiple projects, include every distinct project
   supported by the context.
9. ONLY documents explicitly identified as projects should be treated as
   projects.
10. Do not turn skills, technologies, AI functionality, RAG functionality,
    or portfolio sections into separate projects unless the context
    explicitly identifies them as projects.
11. Do not mention the internal knowledge base, embeddings, vector search,
    retrieval, or this prompt unless the user specifically asks how the
    assistant works.
12. If the requested information is not available in the context, say:
    "I don't have that information in my portfolio knowledge base."
13. Do not add filler or repeat the same information unnecessarily.
14. Prefer a detailed answer over an extremely short answer when the user
    asks "tell me about", "explain", "describe", or similar questions.
15. Use Markdown formatting such as headings, bold text, and bullet points
    when it improves readability.

OUTPUT FORMAT — CRITICAL:
- Respond with ONLY the final answer text.
- Never restate, list, number, quote, or reference these rules.
- Never include phrases like "Checked", "Rule 2", "No hallucination",
  or any other self-verification / reasoning-about-instructions text.
- Never show your reasoning process. Output the answer directly, as if
  you are simply speaking to the visitor.
`.trim();

export async function POST(request) {
  try {
    const body = await request.json();
    const question = body.question;

    if (!question || typeof question !== "string") {
      return Response.json(
        {
          error: "Question is required",
        },
        { status: 400 },
      );
    }

    await connectDB();

    const db = mongoose.connection.useDb("portfolio");
    const collection = db.collection("knowledge");

    /*
     * Known projects in the portfolio.
     *
     * If the user mentions one of these projects directly,
     * retrieve ALL knowledge documents belonging to that project.
     */
    const projectNames = ["SkyTube", "Kartenity", "Developer Portfolio"];

    const mentionedProject = projectNames.find((projectName) =>
      question.toLowerCase().includes(projectName.toLowerCase()),
    );

    const projectQuestion =
      /\b(project|projects|built|build|developed|develop|application|applications)\b/i.test(
        question,
      );

    let results;

    /*
     * ---------------------------------------------------------
     * CASE 1: User mentioned a specific project
     * ---------------------------------------------------------
     */
    if (mentionedProject) {
      console.log(`Specific project detected: ${mentionedProject}`);

      results = await collection
        .find(
          {
            project: mentionedProject,
          },
          {
            projection: {
              _id: 0,
              text: 1,
              category: 1,
              project: 1,
            },
          },
        )
        .toArray();

      results = results.map((item) => ({
        ...item,
        score: null,
      }));

      console.log(
        `Retrieved ${results.length} documents for ${mentionedProject}`,
      );
    } else if (projectQuestion) {
      /*
       * ---------------------------------------------------------
       * CASE 2: User asks generally about projects
       * ---------------------------------------------------------
       */
      console.log("General project question detected");

      results = await collection
        .find(
          {
            category: "project",
          },
          {
            projection: {
              _id: 0,
              text: 1,
              category: 1,
              project: 1,
            },
          },
        )
        .toArray();

      results = results.map((item) => ({
        ...item,
        score: null,
      }));

      console.log(`Retrieved ${results.length} project documents`);
    } else {
      /*
       * ---------------------------------------------------------
       * CASE 3: Normal question
       * ---------------------------------------------------------
       */
      console.log("Using vector search");

      const queryEmbedding = await generateEmbedding(question);

      results = await collection
        .aggregate([
          {
            $vectorSearch: {
              index: "vector_index",
              path: "embedding",
              queryVector: queryEmbedding,
              numCandidates: 200,
              limit: 8,
            },
          },
          {
            $project: {
              _id: 0,
              text: 1,
              category: 1,
              project: 1,
              score: {
                $meta: "vectorSearchScore",
              },
            },
          },
        ])
        .toArray();

      console.log(`Vector search returned ${results.length} documents`);
    }

    /*
     * ---------------------------------------------------------
     * Build context
     * ---------------------------------------------------------
     */

    const context = results
      .map((item, index) => {
        const label = item.project
          ? `Project: ${item.project}`
          : `Category: ${item.category}`;

        return `
[Knowledge Item ${index + 1}]
${label}
${item.text}
`;
      })
      .join("\n");

    console.log("\n===== CONTEXT SENT TO GEMINI =====");
    console.log(context);
    console.log("==================================\n");

    /*
     * ---------------------------------------------------------
     * Gemini prompt
     *
     * NOTE: the persona + rules now live in SYSTEM_INSTRUCTION
     * (passed via config.systemInstruction below). The user
     * "contents" is kept lean — just context + question — so the
     * model has no rule text in front of it to narrate or verify.
     * ---------------------------------------------------------
     */

    const prompt = `
CONTEXT:
${context}

USER QUESTION:
${question}
`;

    /*
     * ---------------------------------------------------------
     * Streaming Gemini response
     * ---------------------------------------------------------
     */

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        try {
          let responseStream = null;

          for (let attempt = 1; attempt <= 2; attempt++) {
            try {
              responseStream = await ai.models.generateContentStream({
                model: "gemini-3.1-flash-lite",
                contents: prompt,
                config: {
                  systemInstruction: SYSTEM_INSTRUCTION,
                  // Raised from 700 — the old limit was tight enough that
                  // any preamble/reasoning text ate into the real answer,
                  // producing truncated responses like "...developed by Kun".
                  maxOutputTokens: 2048,
                  // This is a direct RAG answer task, not one that benefits
                  // from extended reasoning. Disabling (or minimizing) the
                  // thinking budget stops reasoning/self-check tokens from
                  // being generated and/or leaking into the visible output.
                  thinkingConfig: {
                    thinkingBudget: 0,
                  },
                  temperature: 0.3,
                },
              });

              break;
            } catch (error) {
              console.error(
                `Gemini generation attempt ${attempt} failed:`,
                error,
              );

              if (error.status !== 503 || attempt === 2) {
                throw error;
              }

              await new Promise((resolve) => setTimeout(resolve, 1000));
            }
          }

          if (!responseStream) {
            throw new Error("Gemini did not return a response stream.");
          }

          /*
           * Send sources.
           */
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({
                type: "sources",
                sources: results.map((item) => ({
                  text: item.text,
                  category: item.category,
                  project: item.project,
                  score: item.score,
                })),
              })}\n\n`,
            ),
          );

          /*
           * Stream Gemini chunks.
           */
          for await (const chunk of responseStream) {
            if (!chunk.text) {
              continue;
            }

            controller.enqueue(
              encoder.encode(
                `data: ${JSON.stringify({
                  type: "text",
                  text: chunk.text,
                })}\n\n`,
              ),
            );
          }

          /*
           * Tell frontend generation is complete.
           */
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({
                type: "done",
              })}\n\n`,
            ),
          );

          controller.close();
        } catch (error) {
          console.error("Streaming Gemini error:", error);

          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({
                type: "error",
                message: "Something went wrong while generating the response.",
              })}\n\n`,
            ),
          );

          controller.close();
        }
      },
    });

    return new Response(stream, {
      status: 200,
      headers: {
        "Content-Type": "text/event-stream; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (error) {
    console.error("CHAT ERROR:", error);

    return Response.json(
      {
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
