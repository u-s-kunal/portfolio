"use client";
import React, { useState } from "react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup successful!");
    console.log(formData);
    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="h-[130vh] bg-cover bg-center bg-[url('https://source.unsplash.com/1600x900/?abstract,tech')] flex flex-col">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#20e_100%)]"></div>

      {/* Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-lg w-full max-w-md text-white">
          <p className="font-light text-4xl sm:text-3xl m-6 text-center text-shadow-md tilt-neon text-white">
            Sign Up
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/30 placeholder-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/30 placeholder-white focus:outline-none"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl bg-white/30 placeholder-white focus:outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
