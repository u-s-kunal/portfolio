"use client";

import React from "react";

const AboutPage = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git",
    "GitHub",
    "REST API",
  ];

  const highlights = [
    "Building modern web applications",
    "Creating clean UI/UX",
    "Solving programming challenges",
    "Learning new technologies",
    "Optimizing performance",
  ];

  const certifications = [
    "JavaScript Algorithms & Data Structures",
    "Front-End Development",
  ];

  return (
    <section className="relative z-10 overflow-hidden py-24 px-6 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.10),_transparent_24%),linear-gradient(to_bottom,_rgba(2,6,23,0.96),_rgba(2,6,23,1))]" />
      <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 md:mb-20">
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold">
            About Me
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-black leading-none text-white">
            Passionate Developer.
            <br />
            Creative Problem Solver.
          </h1>

          <div className="mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-orange-400" />

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            I build modern web experiences with a focus on clarity, performance,
            and practical problem solving.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
              <p className="text-lg leading-9 text-gray-300">
                I&apos;m <span className="font-semibold text-white">Kunal</span>,
                a full stack developer and Master of Computer Applications
                graduate from{" "}
                <span className="font-semibold text-cyan-400">
                  Sandip University
                </span>
                .
                <br />
                <br />
                I enjoy turning ideas into scalable web applications with clean
                architecture and intuitive user experiences.
                <br />
                <br />
                My work includes e-commerce platforms, music applications, weather
                dashboards, and browser games. I keep learning new tools and
                improving my problem-solving skills with every project.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-transparent p-8 backdrop-blur-xl">
              <h3 className="mb-6 text-2xl font-bold text-white">
                What I Enjoy
              </h3>

              <ul className="space-y-4 text-gray-300">
                {highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            {/* Skills */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/60 to-transparent" />
                <h2 className="text-3xl font-bold text-white">Tech Stack</h2>
                <div className="h-px flex-1 bg-gradient-to-l from-orange-400/60 to-transparent" />
              </div>

              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-cyan-400/20 bg-cyan-400/5 px-5 py-3 text-sm text-cyan-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/60 to-transparent" />
                <h2 className="text-3xl font-bold text-white">Education</h2>
                <div className="h-px flex-1 bg-gradient-to-l from-orange-400/60 to-transparent" />
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
                <h3 className="text-xl font-semibold text-white">
                  Master of Computer Applications
                </h3>
                <p className="mt-2 text-gray-400">Sandip University</p>
                <p className="mt-2 text-cyan-400">Ongoing</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-cyan-400/60 to-transparent" />
                <h2 className="text-3xl font-bold text-white">
                  Certifications
                </h2>
                <div className="h-px flex-1 bg-gradient-to-l from-orange-400/60 to-transparent" />
              </div>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5 transition hover:border-cyan-400/30 hover:bg-black/30"
                  >
                    <p className="font-semibold text-white">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;