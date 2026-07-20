"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const sections = [
  {
    title: "Internships",
    emoji: "📜",
    items: [
      {
        title: "MERN STACK",
        provider: "Seven Mentor",
        year: "June 2025",
        image: "/internshipletter.png",
      },
    ],
  },
  {
    title: "Certifications",
    emoji: "📜",
    items: [
      {
        title: "JAVASCRIPT ALGORITHMS AND DATA STRUCTURES",
        provider: "freeCodeCamp",
        year: "August 2022",
        image: "/Freecodecamp-certificate.png",
      },
      {
        title: "FRONT END DEVELOPMENT",
        provider: "I-TECH",
        year: "2022",
        image: "/Front-end-certificate.png",
      },
      {
        title: "Getting Started with Enterprise Data Science",
        provider: "IBM",
        year: "2024",
        image: "/IBM CERTIFICATE.png",
      },
    ],
  },
  {
    title: "Education",
    emoji: "🎓",
    items: [
      {
        title: "Master of Computer Applications",
        provider: "Sandip University",
        year: "2023 - 2025",
        image: "/MCA.jpg",
      },
    ],
  },
];

function SectionHeader({ title, emoji }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{emoji}</span>
        <h2 className="text-3xl md:text-4xl font-black text-white">{title}</h2>
      </div>
      <div className="mt-4 h-px w-full bg-gradient-to-r from-cyan-400/60 via-white/10 to-orange-400/40" />
    </div>
  );
}

function InfoCard({ item, isClickable = true }) {
  const CardContent = (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="
        group relative overflow-hidden rounded-3xl
        border border-white/10 bg-white/5 backdrop-blur-xl
        p-5 md:p-6 transition-all duration-500
        hover:border-cyan-400/40 hover:shadow-[0_0_45px_rgba(34,211,238,0.14)]
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-orange-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative flex flex-col md:flex-row items-center gap-5">
        <div className="shrink-0 relative">
          <Image
            src={item.image}
            alt={item.title}
            width={170}
            height={170}

            className="
              rounded-2xl border border-white/10 bg-white/40 p-2 
              transition-transform duration-500 group-hover:scale-[1.03]
            "
          />
          <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/20 transition-colors duration-500" />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
            {item.title}
          </h3>
          <p className="mt-3 text-cyan-300 font-medium">
            {item.provider || item.institution}
          </p>
          <div className="mt-4 inline-flex items-center rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1 text-sm text-orange-300">
            {item.year}
          </div>
        </div>
      </div>
    </motion.div>
  );

  if (!isClickable) return CardContent;

  return (
    <Link href={item.image} target="_blank" className="block">
      {CardContent}
    </Link>
  );
}

const AboutSection = () => {
  return (
    <section className="relative my-8 px-4 md:px-8 py-10 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.08),_transparent_30%)]" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 md:mb-18">
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold">
            Credentials
          </p>
          <h1 className="mt-3 text-5xl md:text-7xl font-black leading-none">
            Education, Experience
            <span className="block text-white/70 mt-2">and Certifications</span>
          </h1>
          <p className="mt-6 max-w-3xl text-gray-400 text-lg leading-8">
            A clean, structured overview of my academic background, internship
            experience, and certifications.
          </p>
        </div>

        <div className="space-y-16">
          {sections.map((section) => (
            <div key={section.title}>
              <SectionHeader title={section.title} emoji={section.emoji} />

              <div className="grid grid-cols-1 gap-6">
                {section.items.map((item, index) => (
                  <InfoCard
                    key={`${section.title}-${index}`}
                    item={item}
                    isClickable={true}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;