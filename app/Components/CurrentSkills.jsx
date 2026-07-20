"use client";

import React from "react";

const skills = [
  {
    title: "HTML",
    image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    description: "Semantic structure and clean markup for accessible web pages.",
  },
  {
    title: "CSS",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    description: "Layouts, responsive design, animations, and visual polish.",
  },
  {
    title: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    description: "Interactive behavior, logic, and dynamic user experiences.",
  },
  {
    title: "Tailwind CSS",
    image: "https://avatars.githubusercontent.com/u/67109815?s=200&v=4",
    description: "Utility-first styling for fast, consistent UI development.",
  },
  {
    title: "React.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description: "Component-based UI development for modern web apps.",
  },
  {
    title: "Next.js",
    image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    description: "Production-ready React framework for routing and SSR.",
  },
  {
    title: "Node.js",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg",
    description: "Backend runtime for building scalable server-side apps.",
  },
  {
    title: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    description: "Flexible NoSQL database for modern application data.",
  },
  {
    title: "TypeScript",
    image: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    description: "Typed JavaScript for safer and more maintainable code.",
  },
  {
    title: "Git",
    image: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
    description: "Version control for collaboration and clean workflows.",
  },
  {
    title: "GitHub",
    image: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    description: "Code hosting and collaboration for projects and teams.",
  },
  {
    title: "Bootstrap",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    description: "Responsive UI framework for rapid development.",
  },
];

function SkillCard({ skill }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.14)]">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-orange-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 p-3">
            <img
              src={skill.image}
              alt={skill.title}
              className="h-full w-full object-contain"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white">{skill.title}</h3>
            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-orange-400" />
          </div>
        </div>

        <p className="mt-auto text-sm leading-7 text-gray-300">
          {skill.description}
        </p>
      </div>
    </div>
  );
}

export default function CurrentSkills() {
  return (
    <section
      id="skillls"
      className="relative overflow-hidden px-6 py-24 text-white"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.08),_transparent_26%),linear-gradient(to_bottom,_rgba(2,6,23,0.96),_rgba(2,6,23,1))]" />
      <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20">
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold">
            Skill Matrix
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl font-black leading-none text-white">
            My Current Skills
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            A focused view of the technologies I use to build interfaces,
            frontends, and full stack applications.
          </p>
          <div className="mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-orange-400" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard key={skill.title} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}