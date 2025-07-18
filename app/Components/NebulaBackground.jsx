"use client";

import React from "react";

const NebulaBackground = ({ className = "" }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 ${className}`}
    >
      {/* Starry space background */}
      <div className="absolute w-full h-full bg-black">
        <div className="w-full h-full bg-[radial-gradient(circle,#222_1%,transparent_90%)] opacity-40 animate-pulse" />
      </div>

      {/* Rotating Nebula Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img src="/Blackhole.png" alt="Blackhole" className="nebula" />
      </div>
    </div>
  );
};

export default NebulaBackground;
