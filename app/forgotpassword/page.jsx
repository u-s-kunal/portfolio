
import React from "react";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <main className="auth-page">
      <div className="forgot-container">

        <div className="forgot-header">
          <span className="auth-label">ACCOUNT RECOVERY</span>

          <h1>Reset Password</h1>

          <p>
            Enter the email address associated with your account
            and we&apos;ll send you a link to reset your password.
          </p>
        </div>

        <form className="forgot-form">
          <div className="form-field">
            <label htmlFor="reset-email">
              Email
            </label>

            <input
              type="email"
              id="reset-email"
              placeholder="Enter your registered email"
              autoComplete="email"
              required
            />
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Send Reset Link
          </button>
        </form>

        <div className="forgot-back">
          <Link href="/login">
            ← Back to Login
          </Link>
        </div>

      </div>
    </main>
  );
}

