"use client";
import React from "react";
import "../globle.css";
import Social from "../Components/Social";
import Link from "next/link";

function Login() {
  return (
    <>
      <div className="flex  justify-center items-center   ">
        <div className="flex items-center justify-center w-[40%]  mt-8  ">
          <div className="bg-gray-600 p-8 rounded-2xl shadow-md w-[70%] ">
            <p className="font-light text-4xl sm:text-3xl m-6 text-center text-shadow-md tilt-neon text-white tilt-neon">
              Login
            </p>
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4 text-right">
                <Link
                  href="/forgotpassword"
                  className="text-sm text-blue-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>

        <span className="w-[1px] bg-white  h-150 my-12 "></span>

        <span className="flex m-8 w-[40%]">
          <Social />
        </span>
      </div>
    </>
  );
}

export default Login;
