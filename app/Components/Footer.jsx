
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-mark">KU</div>

            <div>
              <h2>Kunal Ughade</h2>
              <p>MERN Stack Developer</p>
            </div>
          </div>

          <div className="footer-message">
            <p className="footer-eyebrow">Have a project in mind?</p>

            <Link href="/contact" className="footer-cta">
              Let&apos;s talk
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-content">
          <div className="footer-about">
            <p>
              I build responsive web applications with React, Node.js,
              Express, and MongoDB, with a focus on practical solutions
              and clean user experiences.
            </p>
          </div>

          <div className="footer-column">
            <h3>Explore</h3>

            <nav>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/resume">Resume</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-column">
            <h3>Find me</h3>

            <nav>
              <a
                href="https://github.com/u-s-kunal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                href="http://linkedin.com/in/kunal-s-ughade"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

              <a href="mailto:developerkunal01@gmail.com">
                <Mail size={16} />
                Email
              </a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Kunal Ughade
          </span>

          <span>
            Built with Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}
