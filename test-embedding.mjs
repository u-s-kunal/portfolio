import { generateEmbedding } from "./lib/rag/embeddings.js";

const embedding = await generateEmbedding("Kunal is a MERN Stack developer.");

console.log("Embedding generated successfully!");
console.log("Dimensions:", embedding.length);
console.log("First 5 values:", embedding.slice(0, 5));
