import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [tab, setTab] = useState("login");

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
        {/* Website name in middle - clickable */}
        <Link to="/" className="mb-6">
          <h1 className="text-3xl font-bold text-blue-600 cursor-pointer">
            Smriti Connect
          </h1>
        </Link>

        <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
          {/* Tabs */}
          <div className="flex justify-center space-x-6 mb-6">
            <button
              onClick={() => setTab("login")}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                tab === "login"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Login
            </button>
          </div>

          {/* Login Form */}
          {tab === "login" && (
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          )}

          {/* Or continue */}
          <div className="relative my-6 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600" />
            </div>
            <span className="relative bg-white px-2 text-gray-500">
              Or continue with
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-gray-100 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 transition">
              LinkedIn
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-gray-100 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-200 transition">
              Google
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-sm text-center text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign Up Now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
