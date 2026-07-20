"use client";

import "../globle.css";
import React, { useState } from "react";

const ContactMePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setShowSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen px-6 py-24 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.10),_transparent_24%),linear-gradient(to_bottom,_rgba(2,6,23,0.96),_rgba(2,6,23,1))]" />
      <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 -z-10 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm font-semibold">
            Contact
          </p>
          <h1 className="mt-4 text-5xl md:text-7xl font-black leading-none text-white">
            Let&apos;s Build
            <br />
            Something Great
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Send a message if you want to discuss a project, collaboration, or
            opportunity.
          </p>
          <div className="mx-auto mt-8 h-1 w-32 rounded-full bg-gradient-to-r from-cyan-400 to-orange-400" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] items-start">
          {/* Left side - contact info */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
            <h2 className="text-3xl font-bold text-white">Get in touch</h2>
            <p className="mt-4 text-gray-400 leading-8">
              I usually respond to messages about freelance work, full-stack
              projects, internships, and collaboration ideas.
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm uppercase tracking-[4px] text-cyan-400">
                  Response
                </p>
                <p className="mt-2 text-white">Usually within 24–48 hours</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm uppercase tracking-[4px] text-cyan-400">
                  Focus Areas
                </p>
                <p className="mt-2 text-white">
                  React, Next.js, Node.js, MERN stack, UI development
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm uppercase tracking-[4px] text-cyan-400">
                  Availability
                </p>
                <p className="mt-2 text-white">
                  Open to project discussions and opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Right side - form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
            <h2 className="text-3xl font-bold text-white">Message form</h2>
            <p className="mt-4 text-gray-400 leading-8">
              Fill in the details below and I&apos;ll get back to you.
            </p>

            {showSuccess && (
              <div className="mt-6 rounded-2xl border border-emerald-400/30 bg-emerald-400/10 px-5 py-4 text-emerald-300">
                Message sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-200">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full rounded-2xl border bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400/50 ${
                    errors.name ? "border-red-500" : "border-white/10"
                  }`}
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-200">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full rounded-2xl border bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400/50 ${
                    errors.email ? "border-red-500" : "border-white/10"
                  }`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-200">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full rounded-2xl border bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400/50 ${
                    errors.subject ? "border-red-500" : "border-white/10"
                  }`}
                />
                {errors.subject && (
                  <p className="mt-2 text-sm text-red-400">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full rounded-2xl border bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-500 focus:border-cyan-400/50 ${
                    errors.message ? "border-red-500" : "border-white/10"
                  }`}
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-2xl px-5 py-4 font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? "cursor-not-allowed bg-gray-500 text-white/80"
                    : "bg-cyan-400 text-black hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMePage;