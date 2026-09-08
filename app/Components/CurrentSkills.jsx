
"use client";

import React from "react";

const skills = [
  {
    title: "HTML",
    image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    description:
      "Semantic structure and clean markup for accessible web pages.",
  },
  {
    title: "CSS",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    description:
      "Layouts, responsive design, animations, and visual polish.",
  },
  {
    title: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    description:
      "Interactive behavior, application logic, and dynamic experiences.",
  },
  {
    title: "Tailwind CSS",
    image: "https://avatars.githubusercontent.com/u/67109815?s=200&v=4",
    description:
      "Utility-first styling for fast and consistent interface development.",
  },
  {
    title: "React.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description:
      "Component-based UI development for modern web applications.",
  },
  {
    title: "Next.js",
    image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    description:
      "React framework for routing, server rendering, and production applications.",
  },
  {
    title: "Node.js",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg",
    description:
      "Backend runtime for building server-side applications and APIs.",
  },
  {
    title: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    description:
      "NoSQL database for storing and working with application data.",
  },
  {
    title: "TypeScript",
    image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    description:
      "Typed JavaScript for safer and more maintainable applications.",
  },
  {
    title: "Git",
    image: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
    description:
      "Version control for managing source code and development workflows.",
  },
  {
    title: "GitHub",
    image: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    description:
      "Code hosting, collaboration, and project management.",
  },
  {
    title: "Bootstrap",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    description:
      "Responsive UI framework for quickly building web interfaces.",
  },
];

function SkillCard({ skill, index }) {
  return (
    <article className="toolkit-item">
      <div className="toolkit-index">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="toolkit-icon">
        <img src={skill.image} alt="" />
      </div>

      <div className="toolkit-details">
        <h2>{skill.title}</h2>
        <p>{skill.description}</p>
      </div>

      <span className="toolkit-arrow">↗</span>
    </article>
  );
}

export default function CurrentSkills() {
  return (
    <main className="current-skills-page">
      <div className="current-skills-container">

        <header className="current-skills-header">
          <div>
            <span className="current-skills-label">
              SKILLS / TOOLKIT
            </span>

            <h1>
              My Current
              <br />
              Skills
            </h1>
          </div>

          <div className="current-skills-intro">
            <p>
              The technologies I currently use to build responsive interfaces,
              frontend applications, APIs, and full-stack projects.
            </p>

            <div className="current-skills-meta">
              <span>{skills.length} technologies</span>
              <span>Full-stack development</span>
            </div>
          </div>
        </header>

        <div className="current-skills-divider" />

        <section className="toolkit-list">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.title}
              skill={skill}
              index={index}
            />
          ))}
        </section>

        <div className="toolkit-footer">
          <span>Core development toolkit</span>
          <span>Updated 2026</span>
        </div>

      </div>
    </main>
  );
}
