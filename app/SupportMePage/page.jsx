"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Coffee } from "lucide-react";

const donationOptions = [1, 3, 5, 10]; // in number of "coffees"

const SupportMePage = () => {
  const [selected, setSelected] = useState(3);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSupport = async () => {
    const loaded = await loadRazorpayScript();
    if (!loaded) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY, // ✅ uses NEXT_PUBLIC_
      amount: selected * 5000, // Razorpay works in paisa
      currency: "INR",
      name: "Support My Work",
      description: `${selected} Coffee${selected > 1 ? "s" : ""}`,
      image: "/favicon.ico",
      handler: function (response) {
        setPaymentSuccess(response.razorpay_payment_id);
      },
      prefill: {
        name: "Kunal",
        email: "developerkunal01@example.com",
        contact: "8237337089",
      },
      theme: {
        color: "#FACC15",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      {paymentSuccess && (
        <div className="mt-6 px-6 py-5 w-full max-w-md bg-[#111827] border border-yellow-400 text-white rounded-2xl shadow-xl shadow-yellow-500/20 backdrop-blur-sm transition-all duration-300 animate-fade-in">
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl mb-2">✅</div>
            <h3 className="text-xl font-bold text-yellow-300 mb-1">
              Payment Successful!
            </h3>
            <p className="text-sm text-gray-300">Transaction ID:</p>
            <p className="text-yellow-400 text-sm break-words">
              {paymentSuccess}
            </p>
            <button
              onClick={() => setPaymentSuccess(null)}
              className="mt-4 px-4 py-2 text-sm font-semibold rounded-full bg-yellow-500 text-black hover:bg-yellow-400 transition-all duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className="flex min-h-screen flex-col items-center justify-center text-white ">
        <h1 className="sm:text-6xl text-4xl mb-8 font-bold tilt-neon text-center ">
          Support My Work
        </h1>

        <p className="text-center sm:2xl p-2 text-1xl text-gray-300 mb-10">
          If you want to help me on my Journey to be and Software Developer!
          Please Buy me a Coffee 💻☕ ...!!!
        </p>

        {/* Donation Options */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {donationOptions.map((count) => (
            <motion.div
              key={count}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`cursor-pointer p-5 rounded-2xl w-32 text-center border-2 transition-all ${
                selected === count
                  ? "bg-yellow-500 text-black border-yellow-400"
                  : "bg-[#1f2833] border-gray-600 hover:border-yellow-400"
              }`}
              onClick={() => setSelected(count)}
            >
              <Coffee className="mx-auto mb-2" size={32} />
              <p className="font-semibold">
                {count} Coffee{count > 1 && "s"}
              </p>
              <p className="text-sm text-gray-600">₹{count * 50}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-500 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition"
          onClick={handleSupport}
        >
          💳 Support ₹{selected * 50}
        </motion.button>
      </div>
    </>
  );
};

export default SupportMePage;
