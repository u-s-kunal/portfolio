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
    title: "Kartenity E-commerce",
    category: "Applications",
    description:
      "E-commerce app developed in MERN which I am currently working on.",
    image: "/E-Commerce.jpeg",
    link: "https://kartenity.vercel.app",
  },
  {
    title: "Password Manager",
    category: "Applications",
    description: "Secure password storage using encryption and local storage.",
    image:
      "https://cdn.pixabay.com/photo/2019/01/17/19/11/registration-3938434_960_720.jpg",
    link: "https://u-s-kunal.github.io/passmanager/",
  },
  {
    title: "Car Game",
    category: "Games",
    description: "Simple racing game using HTML5 Canvas and JavaScript.",
    image:
      "https://cdn.pixabay.com/photo/2019/08/09/06/12/car-racing-4394450_960_720.jpg",
    link: "https://u-s-kunal.github.io/cargame/",
  },
  {
    title: "Currency Converter",
    category: "Applications",
    description: "Live currency converter using real-time exchange rates.",
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
    title: "Weather App",
    category: "Applications",
    description: "Check live weather updates with this app.",
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
    description: "Small platform game inspired by Chrome's dinosaur game.",
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/03/17/super-mario-5221243_960_720.jpg",
    link: "https://u-s-kunal.github.io/mario/",
  },
  {
    title: "Coffee Shop",
    category: "Websites",
    description: "CSS practice project demonstrating animations and UI layout.",
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
  { title: "Web Applications", key: "Applications", accent: "cyan" },
  { title: "Games", key: "Games", accent: "orange" },
  { title: "Web Designs", key: "Websites", accent: "emerald" },
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
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

function SectionTitle({ title, accent = "cyan" }) {
  const accentClasses =
    accent === "orange"
      ? "from-orange-400/60 to-transparent"
      : accent === "emerald"
        ? "from-emerald-400/60 to-transparent"
        : "from-cyan-400/60 to-transparent";

  return (
    <div className="mb-8">
      <div className="flex items-center gap-4">
        <div className={`h-px flex-1 bg-gradient-to-r ${accentClasses}`} />
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {title}
        </h2>
        <div className={`h-px flex-1 bg-gradient-to-l ${accentClasses}`} />
      </div>
    </div>
  );
}

function ProjectGrid({ items }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7"
    >
      {items.map((project) => (
        <motion.div key={project.title} variants={itemVariants}>
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
    <section
      id="projects"
      className="relative overflow-hidden py-24 px-4 md:px-8 text-white"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.10),_transparent_28%),linear-gradient(to_bottom,_rgba(2,6,23,0.9),_rgba(2,6,23,0.98))]" />
      <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold">
            Portfolio
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl font-black text-white leading-none">
            My Projects
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            A curated collection of web applications, games, and static web
            designs built while learning, experimenting, and shipping real work.
          </p>
          <div className="mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-orange-400" />
        </div>


        {sectionOrder.map((section) => {
          const items = projects.filter(
            (project) => project.category === section.key
          );

          return (
            <section key={section.key} className="mb-24">
              <SectionTitle title={section.title} accent={section.accent} />
              <ProjectGrid items={items} />
            </section>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsShowcase;