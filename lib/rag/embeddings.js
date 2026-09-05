import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function generateEmbedding(text, taskType = "RETRIEVAL_QUERY") {
  if (!text || typeof text !== "string") {
    throw new Error("Text is required to generate an embedding");
  }

  const response = await ai.models.embedContent({
    model: "gemini-embedding-001",
    contents: text,
    config: {
      taskType,
      outputDimensionality: 768,
    },
  });

  const embedding = response.embeddings[0].values;

  // Normalize to unit length — required for non-default (truncated)
  // output dimensions, otherwise cosine similarity in $vectorSearch
  // is skewed and retrieval quality degrades silently.
  const norm = Math.sqrt(embedding.reduce((sum, v) => sum + v * v, 0));
  return embedding.map((v) => v / norm);
}
