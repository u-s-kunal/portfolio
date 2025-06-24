"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const cardVariants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
};

const AboutSection = () => {
  const education = [
    {
      title: "Master of Computer Applications",
      institution: "Sandip University",
      year: "2023 - 2025",
      image: "/MCA.jpg",
    },
    // {
    //   title: "Bachelor of Arts in History",
    //   institution: "YCMOU Open University",
    //   year: "2020 - 2023",
    //   image: "/ycmop-logo.png",
    // },
    // {
    //   title: "Higher Secondary Certificate in Science",
    //   institution: "Aarambh High School",
    //   year: "2011 - 2013",
    //   image: "/higherSchool.jpg",
    // },
    // {
    //   title: "Secondary School Certificate (SSC) ",
    //   institution: "Nutan School",
    //   year: "2010",
    //   image: "/StateBoard.png",
    // },
  ];

  const Internships = [
    {
      title: "Internship Letter",
      provider: "Seven Mentor",
      year: "june 2025",
      image: "/internshipletter.png",
    },
  ];

  const certifications = [
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
  ];

  return (
    <div className="relative my-8 p-10 text-white">
      {/* Internships Section */}

      <h2 className="text-2xl flex mx-4">📜 Internships</h2>
      <div className="h-[1px] bg-amber-50 mb-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Internships.map((cert, index) => (
          <motion.div
            key={index}
            className="rounded-2xl p-4 m-4 bg-gradient-to-br from-[#29724b] to-[#575f88] shadow-lg hover:from-[#455e85] hover:to-[#a8a18c] transition-all duration-300 hover:scale-[1.02] flex flex-col sm:flex-row items-center gap-4 w-full"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
          >
            <Link href={cert.image} target="_blank" className="shrink-0">
              <div className="relative group w-36 sm:w-40">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={160}
                  height={160}
                  className="w-full h-auto rounded-xl border bg-amber-50 p-2 cursor-pointer hover:scale-105 transition"
                />
                {/* Tooltip */}
                <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-red-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-10">
                  Click to View
                </div>
              </div>
            </Link>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold">{cert.title}</h3>
              <p className="text-sm text-gray-300">{cert.provider}</p>
              <p className="text-sm text-gray-400">{cert.year}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications Section */}

      <h2 className="text-2xl flex mx-4">📜 Certifications</h2>
      <div className="h-[1px] bg-amber-50 mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="rounded-2xl p-4 m-4 bg-gradient-to-br from-[#453946] to-[#575f88] shadow-lg hover:from-[#50565f] hover:to-[#a8a18c] transition-all duration-300 hover:scale-[1.02] flex flex-col sm:flex-row items-center gap-4 w-full"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
          >
            <Link href={cert.image} target="_blank" className="shrink-0">
              <div className="relative group w-36 sm:w-40">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={160}
                  height={160}
                  className="w-full h-auto rounded-xl border bg-amber-50 p-2 cursor-pointer hover:scale-105 transition"
                />
                {/* Tooltip */}
                <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-red-900 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-10">
                  Click to View
                </div>
              </div>
            </Link>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold">{cert.title}</h3>
              <p className="text-sm text-gray-300">{cert.provider}</p>
              <p className="text-sm text-gray-400">{cert.year}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Education Section */}

      <h2 className="text-2xl flex mx-4">🎓 Education</h2>
      <div className="h-[1px] bg-amber-50 mb-6"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="rounded-2xl m-4 p-4 bg-gradient-to-br from-[#6a620b] to-[#35A29F] shadow-lg hover:from-[#117a7f] hover:to-[#48c3b5] transition-all duration-300 hover:scale-[1.02] flex flex-col sm:flex-row items-center gap-4 w-full"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.4 }}
            variants={cardVariants}
          >
            <div className="w-36 sm:w-40 shrink-0">
              <Image
                src={edu.image}
                alt={edu.title}
                width={160}
                height={160}
                className="w-full h-auto rounded-xl border bg-amber-50 p-3"
              />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold">{edu.title}</h3>
              <p className="text-sm text-gray-300">{edu.institution}</p>
              <p className="text-sm text-gray-400">{edu.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
