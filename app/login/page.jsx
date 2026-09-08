
"use client";

import React from "react";
import "../global.css";
import Social from "../Components/Social";
import Link from "next/link";

function Login() {
  return (
    <main className="auth-page">
      <div className="auth-container">

        {/* Login */}
        <section className="login-section">
          <div className="login-header">
            <span className="auth-label">WELCOME BACK</span>

            <h1>Login</h1>

            <p>
              Sign in to continue to your account.
            </p>
          </div>

          <form className="login-form">
            <div className="form-field">
              <label htmlFor="email">
                Email
              </label>

              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>

            <div className="form-field">
              <div className="password-label">
                <label htmlFor="password">
                  Password
                </label>

                <Link href="/forgotpassword">
                  Forgot password?
                </Link>
              </div>

              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>

            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>
        </section>

        {/* Divider */}
        <div className="auth-divider">
          <span>OR</span>
        </div>

        {/* Social */}
        <section className="social-section">
          <span className="auth-label">CONNECT</span>

          <h2>Find me online</h2>

          <p>
            You can also find my work and professional profile here.
          </p>

          <Social />
        </section>

      </div>
    </main>
  );
}

export default Login;

