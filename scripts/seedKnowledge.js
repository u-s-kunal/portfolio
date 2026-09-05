import mongoose from "mongoose";
import connectDB from "../lib/mongoose.js";
import { generateEmbedding } from "../lib/rag/embeddings.js";

const knowledge = [
  // =========================================================
  // PROFILE
  // =========================================================

  {
    text: "Kunal Sudhakar Ughade is a MERN Stack Developer and Full-Stack Web Developer.",
    category: "profile",
  },
  {
    text: "Kunal focuses on building full-stack web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and related modern web technologies.",
    category: "profile",
  },
  {
    text: "Kunal has developed more than 30 applications across web development, including React applications, JavaScript applications, games, MERN applications, and Next.js projects.",
    category: "profile",
  },
  {
    text: "Kunal's portfolio website is available at developerkunal.com.",
    category: "profile",
  },
  {
    text: "Kunal's primary professional focus is MERN Stack and Full-Stack Web Development, with a strong focus on React.js and modern frontend development.",
    category: "profile",
  },

  // =========================================================
  // EDUCATION
  // =========================================================

  {
    text: "Kunal completed his Master of Computer Applications (MCA) from Sandip University.",
    category: "education",
  },
  {
    text: "Kunal completed his MCA from Sandip University between 2023 and 2025.",
    category: "education",
  },
  {
    text: "Kunal achieved a CGPA of 7.9 out of 10 in his MCA from Sandip University.",
    category: "education",
  },
  {
    text: "Kunal's MCA education provided a foundation for his software development and full-stack web development career.",
    category: "education",
  },

  // =========================================================
  // SKILLS - FRONTEND
  // =========================================================

  {
    text: "Kunal works with HTML5, CSS3, JavaScript, and React.js for frontend development.",
    category: "skills",
  },
  {
    text: "Kunal uses React.js to build interactive component-based user interfaces and web applications.",
    category: "skills",
  },
  {
    text: "Kunal has experience with Next.js for building modern React-based web applications.",
    category: "skills",
  },
  {
    text: "Kunal uses Redux for state management in React applications.",
    category: "skills",
  },
  {
    text: "Kunal works with React Hooks and modern React development patterns.",
    category: "skills",
  },
  {
    text: "Kunal uses Tailwind CSS and Bootstrap for frontend styling and responsive user interfaces.",
    category: "skills",
  },
  {
    text: "Kunal has experience creating responsive web designs that work across desktop, tablet, and mobile devices.",
    category: "skills",
  },

  // =========================================================
  // SKILLS - JAVASCRIPT
  // =========================================================

  {
    text: "JavaScript is one of Kunal's core programming and development technologies.",
    category: "skills",
  },
  {
    text: "Kunal works with modern JavaScript concepts including async and await, asynchronous programming, promises, modules, and API integration.",
    category: "skills",
  },
  {
    text: "Kunal uses JavaScript to build frontend applications, backend services, APIs, and interactive web functionality.",
    category: "skills",
  },

  // =========================================================
  // SKILLS - BACKEND
  // =========================================================

  {
    text: "Kunal uses Node.js for backend development and server-side JavaScript applications.",
    category: "skills",
  },
  {
    text: "Kunal uses Express.js to build backend applications and REST APIs.",
    category: "skills",
  },
  {
    text: "Kunal has experience designing and working with REST APIs for full-stack web applications.",
    category: "skills",
  },
  {
    text: "Kunal has experience implementing CRUD operations in full-stack applications.",
    category: "skills",
  },
  {
    text: "Kunal uses Axios for making HTTP requests and communicating between frontend applications and backend APIs.",
    category: "skills",
  },
  {
    text: "Kunal has experience working with CORS, environment variables, API integration, authentication, and backend application logic.",
    category: "skills",
  },

  // =========================================================
  // SKILLS - DATABASE
  // =========================================================

  {
    text: "Kunal works with MongoDB as his primary database technology for MERN applications.",
    category: "skills",
  },
  {
    text: "Kunal uses Mongoose for MongoDB schema design, models, queries, and database operations.",
    category: "skills",
  },
  {
    text: "Kunal has experience integrating MongoDB databases with Node.js and Express.js backend applications.",
    category: "skills",
  },
  {
    text: "Kunal is also learning MongoDB Atlas Vector Search for AI and Retrieval-Augmented Generation applications.",
    category: "skills",
  },

  // =========================================================
  // SKILLS - AUTHENTICATION & SECURITY
  // =========================================================

  {
    text: "Kunal has experience implementing authentication and authorization in full-stack applications.",
    category: "skills",
  },
  {
    text: "Kunal has worked with JWT-based authentication, including access tokens and refresh tokens.",
    category: "skills",
  },
  {
    text: "Kunal has experience implementing protected routes and controlling access to authenticated application resources.",
    category: "skills",
  },
  {
    text: "Kunal has experience with NextAuth for authentication and session-based functionality in Next.js applications.",
    category: "skills",
  },
  {
    text: "Kunal has implemented cookie-based token handling and refresh-token rotation in full-stack applications.",
    category: "skills",
  },

  // =========================================================
  // SKILLS - TOOLS & DEVELOPMENT
  // =========================================================

  {
    text: "Kunal uses Git and GitHub for source control and project management.",
    category: "skills",
  },
  {
    text: "Kunal uses npm for managing JavaScript and Node.js project dependencies.",
    category: "skills",
  },
  {
    text: "Kunal uses Postman for testing and working with REST APIs.",
    category: "skills",
  },
  {
    text: "Kunal has experience with debugging, testing, environment variables, and troubleshooting full-stack applications.",
    category: "skills",
  },
  {
    text: "Kunal has experience deploying web applications using platforms such as Vercel and Render.",
    category: "skills",
  },
  {
    text: "Kunal has experience working with CI/CD workflows for web application deployment.",
    category: "skills",
  },

  // =========================================================
  // PROFESSIONAL EXPERIENCE
  // =========================================================

  {
    text: "Kunal worked as a MERN Stack Developer Intern at SevenMentor Pvt. Ltd. in Pune from February 2025 to August 2025.",
    category: "experience",
  },
  {
    text: "During his MERN Stack Developer internship at SevenMentor, Kunal worked on e-commerce application functionality.",
    category: "experience",
  },
  {
    text: "Kunal's internship work included product search, product catalog functionality, shopping cart functionality, and secure payment-related features.",
    category: "experience",
  },
  {
    text: "During his internship, Kunal worked on API optimization and improving application performance.",
    category: "experience",
  },
  {
    text: "Kunal used Redux for state management during his e-commerce development work.",
    category: "experience",
  },
  {
    text: "Kunal worked on improving frontend performance during his internship, including Lighthouse performance optimization.",
    category: "experience",
  },

  // =========================================================
  // PROJECT: SKYTUBE
  // =========================================================

  {
    text: "SkyTube is a full-stack video sharing platform developed by Kunal.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "SkyTube is built using React.js, Node.js, Express.js, MongoDB, and Mongoose.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "SkyTube implements JWT-based authentication using access tokens and refresh tokens.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "SkyTube includes protected routes that restrict access to authenticated resources.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "SkyTube uses cookie-based token handling for authentication.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "SkyTube implements refresh-token rotation as part of its authentication system.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "SkyTube integrates Cloudinary for video uploads and media management.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "SkyTube supports video metadata management and video publishing functionality.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "SkyTube includes ownership checks and user access control for application resources.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "SkyTube includes video likes, comments, and comment likes.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "SkyTube uses pagination for handling collections of application data.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "SkyTube provides REST APIs through its Node.js and Express.js backend.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "The SkyTube frontend is deployed on Vercel and the backend is deployed on Render.",
    category: "project",
    project: "SkyTube",
  },
  {
    text: "The live SkyTube application is available at https://skytube-self.vercel.app.",
    category: "project",
    project: "SkyTube",
  },

  // =========================================================
  // PROJECT: KARTENITY
  // =========================================================

  {
    text: "Kartenity is an e-commerce platform developed by Kunal.",
    category: "project",
    project: "Kartenity",
  },
  {
    text: "Kartenity is built using React.js, Node.js, and MongoDB.",
    category: "project",
    project: "Kartenity",
  },
  {
    text: "Kartenity uses NextAuth for authentication and session-based functionality.",
    category: "project",
    project: "Kartenity",
  },
  {
    text: "Kartenity provides product search and product browsing functionality.",
    category: "project",
    project: "Kartenity",
  },
  {
    text: "Kartenity integrates its frontend, backend, and MongoDB database to provide full-stack e-commerce functionality.",
    category: "project",
    project: "Kartenity",
  },
  {
    text: "Kartenity uses Vercel for deployment and follows a CI/CD workflow.",
    category: "project",
    project: "Kartenity",
  },
  {
    text: "The live Kartenity application is available at https://kartenity.vercel.app.",
    category: "project",
    project: "Kartenity",
  },

  // =========================================================
  // PROJECT: DEVELOPER PORTFOLIO
  // =========================================================

  {
    text: "Kunal built his developer portfolio website to showcase his projects, skills, certifications, education, professional background, and technical work.",
    category: "project",
    project: "Developer Portfolio",
  },
  {
    text: "Kunal's developer portfolio is built using Next.js and React.",
    category: "project",
    project: "Developer Portfolio",
  },
  {
    text: "The portfolio includes sections for Home, About, Projects, Skills, Certifications, and Contact.",
    category: "project",
    project: "Developer Portfolio",
  },
  {
    text: "The portfolio uses MongoDB as part of its data layer.",
    category: "project",
    project: "Developer Portfolio",
  },
  {
    text: "The portfolio contains backend API routes for application functionality including contact and authentication-related features.",
    category: "project",
    project: "Developer Portfolio",
  },
  {
    text: "The portfolio uses Resend for contact form email functionality.",
    category: "project",
    project: "Developer Portfolio",
  },
  {
    text: "The portfolio uses Cloudflare and a custom domain as part of its deployment setup.",
    category: "project",
    project: "Developer Portfolio",
  },
  {
    text: "The developer portfolio showcases Kunal's web development projects, JavaScript applications, games, React projects, Next.js projects, and MERN applications.",
    category: "project",
    project: "Developer Portfolio",
  },

  // =========================================================
  // AI / RAG - DEVELOPER PORTFOLIO
  // =========================================================

  {
    text: "Kunal has integrated an AI-powered assistant into his developer portfolio to allow visitors to ask questions about his projects, skills, certifications, education, and technical background.",
    category: "ai",
    project: "Developer Portfolio",
  },
  {
    text: "The portfolio AI assistant uses Google Gemini to generate responses based on information retrieved from Kunal's portfolio knowledge base.",
    category: "ai",
    project: "Developer Portfolio",
  },
  {
    text: "The portfolio AI assistant uses Retrieval-Augmented Generation (RAG) so that responses are grounded in Kunal's own portfolio information.",
    category: "ai",
    project: "Developer Portfolio",
  },
  {
    text: "The portfolio AI assistant uses MongoDB Atlas Vector Search to retrieve semantically relevant information from the portfolio knowledge base.",
    category: "ai",
    project: "Developer Portfolio",
  },
  {
    text: "Kunal's portfolio AI assistant uses vector embeddings to represent knowledge documents and user questions for semantic retrieval.",
    category: "ai",
    project: "Developer Portfolio",
  },
  {
    text: "The portfolio knowledge base is stored in MongoDB in the portfolio.knowledge collection.",
    category: "ai",
    project: "Developer Portfolio",
  },
  {
    text: "The portfolio AI assistant retrieves relevant knowledge from MongoDB before sending contextual information to Gemini for response generation.",
    category: "ai",
    project: "Developer Portfolio",
  },
  {
    text: "The portfolio AI assistant supports streaming responses so visitors can see the generated answer progressively.",
    category: "ai",
    project: "Developer Portfolio",
  },
  {
    text: "The portfolio AI assistant uses Server-Sent Events (SSE) to stream generated response chunks from the backend to the frontend.",
    category: "ai",
    project: "Developer Portfolio",
  },

  // =========================================================
  // CURRENT LEARNING
  // =========================================================

  {
    text: "Kunal is currently learning AI application development, with a focus on integrating AI APIs and building AI-powered features.",
    category: "learning",
  },
  {
    text: "Kunal is currently learning how to integrate Gemini APIs into web applications.",
    category: "learning",
  },
  {
    text: "Kunal is currently learning Retrieval-Augmented Generation (RAG) to build AI systems that answer questions using a custom knowledge base.",
    category: "learning",
  },
  {
    text: "Kunal is currently learning MongoDB Atlas Vector Search for storing and retrieving information using vector similarity.",
    category: "learning",
  },
  {
    text: "Kunal is currently learning about vector embeddings and semantic search as part of his work with RAG and MongoDB Atlas Vector Search.",
    category: "learning",
  },
  {
    text: "Kunal is applying his AI learning to build an AI-powered assistant for his portfolio website using Gemini, embeddings, MongoDB Atlas Vector Search, and RAG.",
    category: "learning",
  },
  {
    text: "Kunal is learning how to generate streaming AI responses so that his portfolio assistant can display responses progressively instead of waiting for the complete response.",
    category: "learning",
  },

  // =========================================================
  // CERTIFICATIONS
  // =========================================================

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

  // =========================================================
  // CAREER / PROFESSIONAL PROFILE
  // =========================================================

  {
    text: "Kunal's professional focus is full-stack web development with the MERN stack, React.js, and Next.js.",
    category: "career",
  },
  {
    text: "Kunal has experience across both frontend and backend development, including React interfaces, Node.js and Express APIs, MongoDB databases, authentication, and deployment.",
    category: "career",
  },
  {
    text: "Kunal combines frontend development skills with backend API development and database integration to build complete web applications.",
    category: "career",
  },
  {
    text: "Kunal is expanding his full-stack development skills by learning AI application development and integrating AI capabilities into web applications.",
    category: "career",
  },

  // =========================================================
  // TECHNICAL BACKGROUND
  // =========================================================

  {
    text: "Kunal's core full-stack stack is MongoDB, Express.js, React.js, and Node.js, commonly known as MERN.",
    category: "technical",
  },
  {
    text: "Kunal's frontend technologies include HTML5, CSS3, JavaScript, React.js, Next.js, Redux, Tailwind CSS, and Bootstrap.",
    category: "technical",
  },
  {
    text: "Kunal's backend technologies include Node.js, Express.js, REST APIs, authentication systems, JWT, and NextAuth.",
    category: "technical",
  },
  {
    text: "Kunal's database technologies include MongoDB, Mongoose, MongoDB Atlas, and MongoDB Atlas Vector Search.",
    category: "technical",
  },
  {
    text: "Kunal's development tools and platforms include Git, GitHub, npm, Postman, Vercel, Render, Cloudflare, and CI/CD workflows.",
    category: "technical",
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
