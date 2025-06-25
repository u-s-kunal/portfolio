"use client";
import React from "react";

const skills = [
  {
    title: "HTML",
    image: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    description: "The structure of the web. Semantic and clean markup.",
  },
  {
    title: "CSS",
    image: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    description: "Styling web pages with layouts, animations, and more.",
  },
  {
    title: "JavaScript",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    description: "Adding interactivity and dynamic behavior to websites.",
  },
  {
    title: "Tailwind CSS",
    image: "https://avatars.githubusercontent.com/u/67109815?s=200&v=4",
    description: "Utility-first CSS framework for fast UI development.",
  },
  {
    title: "React.js",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    description: "Powerful JavaScript library for building UIs and SPAs.",
  },
  {
    title: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
    description: "NoSQL database for scalable and flexible data storage.",
  },
  {
    title: "Next.js",
    image: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    description: "React framework for server-side rendering and routing.",
  },
  {
    title: "Git",
    image: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png",
    description: "Version control system to manage code efficiently.",
  },
  {
    title: "GitHub",
    image: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    description: "Code hosting platform for collaboration and CI/CD.",
  },
  {
    title: "Bootstrap",
    image: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
    description: "Popular CSS framework for responsive design.",
  },
];

export default function CurrentSkills() {
  return (
    <div className=" text-white text-center  p-6  " id="skillls">
      <h2 className="text-6xl  m-6 tilt-neon">My Current Skills</h2>

      <div className="gap-1 m-auto flex flex-wrap justify-center items-stretch">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-50 min-h-[250px] flex flex-col justify-between rounded-2xl border border-amber-50 shadow-md p-6 text-center bg-[#DCD7C9] m-4 transform transition-all duration-300 hover:scale-105 hover:bg-gradient-to-br hover:from-gray-600 hover:to-orange-400 hover:shadow-2xl text-gray-800 hover:text-amber-50"
          >
            <div>
              <img
                src={skill.image}
                alt={skill.title}
                className="w-20  rounded-2xl p-1  object-contain mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold ">{skill.title}</h3>
            </div>
            <p className=" text-sm">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
