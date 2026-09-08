
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
    "Creating clean and usable interfaces",
    "Solving programming problems",
    "Learning new technologies",
    "Improving application performance",
  ];

  const certifications = [
    "JavaScript Algorithms & Data Structures",
    "Front-End Development",
  ];

  return (
    <main className="about-page">
      <div className="about-container">

        {/* Header */}
        <header className="about-header">
          <span className="about-label">ABOUT ME</span>

          <h1>
            Developer focused on
            <br />
            building useful things.
          </h1>

          <p>
            I&apos;m a full-stack developer who enjoys turning ideas into
            practical web applications with clean interfaces and reliable
            functionality.
          </p>
        </header>

        {/* Introduction */}
        <section className="about-introduction">

          <div className="about-intro-heading">
            <span>01</span>
            <h2>A little about me</h2>
          </div>

          <div className="about-intro-content">
            <p>
              I&apos;m <strong>Kunal Ughade</strong>, a full-stack developer
              and Master of Computer Applications graduate from
              <strong> Sandip University</strong>.
            </p>

            <p>
              I enjoy taking an idea from the initial concept through to a
              working web application. My focus is on writing understandable
              code, building responsive interfaces, and creating applications
              that solve real problems.
            </p>

            <p>
              My projects have included e-commerce platforms, music
              applications, weather dashboards, browser games, and
              AI-powered applications. Every project gives me an opportunity
              to learn something new and improve how I approach development.
            </p>
          </div>

        </section>

        {/* Skills */}
        <section className="about-section">

          <div className="about-section-heading">
            <span>02</span>

            <div>
              <span className="about-label">TECHNICAL SKILLS</span>
              <h2>Technologies I use</h2>
            </div>
          </div>

          <div className="about-skills">
            {skills.map((skill, index) => (
              <div className="about-skill" key={skill}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{skill}</strong>
              </div>
            ))}
          </div>

        </section>

        {/* What I enjoy */}
        <section className="about-section">

          <div className="about-section-heading">
            <span>03</span>

            <div>
              <span className="about-label">INTERESTS</span>
              <h2>What I enjoy</h2>
            </div>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div className="highlight" key={item}>
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>{item}</p>
              </div>
            ))}
          </div>

        </section>

        {/* Education + Certifications */}
        <section className="about-section">

          <div className="about-section-heading">
            <span>04</span>

            <div>
              <span className="about-label">BACKGROUND</span>
              <h2>Education & Certifications</h2>
            </div>
          </div>

          <div className="about-background">

            <div className="background-block">
              <span className="background-label">
                EDUCATION
              </span>

              <h3>
                Master of Computer Applications
              </h3>

              <p>
                Sandip University
              </p>

              <span className="background-meta">
                MCA
              </span>
            </div>

            <div className="background-block">
              <span className="background-label">
                CERTIFICATIONS
              </span>

              <div className="certification-list">
                {certifications.map((cert) => (
                  <p key={cert}>
                    {cert}
                  </p>
                ))}
              </div>
            </div>

          </div>

        </section>

      </div>
    </main>
  );
};

export default AboutPage;

