
"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Signup successful!");
    console.log(formData);

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <main className="auth-page">
      <div className="signup-container">
        <div className="signup-header">
          <span className="auth-label">CREATE ACCOUNT</span>

          <h1>Sign Up</h1>

          <p>
            Create an account to get started.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="signup-form"
        >
          <div className="form-field">
            <label htmlFor="name">
              Full Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="signup-email">
              Email
            </label>

            <input
              type="email"
              id="signup-email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="signup-password">
              Password
            </label>

            <input
              type="password"
              id="signup-password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              required
            />
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Create Account
          </button>
        </form>

        <p className="signup-footer">
          Already have an account?{" "}
          <Link href="/login">
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}

