import mongoose from "mongoose";
import connectDB from "../lib/mongoose.js";
import { generateEmbedding } from "../lib/rag/embeddings.js";

const knowledge = [
  // =========================
  // PROFILE
  // =========================

  {
    text: "Kunal Ughade is a MERN Stack Developer and Full-Stack Web Developer.",
    category: "profile",
  },
  {
    text: "Kunal has completed an MCA from Sandip University with an 8 CGPA.",
    category: "education",
  },
  {
    text: "Kunal's portfolio website is developerkunal.com.",
    category: "portfolio",
  },

  // =========================
  // SKILLS
  // =========================

  {
    text: "Kunal works with HTML, CSS, JavaScript, and React.js.",
    category: "skills",
  },
  {
    text: "Kunal's primary full-stack technology stack is MongoDB, Express.js, React.js, and Node.js, commonly known as the MERN stack.",
    category: "skills",
  },
  {
    text: "Kunal has experience building full-stack web applications using the MERN stack, including frontend interfaces, backend APIs, database integration, authentication, and application functionality.",
    category: "skills",
  },
  {
    text: "Kunal uses MongoDB and Mongoose for application data and database operations.",
    category: "skills",
  },
  {
    text: "Kunal uses React.js for building frontend user interfaces and interactive web applications.",
    category: "skills",
  },
  {
    text: "Kunal uses Node.js and Express.js for backend development and REST API creation.",
    category: "skills",
  },

  // =========================
  // PORTFOLIO
  // =========================

  {
    text: "Kunal has built a personal developer portfolio website at developerkunal.com to showcase his projects, skills, certifications, and professional information.",
    category: "project",
    project: "Developer Portfolio",
  },
  {
    text: "Kunal's portfolio is built with Next.js and includes sections such as projects, skills, certifications, about, contact, and other portfolio information.",
    category: "portfolio",
    project: "Developer Portfolio",
  },
  {
    text: "Kunal's portfolio uses MongoDB for its data layer and includes backend API routes for application functionality such as contact and authentication-related features.",
    category: "portfolio",
    project: "Developer Portfolio",
  },

  // =========================
  // PROJECT: SKYTUBE
  // =========================

  {
    text: "SkyTube is a full-stack video sharing platform developed by Kunal using React.js, Node.js, Express.js, MongoDB, and Mongoose.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "SkyTube includes JWT-based authentication with access and refresh tokens, protected routes, cookie-based token handling, and refresh-token rotation.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "SkyTube includes Cloudinary integration for video uploads, along with video metadata, publishing functionality, ownership checks, and user access control.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "SkyTube includes pagination, video and comment likes, comments, REST APIs, and backend functionality built with Node.js and Express.js.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "The SkyTube frontend is deployed on Vercel and its backend is deployed on Render.",
    category: "project",
    project: "SkyTube",
  },

  // =========================
  // PROJECT: KARTENITY
  // =========================

  {
    text: "Kartenity is an e-commerce platform developed by Kunal using React.js, Node.js, and MongoDB.",
    category: "project",
    project: "Kartenity",
  },
  {
    text: "Kartenity includes authentication using NextAuth, session-based functionality, product search and browsing, and integration between the frontend, backend, and database.",
    category: "project",
    project: "Kartenity",
  },
  {
    text: "Kartenity is deployed using Vercel and uses a CI/CD workflow for application deployment.",
    category: "project",
    project: "Kartenity",
  },

  // =========================
  // CERTIFICATIONS
  // =========================
  {
    text: "Kunal completed the Node.js, Express, MongoDB & More: The Complete Bootcamp certification from Udemy between April 2026 and August 2026.",
    category: "certification",
  },

  {
    text: "Kunal completed the React – The Complete Guide (including Next.js and Redux) certification from Udemy between November 2025 and April 2026.",
    category: "certification",
  },

  {
    text: "Kunal completed the Getting Started with Enterprise Data Science certification from IBM in February 2024.",
    category: "certification",
  },

  {
    text: "Kunal completed the JavaScript Algorithms and Data Structures certification from FreeCodeCamp in August 2022.",
    category: "certification",
  },

  {
    text: "Kunal completed the Front-End Web Development certification from I-TECH, Nashik, in May 2022.",
    category: "certification",
  },

  // =========================
  // AI / RAG
  // =========================

  {
    text: "Kunal is integrating AI capabilities into his developer portfolio using Google Gemini and MongoDB Atlas Vector Search.",
    category: "ai",
    project: "Developer Portfolio",
  },
  {
    text: "Kunal's portfolio includes a RAG-based project assistant that uses Gemini embeddings, MongoDB Atlas Vector Search, and Gemini generation to answer questions about his projects and technical background using information stored in his portfolio knowledge base.",
    category: "ai",
    project: "Developer Portfolio",
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

    // Remove documents created by this seed script.
    await collection.deleteMany({
      source: "portfolio-seed",
    });

    for (const item of knowledge) {
      console.log(`Generating embedding for: "${item.text}"`);

      const embedding = await generateEmbedding(
        item.text,
        "RETRIEVAL_DOCUMENT",
      );

      await collection.insertOne({
        ...item,
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
