import mongoose from "mongoose";
import connectDB from "../lib/mongoose.js";
import { generateEmbedding } from "../lib/rag/embeddings.js";

const question = "Tell me about Kunal's projects.";
async function testVectorSearch() {
  try {
    console.log("Connecting to MongoDB...");

    await connectDB();

    const db = mongoose.connection.useDb("portfolio");
    const collection = db.collection("knowledge");

    console.log("Connected.");
    console.log(`\nQuestion: "${question}"`);

    // 1. Convert the user's question into a 768-dimensional vector
    console.log("\nGenerating question embedding...");

    const queryEmbedding = await generateEmbedding(question);

    console.log(`Embedding generated: ${queryEmbedding.length} dimensions`);

    // 2. Search MongoDB using Vector Search
    console.log("\nRunning MongoDB Vector Search...");

    const results = await collection
      .aggregate([
        {
          $vectorSearch: {
            index: "vector_index",
            path: "embedding",
            queryVector: queryEmbedding,
            numCandidates: 20,
            limit: 3,
          },
        },
        {
          $project: {
            _id: 0,
            text: 1,
            category: 1,
            score: {
              $meta: "vectorSearchScore",
            },
          },
        },
      ])
      .toArray();

    console.log("\n=================================");
    console.log("Vector Search Results");
    console.log("=================================\n");

    results.forEach((result, index) => {
      console.log(`Result ${index + 1}`);
      console.log(`Category: ${result.category}`);
      console.log(`Score: ${result.score}`);
      console.log(`Text: ${result.text}`);
      console.log("---------------------------------\n");
    });

    console.log(`Found ${results.length} relevant documents.`);
  } catch (error) {
    console.error("\n❌ Vector Search failed:");
    console.error(error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

testVectorSearch();
