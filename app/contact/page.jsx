
"use client";

import "../global.css";
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

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
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

        setTimeout(() => {
          setShowSuccess(false);
        }, 3000);
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
    <main className="contact-page">
      <div className="contact-container">

        {/* Header */}
        <header className="contact-header">
          <span className="contact-label">CONTACT</span>

          <h1>Let&apos;s talk.</h1>

          <p>
            Have a project, opportunity, or just want to get in touch?
            Send me a message and I&apos;ll get back to you.
          </p>
        </header>

        {/* Main */}
        <div className="contact-grid">

          {/* Information */}
          <aside className="contact-info">
            <div>
              <span className="contact-section-label">
                GET IN TOUCH
              </span>

              <h2>Let&apos;s start a conversation.</h2>

              <p>
                I&apos;m interested in full-stack development roles,
                freelance projects, and opportunities where I can
                build useful web applications.
              </p>
            </div>

            <div className="contact-details">

              <div className="contact-detail">
                <span>Response time</span>
                <strong>Usually within 24–48 hours</strong>
              </div>

              <div className="contact-detail">
                <span>Areas I work with</span>
                <strong>
                  React · Next.js · Node.js · MongoDB
                </strong>
              </div>

              <div className="contact-detail">
                <span>Availability</span>
                <strong>
                  Open to opportunities and project discussions
                </strong>
              </div>

            </div>
          </aside>

          {/* Form */}
          <section className="contact-form-section">
            <div className="contact-form-header">
              <span className="contact-section-label">
                SEND A MESSAGE
              </span>

              <h2>Tell me about your project.</h2>
            </div>

            {showSuccess && (
              <div className="contact-success">
                Message sent successfully.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="contact-form-row">

                {/* Name */}
                <div className="contact-field">
                  <label htmlFor="name">
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  {errors.name && (
                    <p className="field-error">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="contact-field">
                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  {errors.email && (
                    <p className="field-error">
                      {errors.email}
                    </p>
                  )}
                </div>

              </div>

              {/* Subject */}
              <div className="contact-field">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                />

                {errors.subject && (
                  <p className="field-error">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="contact-field">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me a little about it..."
                  value={formData.message}
                  onChange={handleChange}
                />

                {errors.message && (
                  <p className="field-error">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="contact-submit"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </section>

        </div>
      </div>
    </main>
  );
};

export default ContactMePage;

