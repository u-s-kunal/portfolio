
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Internships",
    number: "01",
    items: [
      {
        title: "MERN Stack",
        provider: "Seven Mentor",
        year: "June 2025",
        image: "/internshipletter.png",
      },
    ],
  },
  {
    title: "Certifications",
    number: "02",
    items: [
      {
        title: "JavaScript Algorithms and Data Structures",
        provider: "freeCodeCamp",
        year: "August 2022",
        image: "/Freecodecamp-certificate.png",
      },
      {
        title: "Front End Development",
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
      {
        title: "React – The Complete Guide (incl. Next.js, Redux)",
        provider: "Udemy",
        year: "April 2026",
        image: "/React-Certification.png",
      },
      {
        title: "Node.js, Express, MongoDB & More: The Complete Bootcamp",
        provider: "Udemy",
        year: "August 2026",
        image: "/Node-Certification.png",
      },
    ],
  },
  {
    title: "Education",
    number: "03",
    items: [
      {
        title: "Master of Computer Applications",
        provider: "Sandip University",
        year: "2023 – 2025",
        image: "/MCA.jpg",
      },
    ],
  },
];

function InfoCard({ item }) {
  return (
    <Link
      href={item.image}
      target="_blank"
      rel="noopener noreferrer"
      className="credential-card"
    >
      <div className="credential-image">
        <Image
          src={item.image}
          alt={item.title}
          width={180}
          height={140}
        />
      </div>

      <div className="credential-details">
        <h3>{item.title}</h3>

        <p className="credential-provider">
          {item.provider}
        </p>

        <span className="credential-year">
          {item.year}
        </span>
      </div>

      <span className="credential-arrow">↗</span>
    </Link>
  );
}

function SectionHeader({ section }) {
  return (
    <div className="credential-section-header">
      <span className="credential-section-number">
        {section.number}
      </span>

      <h2>{section.title}</h2>

      <span className="credential-section-line" />
    </div>
  );
}

const AboutSection = () => {
  return (
    <main className="credentials-page">
      <div className="credentials-container">

        <header className="credentials-header">
          <div>
            <span className="credentials-label">
              CREDENTIALS / BACKGROUND
            </span>

            <h1>
              Education,
              <br />
              Experience & Certifications
            </h1>
          </div>

          <p>
            A structured overview of my academic background, internship
            experience, and professional certifications.
          </p>
        </header>

        <div className="credentials-divider" />

        <div className="credentials-sections">
          {sections.map((section) => (
            <section
              key={section.title}
              className="credential-section"
            >
              <SectionHeader section={section} />

              <div className="credential-list">
                {section.items.map((item, index) => (
                  <InfoCard
                    key={`${section.title}-${index}`}
                    item={item}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </main>
  );
};

export default AboutSection;

