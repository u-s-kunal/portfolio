"use client";

import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Music App",
    cagtegory: "Applications",
    description:
      "A modern music streaming app with playlist and search functionality.",
    image:
      "https://cdn.pixabay.com/photo/2014/05/21/15/18/musician-349790_960_720.jpg",
    link: "https://u-s-kunal.github.io/music/",
  },
  {
    title: "Password Manager",
    cagtegory: "Applications",
    description: "Secure password storage using encryption and local storage.",
    image:
      "https://cdn.pixabay.com/photo/2019/01/17/19/11/registration-3938434_960_720.jpg",
    link: "https://u-s-kunal.github.io/passmanager/",
  },
  {
    title: "Car Game",
    cagtegory: "Games",

    description: "Simple racing game using HTML5 canvas and JavaScript.",
    image:
      "https://cdn.pixabay.com/photo/2019/08/09/06/12/car-racing-4394450_960_720.jpg",
    link: "https://u-s-kunal.github.io/cargame/",
  },
  {
    title: "Currency Converter",
    cagtegory: "Applications",
    description: "Live currency converter using real-time exchange rates.",
    image:
      "https://cdn.pixabay.com/photo/2012/12/11/21/28/mixture-69523_960_720.jpg",
    link: "https://u-s-kunal.github.io/currency-converter",
  },
  {
    title: "E-Commerce",
    cagtegory: "Websites",
    description:
      "Full-featured e-commerce site with cart, product listing and checkout.",
    image:
      "https://cdn.pixabay.com/photo/2019/10/07/12/08/online-shopping-4532460_960_720.jpg",
    link: "https://u-s-kunal.github.io/e-commerce/",
  },
  {
    title: "Weather App",
    cagtegory: "Applications",
    description: "Check live Weather updates with this web link",
    image:
      "https://cdn.pixabay.com/photo/2014/10/22/18/49/weather-vane-498740_960_720.jpg",
    link: "https://u-s-kunal.github.io/weatherApp/",
  },
  {
    title: "Food Delivery",
    cagtegory: "Websites",

    description:
      "This is Frond-end for the Food app I made few years Back not fully functional as i was learning HTML ,CSS and JS etc. But, you can check the UI and design of page from my initial days",
    image:
      "https://cdn.pixabay.com/photo/2022/06/14/18/58/beef-burger-7262651_960_720.jpg",
    link: "https://u-s-kunal.github.io/food_delivery/",
  },
  {
    title: "Wild Life",
    cagtegory: "Websites",

    description:
      "This is Frond-end for the Food app I made few years Back not fully functional as i was learning HTML ,CSS . But, you can check the UI and design of page from my initial days",
    image:
      "https://cdn.pixabay.com/photo/2024/02/02/00/57/ai-generated-8547056_960_720.jpg",
    link: "https://u-s-kunal.github.io/wildlife/",
  },
  {
    title: "Law",
    cagtegory: "Websites",

    description:
      "This is Frond-end for the Food app I made few years Back not fully functional as i was learning HTML ,CSS . But, you can check the UI and design of page from my initial days",
    image:
      "https://cdn.pixabay.com/photo/2025/03/05/15/04/verdict-9448861_960_720.jpg",
    link: "https://u-s-kunal.github.io/law/",
  },
  {
    title: "Library App",
    cagtegory: "Applications",
    description:
      "This is simple App to store record of the books that you have, I was leaning storing data to localStorage() and fetching that data",
    image:
      "https://cdn.pixabay.com/photo/2022/12/27/00/46/girl-7680032_960_720.png",
    link: "https://u-s-kunal.github.io/LibraryApp/",
  },
  {
    title: "Snake Game",
    cagtegory: "Games",

    description:
      "Made it while i was leaning JS this game basically use switch cases and windows objects to detect location and math.random() also",
    image:
      "https://cdn.pixabay.com/photo/2024/08/31/07/01/snake-9010653_960_720.jpg",
    link: "https://u-s-kunal.github.io/snakegame/",
  },
  {
    title: "Mini Mario",
    cagtegory: "Games",

    description:
      "Made it while i was leaning JS this game basically a copy on famous Dinosour game ofl crome i just edited its theme to the mario",
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/03/17/super-mario-5221243_960_720.jpg",
    link: "https://u-s-kunal.github.io/mario/",
  },
  {
    title: "Coffee Shop",
    cagtegory: "Websites",

    description:
      "Made it while i was leaning CSS here i used and practiced many CSS tools and tricks like transformation and animation etc.",
    image:
      "https://cdn.pixabay.com/photo/2018/01/25/20/14/coffee-3106958_960_720.png",
    link: "https://u-s-kunal.github.io/Coffeeshop/",
  },
  {
    title: "Interior",
    cagtegory: "Websites",

    description:
      "Made it while i was leaning CSS here i used Flex-box and google fonts its a demo of my design ideas",
    image:
      "https://cdn.pixabay.com/photo/2025/03/04/08/44/ai-generated-9445743_960_720.jpg",
    link: "https://u-s-kunal.github.io/interior/",
  },
  {
    title: "Expenses Calculator",
    cagtegory: "Applications",
    description:
      "react js Application which i Made few years back as i was leaning the react for the first time. use useState hook and localStorage.",
    image:
      "https://cdn.pixabay.com/photo/2019/10/18/19/51/financial-4560047_960_720.jpg",
    link: "https://u-s-kunal.github.io/expensesCal/",
  },
];

const ProjectsShowcase = () => {
  return (
    <div id="projects" className="text-white text-center p-6  ">
      <h2 className="text-6xl m-6 tilt-neon">My Projects</h2>

      <div className="text-center bg-amber-700 mt-8 w-full   rounded-3xl p-2">
        <h2 className="text-2xl flex  mx-4   ">Web Applications</h2>
      </div>
      <div className="gap-1 m-auto flex flex-wrap justify-center items-stretch">
        {projects.map(
          (project, index) =>
            project.cagtegory == "Applications" && (
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
      <div className="text-center bg-gray-700 w-full mt-8  rounded-3xl p-2">
        <h2 className="text-2xl flex  mx-4  ">Games</h2>
      </div>
      <div className="gap-1 m-auto flex flex-wrap justify-center items-stretch">
        {projects.map(
          (project, index) =>
            project.cagtegory == "Games" && (
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
      <div className="text-center bg-green-700 w-full mt-8  rounded-3xl p-2">
        <h2 className="text-2xl flex  mx-4  ">Web Designs</h2>
      </div>
      <div className="gap-1 m-auto flex flex-wrap justify-center items-stretch">
        {projects.map(
          (project, index) =>
            project.cagtegory == "Websites" && (
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
