
"use client";

import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

function Middle() {
  const techBadges = [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "REST API",
    "Git",
    "GitHub",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Bootstrap",
  ];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-grid">

          {/* LEFT */}
          <div className="hero-content">
            <p className="hero-intro">&lt; Hello, I&apos;m /&gt;</p>

            <h1>Kunal Ughade</h1>

            <h2>MERN Stack Developer</h2>

            <div className="hero-line" />

            <p className="hero-description">
              I build fast, scalable web applications using React,
              Next.js, Node.js and MongoDB, with a focus on clean
              architecture, performance and practical user experiences.
            </p>

            <div className="hero-actions">
              <Link href="/projects" className="primary-button">
                View My Projects
                <ArrowRight size={17} />
              </Link>

              <Link href="/contact" className="secondary-button">
                Contact Me
              </Link>
            </div>

            <div className="hero-social">
              <span>Find me on</span>

              <a
                href="https://github.com/u-s-kunal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>

              <a
                href="http://linkedin.com/in/kunal-s-ughade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:developerkunal01@gmail.com"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="skills-panel">

            <div className="skills-header">
              <div>
                <span className="skills-label">TECHNICAL SKILLS</span>
                <h3>Tools I work with</h3>
              </div>

              <span className="skills-count">
                {techBadges.length} technologies
              </span>
            </div>

            <div className="skills-list">
              {techBadges.map((skill, index) => (
                <div className="skill-item" key={skill}>
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <div className="skills-footer">
              <span>Currently focused on</span>
              <strong>Full-Stack Development</strong>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="hero-stats">
          <div className="stat">
            <strong>40+</strong>
            <span>Projects</span>
          </div>

          <div className="stat">
            <strong>5+</strong>
            <span>Years Learning</span>
          </div>

          <div className="stat">
            <strong>100%</strong>
            <span>Dedication</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Middle;
