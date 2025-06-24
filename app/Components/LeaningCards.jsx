"use client";
import React from "react";

const learningSkills = [
  {
    title: "Next.js",
    image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    description: "React framework for server-side rendering and routing.",
  },
  {
    title: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    description: "NoSQL database for scalable and flexible data storage.",
  },
  {
    title: "MySQL",
    image: "https://img.icons8.com/fluency/240/mysql-logo.png",
    description: "Relational database system for structured data storage.",
  },
  {
    title: "Express.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description: "Minimal and flexible Node.js web application framework.",
  },
  {
    title: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description: "Platform for developing and deploying containerized apps.",
  },
  {
    title: "CI/CD",
    image: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
    description: "Continuous Integration and Deployment pipelines.",
  },
  {
    title: "Accessibility",
    image: "https://cdn-icons-png.flaticon.com/512/9797/9797236.png",
    description: "Practices ensuring apps are usable by everyone.",
  },
  {
    title: "Core Web Vitals",
    image: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
    description: "Metrics for measuring user experience performance.",
  },
  {
    title: "Lighthouse",
    image: "https://cdn-icons-png.flaticon.com/512/7751/7751397.png",
    description: "Tool for auditing web performance, SEO, and accessibility.",
  },
  {
    title: "Image Strategy",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
    description: "Optimizing images for fast loading and SEO.",
  },
  {
    title: "Build Process",
    image: "https://cdn-icons-png.flaticon.com/512/8649/8649230.png",
    description: "Understanding bundling, transpiling, and deployment.",
  },
  {
    title: "Automated Testing",
    image: "https://cdn-icons-png.flaticon.com/512/9160/9160747.png",
    description: "Tools and frameworks for testing code automatically.",
  },
  {
    title: "Real-time Communication",
    image: "https://cdn-icons-png.flaticon.com/512/8727/8727748.png",
    description: "Live updates using sockets or push technologies.",
  },
  {
    title: "WebSockets & SSE",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI0Q0ODQ4MCIgZD0iTTUwNCAyNTZjMCAxNDEuNzc3LTExNC4yMjMgMjU2LTI1NiAyNTYtMTQxLjc3NyAwLTI1Ni0xMTQuMjIyLTI1Ni0yNTYgMC0xNDEuNzc3IDExNC4yMjMtMjU2IDI1Ni0yNTYgMTQxLjc3NyAwIDI1NiAxMTQuMjI0IDI1NiAyNTZ6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTM2Ny40NyAyOTcuNTg1bC0xMC44NjYtMTYuNzA5YTE0Ljk1IDE0Ljk1IDAgMCAwLTE4Ljk1LTMuNDEybC0zMC4zODYgMTguMjVMMjYxLjA0IDE3OGMtNTIuNzUwIDAtOTUuNDE4IDMyLjc2NC0xMTMuMTUxIDgwLjk4M0ExMTIuNTExIDExMi41MTEgMCAwIDAgMjU2IDM2OCAxMTEuNDkzIDExMS40OTMgMCAwIDAgMzY3LjQ3IDI5Ny41ODV6Ii8+PC9zdmc+",
    description: "Tech for full-duplex and server-push communication.",
  },
];

export default function LearningCards() {
  return (
    <div className="bg-center p-6 ">
      <h2 className="text-6xl tilt-neon text-white/90 text-center  m-6">
        Skills I Am Learning
      </h2>

      {/* <h2 className="text-4xl font-bold text-center m-6 text-white/90"></h2> */}
      <div className="relative">
        <div className="absolute inset-0">
          <div className="relative w-full bg-slate-950 [&>div]:absolute [&>div]:inset-0 [&>div]:bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
            <div></div>
          </div>
        </div>

        <div className="relative z-10 flex flex-wrap justify-center gap-1   ">
          {learningSkills.map((skill, index) => (
            <div
              key={index}
              className=" w-50 min-h-[250px] flex flex-col justify-between rounded-2xl border border-amber-50 shadow-md p-6 text-center bg-[#DCD7C9] m-4 transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-gray-600 hover:to-red-900 hover:shadow-2xl backdrop-blur-md  text-black hover:text-white"
            >
              <div className=" ">
                <img
                  src={skill.image}
                  alt={skill.title}
                  className="w-20 h-20 object-contain mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold  mb-2">{skill.title}</h3>
              </div>
              <p className=" text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
