"use client";

import React, { useEffect, useState } from "react";

const StarField = ({ count = 300, className = "" }) => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    // Regular static stars
    const staticStars = Array.from({ length: count }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
    }));
    setStars(staticStars);

    // Shooting stars logic
    const interval = setInterval(() => {
      const newShootingStar = {
        id: Date.now(),
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      };

      setShootingStars((prev) => [...prev, newShootingStar]);

      // Remove after animation
      setTimeout(() => {
        setShootingStars((prev) =>
          prev.filter((star) => star.id !== newShootingStar.id)
        );
      }, 1500);
    }, 3000); // one every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[-50] h-full w-full overflow-hidden ${className}`}
    >
      {/* Static Stars */}
      {stars.map((star, index) => (
        <div
          key={index}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            position: "absolute",
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            top: star.top,
            left: star.left,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
