"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../globle.css";

function Middle() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="p-4  min-h-[80vh] flex items-center text-center justify-center flex-col relative z-10 mx-auto ">
      {/* Floating Coffee */}
      <Image
        src="/kunal.png"
        className="mb-6   rounded-full drop-shadow-neutral-50"
        width={240}
        height={200}
        alt="Coffee GIF"
      />
      {/* Main Heading */}
      <h1 className="text-5xl sm:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent my-6 animate-pulse tilt-neon">
        Hi, I'm Kunal
      </h1>
      {/* Subheading */}
      <p className="sm:text-2xl  text-gray-200 font-mono mb-6">
        MERN STACK DEVELOPER <span className="animate-pulse">🚀</span>
      </p>{" "}
      <p className="sm:text-2xl text-gray-200 font-mono mb-6">
        MASTER IN COMPUTER APPLICATIONS
      </p>
      {/* Wavy Underline */}
      <div className="relative mb-4">
        <span className="text-white text-md sm:text-lg">
          Let’s build something awesome together. 💻
        </span>
        <div className="absolute left-0 right-0 h-1 mt-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 animate-pulse rounded-full blur-sm"></div>
      </div>
    </div>
  );
}

export default Middle;
