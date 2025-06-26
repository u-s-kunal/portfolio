"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

// Fixed donation options and their corresponding Cashfree payment links
const donationOptions = [
  { count: 1, link: "https://payments.cashfree.com/links?code=o8p3t6dffvb0" },
  {
    count: 3,
    link: "https://payments.cashfree.com/links?code=Z8p3ta6jnvb0",
  },
  {
    count: 5,
    link: "https://payments.cashfree.com/links?code=l8p3tdhqvvb0",
  },
  { count: 10, link: "https://payments.cashfree.com/links?code=K8p3tfs7nhk0" },
];

const SupportMePage = () => {
  const [selected, setSelected] = useState(donationOptions[1]); // default 3 coffees

  const donationAmount = selected.count * 50;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-white">
      <h1 className="sm:text-6xl text-4xl mb-8 font-bold tilt-neon text-center">
        Support My Work
      </h1>

      <p className="text-center sm:text-2xl p-2 text-xl text-gray-300 mb-10">
        If you want to help me on my journey to become a Software Developer,
        please buy me a coffee! 💻☕
      </p>

      {/* Donation Options */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {donationOptions.map((option) => (
          <motion.div
            key={option.count}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer p-5 rounded-2xl w-32 text-center border-2 transition-all ${
              selected.count === option.count
                ? "bg-yellow-500 text-black border-yellow-400"
                : "bg-[#1f2833] border-gray-600 hover:border-yellow-400"
            }`}
            onClick={() => setSelected(option)}
          >
            <Coffee className="mx-auto mb-2" size={32} />
            <p className="font-semibold">
              {option.count} Coffee{option.count > 1 && "s"}
            </p>
            <p className="text-sm text-gray-400">₹{option.count * 50}</p>
          </motion.div>
        ))}
      </div>

      {/* Link to selected payment option */}
      <motion.a
        href={selected.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition"
      >
        💳 Support ₹{donationAmount}
      </motion.a>
    </div>
  );
};

export default SupportMePage;
