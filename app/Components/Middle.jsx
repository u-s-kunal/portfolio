"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

function Middle() {
  const techBadges = [
    { name: "Git", color: "text-orange-500" },
    { name: "Next.js", color: "text-red-600" },
    { name: "GitHub", color: "text-gray-200" },
    { name: "JavaScript", color: "text-yellow-400" },
    { name: "Node.js", color: "text-green-500" },
    { name: "REST API", color: "text-purple-400" },
    { name: "MongoDB", color: "text-green-600" },
    { name: "Tailwind CSS", color: "text-sky-400" },
    { name: "CSS", color: "text-blue-500" },
    { name: "Express", color: "text-yellow-600" },
    { name: "HTML", color: "text-orange-400" },
    { name: "React", color: "text-cyan-400" },
    { name: "TypeScript", color: "text-yellow-800" },
    { name: "Bootstrap", color: "text-violet-500" },
  ];

  // Distribute badges evenly around a ring
  const outerRadius = 255;
  const startAngle = -90;

  return (
    <section className="relative z-10  flex min-h-screen items-center">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-cyan-400">
              &lt; Hello, I&apos;m /&gt;
            </p>

            <h1 className="text-6xl font-black leading-none text-white md:text-8xl">
              KUNAL
            </h1>

            <h2 className="mt-5 text-2xl font-light tracking-[5px] text-cyan-400 md:text-3xl">
              MERN STACK DEVELOPER
            </h2>

            <div className="mt-8 mb-8 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-orange-400" />

            <p className="max-w-xl text-lg leading-9 text-gray-400">
              I build fast, scalable and modern web applications using React, Next.js,
              Node.js and MongoDB with a strong focus on performance, clean architecture
              and user experience.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link href="/projects">
                <button className="group flex cursor-pointer items-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-black transition-all hover:bg-cyan-400">
                  View My Projects
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </Link>

              <Link href="/contact">
                <button className="cursor-pointer rounded-xl border border-cyan-500 px-7 py-4 font-semibold text-white transition-all hover:bg-cyan-500/10">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative hidden justify-center lg:flex">
            <div className="relative h-[760px] w-[760px]">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl scale-110" />
              <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[90px]" />

              {/* Orbit ring group */}
              <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15">
                <div className="absolute inset-10 rounded-full border border-cyan-400/10" />
                <div className="absolute inset-20 rounded-full border border-orange-400/10" />
                <div className="absolute inset-[130px] rounded-full border border-cyan-400/10" />
              </div>

              {/* Center orb */}
              <div className="absolute left-1/2 top-1/2 flex h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-cyan-500/25 bg-[#04111a]/90 shadow-[0_0_80px_rgba(34,211,238,0.18)]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-transparent" />
                <div className="absolute inset-8 rounded-full border border-cyan-400/10" />
                <div className="absolute inset-16 rounded-full border border-orange-400/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_55%)]" />

                <div className="relative text-center">
                  <div className="text-7xl font-black tracking-[0.2em] text-white">
                    STACK
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[6px] text-cyan-400/80">
                    Tech Orbit
                  </p>
                </div>
              </div>

              {/* Floating badges placed in a true circle */}
<div className="absolute inset-0 animate-orbit">
  {techBadges.map((badge, index) => {
    const angle =
      (index / techBadges.length) * 360 + startAngle;

    const radians = (angle * Math.PI) / 180;

    const x = Math.cos(radians) * outerRadius;
    const y = Math.sin(radians) * outerRadius;

    return (
      <div
        key={badge.name}
        className="absolute left-1/2 top-1/2"
        style={{
          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        }}
      >
        <div
          className={`rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-cyan-400/40 hover:bg-white/10 ${badge.color}`}
          style={{
            animation: "spinReverse 45s linear infinite",
          }}
        >
          {badge.name}
        </div>
      </div>
    );
  })}
</div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-18 grid grid-cols-3 mb-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="py-8 text-center">
            <h3 className="text-4xl font-bold text-green-400">40+</h3>
            <p className="mt-2 text-gray-400">Projects</p>
          </div>

          <div className="border-x border-white/10 py-8 text-center">
            <h3 className="text-4xl font-bold text-cyan-400">5+</h3>
            <p className="mt-2 text-gray-400">Years Learning</p>
          </div>

          <div className="py-8 text-center">
            <h3 className="text-4xl font-bold text-orange-400">100%</h3>
            <p className="mt-2 text-gray-400">Dedication</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Middle;