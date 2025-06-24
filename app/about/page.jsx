"use client";
import React from "react";
import "../../app/globle.css";
import { useState, useEffect } from "react";

const SupportMePage = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div className="max-w-auto mx-auto p-6 text-center my-4">
        <p className="font-light text-5xl sm:text-6xl m-8 text-center text-shadow-md tilt-neon text-white">
          About Me
        </p>

        <p className="text-white text-lg sm:text-xl leading-relaxed bg-gradient-to-br from-[#1e1e2fB3] to-[#2a2a40] p-6 rounded-2xl shadow-xl max-w-3xl mx-auto mb-4">
          👋 Hi i am Kunal! A curious and creative coder currently pursuing my
          <span className="font-semibold text-teal-300">
            {" "}
            Master of Computer Applications{" "}
          </span>{" "}
          🎓 at Sandip University. I love exploring the world of code and
          building cool things on the web 💻✨.
          <br />
          <br />
          Over the past few years, I’ve worked on a bunch of fun projects like a
          🎵
          <span className="font-semibold text-orange-300">Music App</span>, an
          🛍️
          <span className="font-semibold text-pink-300">E-Commerce Site</span>,
          a 🌦️ <span className="font-semibold text-blue-300">Weather App</span>,
          and even retro games like 🐍{" "}
          <span className="font-semibold text-green-300">Snake</span> & 🍄{" "}
          <span className="font-semibold text-yellow-300">Mini Mario</span>!
          <br />
          <br />
          I’m always experimenting with new tools and ideas — from classic web
          tech to modern
          <span className="font-semibold text-indigo-300"> React </span> and
          <span className="font-semibold text-indigo-300"> Next.js </span> 🔥.
          I'm also certified in
          <span className="text-lime-300 font-medium">
            {" "}
            JAVASCRIPT ALGORITHMS & DATA STRUCTURES{" "}
          </span>{" "}
          and
          <span className="text-purple-300 font-medium">
            {" "}
            FRONT-END DEVELOPMENT{" "}
          </span>{" "}
          📜.
          <br />
          <br />
          Whether it's building responsive UIs, solving logical puzzles, or just
          sipping ☕ and typing away — I enjoy every bit of the dev journey.
          Let’s create something awesome together! 🚀
        </p>
      </div>
   
    </div>
  );
};

export default SupportMePage;
