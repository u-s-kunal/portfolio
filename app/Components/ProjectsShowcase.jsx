"use client";

import React from "react";
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
    category: "Current",
    description:
      " E-commerce app developed in MERN, which im currently working on",
    image:
      "/E-Commerce.jpeg",
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
      "This is a front-end demo for a food app I built while learning HTML, CSS, and JS. It’s not fully functional, but shows my early UI design efforts.",
    image:
      "https://cdn.pixabay.com/photo/2022/06/14/18/58/beef-burger-7262651_960_720.jpg",
    link: "https://u-s-kunal.github.io/food_delivery/",
  },
  {
    title: "Wild Life",
    category: "Websites",
    description:
      "A front-end wildlife-themed site built while learning HTML and CSS. It showcases UI design from my initial practice.",
    image:
      "https://cdn.pixabay.com/photo/2024/02/02/00/57/ai-generated-8547056_960_720.jpg",
    link: "https://u-s-kunal.github.io/wildlife/",
  },
  {
    title: "Law",
    category: "Websites",
    description:
      "A basic front-end site related to law, made during my HTML and CSS learning phase. Focuses on layout and UI design.",
    image:
      "https://cdn.pixabay.com/photo/2025/03/05/15/04/verdict-9448861_960_720.jpg",
    link: "https://u-s-kunal.github.io/law/",
  },
  {
    title: "Library App",
    category: "Applications",
    description:
      "A simple app to store records of books using localStorage. Created while learning data persistence in JavaScript.",
    image:
      "https://cdn.pixabay.com/photo/2022/12/27/00/46/girl-7680032_960_720.png",
    link: "https://u-s-kunal.github.io/LibraryApp/",
  },
  {
    title: "Snake Game",
    category: "Games",
    description:
      "Created while learning JS. Uses switch cases, window object, and Math.random() for gameplay logic.",
    image:
      "https://cdn.pixabay.com/photo/2024/08/31/07/01/snake-9010653_960_720.jpg",
    link: "https://u-s-kunal.github.io/snakegame/",
  },
  {
    title: "Mini Mario",
    category: "Games",
    description:
      "Built using JS. Inspired by Chrome’s Dinosaur Game, but themed like Mario.",
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/03/17/super-mario-5221243_960_720.jpg",
    link: "https://u-s-kunal.github.io/mario/",
  },
  {
    title: "Coffee Shop",
    category: "Websites",
    description:
      "Created while learning CSS. Includes animations and transformations to showcase UI design.",
    image:
      "https://cdn.pixabay.com/photo/2018/01/25/20/14/coffee-3106958_960_720.png",
    link: "https://u-s-kunal.github.io/Coffeeshop/",
  },
  {
    title: "Interior",
    category: "Websites",
    description:
      "Interior design-themed demo built with CSS Flexbox and Google Fonts to present layout ideas.",
    image:
      "https://cdn.pixabay.com/photo/2025/03/04/08/44/ai-generated-9445743_960_720.jpg",
    link: "https://u-s-kunal.github.io/interior/",
  },
  {
    title: "Expenses Calculator",
    category: "Applications",
    description:
      "React JS application created while learning React. Uses useState hook and localStorage.",
    image:
      "https://cdn.pixabay.com/photo/2019/10/18/19/51/financial-4560047_960_720.jpg",
    link: "https://u-s-kunal.github.io/expensesCal/",
  },
];

const ProjectsShowcase = () => {
  return (
    <div id="projects" className="text-white text-center p-6">
      <h2 className="text-6xl m-6 tilt-neon">My Projects</h2>

      <div className="text-center bg-red-700 mt-8 w-full rounded-2xl p-2">
        <h2 className="text-2xl mx-4">My Ongoing Work</h2>
      </div>
      <div className="gap-1 m-auto flex flex-wrap justify-center items-stretch">
        {projects.map(
          (project, index) =>
            project.category === "Current" && (
              <ProjectCard
                key={project.title}
                link={project.link}
                image={project.image}
                title={project.title}
                description={project.description}
              />
            )
        )}
      </div>

      <div className="text-center bg-amber-700 mt-8 w-full rounded-2xl p-2">
        <h2 className="text-2xl mx-4">Web Applications</h2>
      </div>
      <div className="gap-1 m-auto flex flex-wrap justify-center items-stretch">
        {projects.map(
          (project, index) =>
            project.category === "Applications" && (
              <ProjectCard
                key={project.title}
                link={project.link}
                image={project.image}
                title={project.title}
                description={project.description}
              />
            )
        )}
      </div>

      <div className="text-center bg-gray-700 w-full mt-8 rounded-2xl p-2">
        <h2 className="text-2xl mx-4">Games</h2>
      </div>
      <div className="gap-1 m-auto flex flex-wrap justify-center items-stretch">
        {projects.map(
          (project, index) =>
            project.category === "Games" && (
              <ProjectCard
                key={index}
                link={project.link}
                image={project.image}
                title={project.title}
                description={project.description}
              />
            )
        )}
      </div>

      <div className="text-center bg-green-700 w-full mt-8 rounded-2xl p-2">
        <h2 className="text-2xl mx-4">Web Designs</h2>
      </div>
      <div className="gap-1 m-auto flex flex-wrap justify-center items-stretch">
        {projects.map(
          (project, index) =>
            project.category === "Websites" && (
              <ProjectCard
                key={index}
                link={project.link}
                image={project.image}
                title={project.title}
                description={project.description}
              />
            )
        )}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
