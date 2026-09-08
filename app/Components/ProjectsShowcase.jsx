
"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Music App",
    category: "Applications",
    description:
      "A modern music streaming app with playlist and search functionality.",
    image:
      "https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_960_720.jpg",
    link: "https://u-s-kunal.github.io/music/",
  },
  {
    title: "Password Manager",
    category: "Applications",
    description:
      "Secure password storage using encryption and local storage.",
    image:
      "https://cdn.pixabay.com/photo/2019/01/17/19/11/registration-3938434_960_720.jpg",
    link: "https://u-s-kunal.github.io/passmanager/",
  },
  {
    title: "Car Game",
    category: "Games",
    description:
      "Simple racing game using HTML5 Canvas and JavaScript.",
    image:
      "https://cdn.pixabay.com/photo/2019/08/09/06/12/car-racing-4394450_960_720.jpg",
    link: "https://u-s-kunal.github.io/cargame/",
  },
  {
    title: "Currency Converter",
    category: "Applications",
    description:
      "Live currency converter using real-time exchange rates.",
    image:
      "https://cdn.pixabay.com/photo/2012/12/11/21/28/mixture-69523_960_720.jpg",
    link: "https://u-s-kunal.github.io/currency-converter",
  },
  {
    title: "E-Commerce",
    category: "Websites",
    description:
      "Full-featured e-commerce site with cart, product listing, and checkout.",
    image:
      "https://cdn.pixabay.com/photo/2019/10/07/12/08/online-shopping-4532460_960_720.jpg",
    link: "https://u-s-kunal.github.io/e-commerce/",
  },
  {
    title: "SkyTube",
    category: "New Projects",
    description:
      "Full-featured video streaming application built with the MERN stack.",
    image:
      "https://cdn.pixabay.com/animation/2026/07/05/23/59/23-59-25-203_256.gif",
    link: "https://skytube-self.vercel.app/",
  },
  {
    title: "Kartenity E-commerce",
    category: "New Projects",
    description:
      "E-commerce application developed with MERN which I am currently working on.",
    image: "/E-Commerce.jpeg",
    link: "https://kartenity.vercel.app",
  },
  {
    title: "Weather App",
    category: "Applications",
    description:
      "Check live weather updates with this application.",
    image:
      "https://cdn.pixabay.com/photo/2014/10/22/18/49/weather-vane-498740_960_720.jpg",
    link: "https://u-s-kunal.github.io/weatherApp/",
  },
  {
    title: "Food Delivery",
    category: "Websites",
    description:
      "Front-end demo for a food delivery UI created while learning HTML, CSS, and JavaScript.",
    image:
      "https://cdn.pixabay.com/photo/2022/06/14/18/58/beef-burger-7262651_960_720.jpg",
    link: "https://u-s-kunal.github.io/food_delivery/",
  },
  {
    title: "Wild Life",
    category: "Websites",
    description:
      "Wildlife-themed front-end site built while learning HTML and CSS.",
    image:
      "https://cdn.pixabay.com/photo/2024/02/02/00/57/ai-generated-8547056_960_720.jpg",
    link: "https://u-s-kunal.github.io/wildlife/",
  },
  {
    title: "Law",
    category: "Websites",
    description:
      "Basic front-end site related to law created during HTML and CSS practice.",
    image:
      "https://cdn.pixabay.com/photo/2025/03/05/15/04/verdict-9448861_960_720.jpg",
    link: "https://u-s-kunal.github.io/law/",
  },
  {
    title: "Library App",
    category: "Applications",
    description:
      "App to store book records using localStorage while learning JavaScript.",
    image:
      "https://cdn.pixabay.com/photo/2022/12/27/00/46/girl-7680032_960_720.png",
    link: "https://u-s-kunal.github.io/LibraryApp/",
  },
  {
    title: "Snake Game",
    category: "Games",
    description:
      "JavaScript snake game using switch statements and Math.random().",
    image:
      "https://cdn.pixabay.com/photo/2024/08/31/07/01/snake-9010653_960_720.jpg",
    link: "https://u-s-kunal.github.io/snakegame/",
  },
  {
    title: "Mini Mario",
    category: "Games",
    description:
      "Small platform game inspired by Chrome's dinosaur game.",
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/03/17/super-mario-5221243_960_720.jpg",
    link: "https://u-s-kunal.github.io/mario/",
  },
  {
    title: "Coffee Shop",
    category: "Websites",
    description:
      "CSS practice project demonstrating animations and UI layout.",
    image:
      "https://cdn.pixabay.com/photo/2018/01/25/20/14/coffee-3106958_960_720.png",
    link: "https://u-s-kunal.github.io/Coffeeshop/",
  },
  {
    title: "Interior",
    category: "Websites",
    description:
      "Interior design themed layout using Flexbox and Google Fonts.",
    image:
      "https://cdn.pixabay.com/photo/2025/03/04/08/44/ai-generated-9445743_960_720.jpg",
    link: "https://u-s-kunal.github.io/interior/",
  },
  {
    title: "Expenses Calculator",
    category: "Applications",
    description:
      "React app using useState and localStorage to track expenses.",
    image:
      "https://cdn.pixabay.com/photo/2019/10/18/19/51/financial-4560047_960_720.jpg",
    link: "https://u-s-kunal.github.io/expensesCal/",
  },
];

const sectionOrder = [
  { title: "New Projects", key: "New Projects" },
  { title: "Web Applications", key: "Applications" },
  { title: "Games", key: "Games" },
  { title: "Web Designs", key: "Websites" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

function SectionTitle({ title, count }) {
  return (
    <div className="projects-section-title">
      <div className="projects-section-number">
        {String(count).padStart(2, "0")}
      </div>

      <h2>{title}</h2>

      <span className="projects-section-line" />
    </div>
  );
}

function ProjectGrid({ items }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="projects-grid"
    >
      {items.map((project) => (
        <motion.div
          key={project.title}
          variants={itemVariants}
          className="project-grid-item"
        >
          <ProjectCard
            link={project.link}
            image={project.image}
            title={project.title}
            description={project.description}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}

const ProjectsShowcase = () => {
  return (
    <main className="projects-page">
      <div className="projects-container">

        <header className="projects-header">
          <div>
            <span className="projects-label">PORTFOLIO / 2026</span>

            <h1>My Projects</h1>
          </div>

          <p>
            A collection of applications, games, and web projects built while
            learning, experimenting, and working with modern web technologies.
          </p>
        </header>

        <div className="projects-divider" />

        {sectionOrder.map((section) => {
          const items = projects.filter(
            (project) => project.category === section.key
          );

          if (!items.length) return null;

          return (
            <section
              key={section.key}
              className="projects-section"
            >
              <SectionTitle
                title={section.title}
                count={items.length}
              />

              <ProjectGrid items={items} />
            </section>
          );
        })}

      </div>
    </main>
  );
};

export default ProjectsShowcase;

