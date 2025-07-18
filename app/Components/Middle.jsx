"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import "../globle.css";

function Middle() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-4  min-h-[80vh] flex items-center text-center justify-center flex-col relative z-10 mx-auto  ">
      {/* Main Heading */}
      <h1 className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent my-6 animate-pulse tilt-neon">
        Hi, I'm Kunal
      </h1>
      {/* Subheading */}
      <p className="sm:text-2xl  text-gray-200 font-mono mb-2">
        MERN STACK DEVELOPER <span className="animate-pulse">🚀</span>
      </p>{" "}
      <p className="text-white capitalize mb-2">AND</p>
      <p className="sm:text-2xl text-gray-200 font-mono mb-2">
        MASTER IN COMPUTER APPLICATIONS
      </p>
      {/* Wavy Underline */}
      <div className="relative mb-2">
        <span className="text-white text-md sm:text-lg">
          Let’s build something awesome together. 💻
        </span>
        <div className="absolute left-0 right-0 h-1 mt-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 animate-pulse rounded-full blur-sm"></div>
      </div>
      <Link href="/projects">
        <button className="mt-4 px-6 cursor-pointer py-3 bg-gradient-to-r from-green-500 via-blue-400 to-purple-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]">
          View My Work
        </button>
      </Link>
    </div>
  );
}

export default Middle;
