"use client";

import React from "react";

const learningSkills = [
  {
    title: "MySQL",
    image: "https://img.icons8.com/fluency/240/mysql-logo.png",
    description: "Relational database system for structured and scalable data storage.",
  },
  {
    title: "Express.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description: "Fast and minimal Node.js framework for building REST APIs.",
  },
  {
    title: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description: "Containerize applications for consistent development and deployment.",
  },
  {
    title: "CI / CD",
    image: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
    description: "Automating testing, building, and deployment pipelines.",
  },
  {
    title: "Accessibility",
    image: "https://cdn-icons-png.flaticon.com/512/9797/9797236.png",
    description: "Building web experiences that everyone can use.",
  },
  {
    title: "Core Web Vitals",
    image: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
    description: "Improving performance, responsiveness, and visual stability.",
  },
  {
    title: "Lighthouse",
    image: "https://cdn-icons-png.flaticon.com/512/7751/7751397.png",
    description: "Auditing applications for performance, SEO, and accessibility.",
  },
  {
    title: "Image Strategy",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
    description: "Optimizing assets for speed, quality, and SEO.",
  },
  {
    title: "Build Process",
    image: "https://cdn-icons-png.flaticon.com/512/8649/8649230.png",
    description: "Understanding bundlers, transpilers, and production builds.",
  },
  {
    title: "Automated Testing",
    image: "https://cdn-icons-png.flaticon.com/512/9160/9160747.png",
    description: "Ensuring application quality through automated testing.",
  },
  {
    title: "Real-Time Communication",
    image: "https://cdn-icons-png.flaticon.com/512/8727/8727748.png",
    description: "Building applications with live updates and instant communication.",
  },
  {
    title: "WebSockets & SSE",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI0Q0ODQ4MCIgZD0iTTUwNCAyNTZjMCAxNDEuNzc3LTExNC4yMjMgMjU2LTI1NiAyNTYtMTQxLjc3NyAwLTI1Ni0xMTQuMjIyLTI1Ni0yNTYgMC0xNDEuNzc3IDExNC4yMjMtMjU2IDI1Ni0yNTYgMTQxLjc3NyAwIDI1NiAxMTQuMjI0IDI1NiAyNTZ6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTM2Ny40NyAyOTcuNTg1bC0xMC44NjYtMTYuNzA5YTE0Ljk1IDE0Ljk1IDAgMCAwLTE4Ljk1LTMuNDEybC0zMC4zODYgMTguMjVMMjYxLjA0IDE3OGMtNTIuNzUwIDAtOTUuNDE4IDMyLjc2NC0xMTMuMTUxIDgwLjk4M0ExMTIuNTExIDExMi41MTEgMCAwIDAgMjU2IDM2OCAxMTEuNDkzIDExMS40OTMgMCAwIDAgMzY3LjQ3IDI5Ny41ODV6Ii8+PC9zdmc+",
    description: "Real-time communication using sockets and server-sent events.",
  },
];

function LearningCard({ skill }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-500 hover:-translate-y-2 hover:border-orange-400/40 hover:shadow-[0_0_45px_rgba(249,115,22,0.18)]">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 p-3">
            <img
              src={skill.image}
              alt={skill.title}
              className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">{skill.title}</h3>
            <div className="mt-2 h-1 w-14 rounded-full bg-gradient-to-r from-orange-400 to-cyan-400" />
          </div>
        </div>

        <p className="mt-auto text-sm leading-7 text-gray-300">
          {skill.description}
        </p>
      </div>
    </div>
  );
}

export default function LearningCards() {
  return (
    <section className="relative overflow-hidden px-6 py-24 text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.10),_transparent_28%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.08),_transparent_28%),linear-gradient(to_bottom,_rgba(2,6,23,0.96),_rgba(2,6,23,1))]" />

      <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="mb-16 md:mb-20">
          <p className="uppercase tracking-[6px] text-orange-400 text-sm font-semibold">
            Learning Journey
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-black leading-none">
            Skills I'm
            <br />
            Currently Learning
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Technology evolves constantly, and so do I. These are the tools,
            concepts, and best practices I'm actively studying to become a
            stronger full-stack developer.
          </p>

          <div className="mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-orange-400 to-cyan-400" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {learningSkills.map((skill) => (
            <LearningCard key={skill.title} skill={skill} />
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-24 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl text-center">
          <h2 className="text-3xl font-bold text-white">
            Learning Never Stops
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            My goal is not just to learn new technologies, but to understand
            how they solve real-world problems and apply them to build scalable,
            maintainable, and high-performance applications.
          </p>
        </div>
      </div>
    </section>
  );
}