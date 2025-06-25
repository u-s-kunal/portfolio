"use client";
import React from "react";

const NeonLoader = ({ text = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <div className="relative w-40 h-22 sm:w-60 sm:h-32 mb-8">
        <svg viewBox="0 0 200 100" className="w-full h-full">
          <defs>
            {/* Blue glow applied to white stroke */}
            <filter
              id="neon-glow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="6"
                floodColor="#00f0ff"
              />
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="14"
                floodColor="#00f0ff"
              />
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="24"
                floodColor="#00f0ff"
              />
            </filter>

            {/* Gradient to fade in/out the white stroke */}
            <linearGradient id="glow-gradient" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Glowing white ray with blue glow moving in infinity loop */}
          <path
            d="M 30,50 
     C 30,20 70,20 100,50 
     C 130,80 170,80 170,50 
     C 170,20 130,20 100,50 
     C 70,80 30,80 30,50"
            stroke="url(#glow-gradient)"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
            filter="url(#neon-glow)"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;400"
              dur="1.2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dasharray"
              values="90,310"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      <p className="text-xl animate-pulse tracking-widest text-white/80">
        {text}
      </p>
    </div>
  );
};

export default NeonLoader;
