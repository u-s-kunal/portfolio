
"use client";

import React from "react";

const learningSkills = [
  {
    title: "MySQL",
    image: "https://img.icons8.com/fluency/240/mysql-logo.png",
    description:
      "Relational database system for structured and scalable data storage.",
  },
  {
    title: "Express.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description:
      "Fast and minimal Node.js framework for building REST APIs.",
  },
  {
    title: "Docker",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description:
      "Containerize applications for consistent development and deployment.",
  },
  {
    title: "CI / CD",
    image: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
    description:
      "Automating testing, building, and deployment pipelines.",
  },
  {
    title: "Accessibility",
    image: "https://cdn-icons-png.flaticon.com/512/9797/9797236.png",
    description:
      "Building web experiences that everyone can use.",
  },
  {
    title: "Core Web Vitals",
    image: "https://cdn-icons-png.flaticon.com/512/201/201623.png",
    description:
      "Improving performance, responsiveness, and visual stability.",
  },
  {
    title: "Lighthouse",
    image: "https://cdn-icons-png.flaticon.com/512/7751/7751397.png",
    description:
      "Auditing applications for performance, SEO, and accessibility.",
  },
  {
    title: "Image Strategy",
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
    description:
      "Optimizing assets for speed, quality, and SEO.",
  },
  {
    title: "Build Process",
    image: "https://cdn-icons-png.flaticon.com/512/8649/8649230.png",
    description:
      "Understanding bundlers, transpilers, and production builds.",
  },
  {
    title: "Automated Testing",
    image: "https://cdn-icons-png.flaticon.com/512/9160/9160747.png",
    description:
      "Ensuring application quality through automated testing.",
  },
  {
    title: "Real-Time Communication",
    image: "https://cdn-icons-png.flaticon.com/512/8727/8727748.png",
    description:
      "Building applications with live updates and instant communication.",
  },
  {
    title: "WebSockets & SSE",
    image:
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iI0Q0ODQ4MCIgZD0iTTUwNCAyNTZjMCAxNDEuNzc3LTExNC4yMjMgMjU2LTI1NiAyNTYtMTQxLjc3NyAwLTI1Ni0xMTQuMjIyLTI1Ni0yNTYgMC0xNDEuNzc3IDExNC4yMjMtMjU2IDI1Ni0yNTYgMTQxLjc3NyAwIDI1NiAxMTQuMjI0IDI1NiAyNTZ6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTM2Ny40NyAyOTcuNTg1bC0xMC44NjYtMTYuNzA5YTE0Ljk1IDE0Ljk1IDAgMCAwLTE4Ljk1LTMuNDEybC0zMC4zODYgMTguMjVMMjYxLjA0IDE3OGMtNTIuNzUwIDAtOTUuNDE4IDMyLjc2NC0xMTMuMTUxIDgwLjk4M0ExMTIuNTExIDExMi41MTEgMCAwIDAgMjU2IDM2OCAxMTEuNDkzIDExMS40OTMgMCAwIDAgMzY3LjQ3IDI5Ny41ODV6Ii8+PC9zdmc+",
    description:
      "Real-time communication using sockets and server-sent events.",
  },
];

function LearningCard({ skill, index }) {
  return (
    <article className="learning-card">
      <div className="learning-card-top">
        <span className="learning-number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="learning-icon">
          <img src={skill.image} alt="" />
        </div>
      </div>

      <div className="learning-card-content">
        <h3>{skill.title}</h3>

        <p>{skill.description}</p>
      </div>

      <div className="learning-card-footer">
        <span>Currently learning</span>
        <span className="learning-status" />
      </div>
    </article>
  );
}

export default function LearningCards() {
  return (
    <section className="learning-page">
      <div className="learning-container">

        <header className="learning-header">
          <div>
            <span className="learning-label">
              LEARNING / CURRENT FOCUS
            </span>

            <h1>
              Currently
              <br />
              Learning
            </h1>
          </div>

          <div className="learning-intro">
            <p>
              Technology keeps changing, so I keep learning. These are the
              tools, concepts, and development practices I am currently
              exploring to strengthen my full-stack skills.
            </p>

            <div className="learning-meta">
              <span>{learningSkills.length} topics</span>
              <span>Self-directed learning</span>
            </div>
          </div>
        </header>

        <div className="learning-divider" />

        <div className="learning-grid">
          {learningSkills.map((skill, index) => (
            <LearningCard
              key={skill.title}
              skill={skill}
              index={index}
            />
          ))}
        </div>

        <section className="learning-note">
          <div className="learning-note-number">NOTE</div>

          <div>
            <h2>Learning is part of the work.</h2>

            <p>
              My goal is not simply to collect technologies. I want to
              understand how they work, where they are useful, and how they
              can be applied to build reliable and maintainable applications.
            </p>
          </div>
        </section>

      </div>
    </section>
  );
}

