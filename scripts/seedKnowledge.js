import mongoose from "mongoose";
import connectDB from "../lib/mongoose.js";
import { generateEmbedding } from "../lib/rag/embeddings.js";

const knowledge = [
  {
    text: "Kunal Ughade is a MERN Stack Developer and Full-Stack Web Developer.",
    category: "profile",
  },
  {
    text: "Kunal has completed an MCA from Sandip University with an 8 CGPA.",
    category: "education",
  },
  {
    text: "Kunal's primary web development stack includes MongoDB, Express.js, React.js, and Node.js.",
    category: "skills",
  },
  {
    text: "Kunal has experience working with HTML, CSS, JavaScript, and React.js.",
    category: "skills",
  },
  {
    text: "Kunal's portfolio website is developerkunal.com.",
    category: "portfolio",
  },
  {
    text: "Kunal's portfolio showcases his web development projects and technical skills.",
    category: "portfolio",
  },
];

async function seedKnowledge() {
  try {
    console.log("Connecting to MongoDB...");

    await connectDB();

    const db = mongoose.connection.useDb("portfolio");
    const collection = db.collection("knowledge");

    console.log("Connected to MongoDB.");
    console.log(`Preparing ${knowledge.length} knowledge entries...\n`);

    // Remove previous seed data so running this script again
    // does not create duplicate documents.
    await collection.deleteMany({ source: "portfolio-seed" });

    for (const item of knowledge) {
      console.log(`Generating embedding for: "${item.text}"`);

      const embedding = await generateEmbedding(item.text);

      await collection.insertOne({
        text: item.text,
        category: item.category,
        embedding,
        source: "portfolio-seed",
        createdAt: new Date(),
      });

      console.log("✓ Saved\n");
    }

    const count = await collection.countDocuments({
      source: "portfolio-seed",
    });

    console.log("=================================");
    console.log("Knowledge seeding completed!");
    console.log("=================================");
    console.log(`Documents inserted: ${count}`);
    console.log(`Collection: portfolio.knowledge`);
    console.log(`Embedding dimensions: 768`);
  } catch (error) {
    console.error("\n❌ Seeding failed:");
    console.error(error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

seedKnowledge();
