import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-white p-4">
      <div className="w-full max-w-md rounded-2xl bg-gray-800 shadow-2xl overflow-hidden">

        {/* Header / Branding */}
        <div className="text-center py-6 border-b border-gray-700 bg-gray-800">
          <Link to="/" className="text-3xl font-bold tracking-wider text-white hover:text-gray-300">
            Smriti Connect
          </Link>
          <p className="text-sm opacity-80 mt-1 text-white">Your Alumni Connect Portal</p>
        </div>

        {/* Login Form */}
        <div className="p-8 space-y-6 bg-gray-800">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">Email or Phone</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="block w-full rounded-xl border border-gray-600 p-3 bg-gray-700 text-white placeholder-gray-400 focus:border-white focus:ring-2 focus:ring-white transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="block w-full rounded-xl border border-gray-600 p-3 pr-12 bg-gray-700 text-white placeholder-gray-400 focus:border-white focus:ring-2 focus:ring-white transition"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-white transition"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-white">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 rounded border-gray-400 text-white focus:ring-white" />
              <span className="ml-2 text-sm">Remember me</span>
            </label>
            <a href="#" className="text-sm font-medium hover:underline">Forgot Password?</a>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 text-gray-800 font-semibold rounded-xl bg-white hover:bg-gray-200 transition"
          >
            Login
          </button>

          {/* Or continue */}
          <div className="relative my-6 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600" />
            </div>
            <span className="relative bg-gray-800 px-2 text-gray-400">
              Or continue with
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white bg-gray-700 py-2.5 text-sm font-medium text-white hover:bg-gray-600 transition">
              LinkedIn
            </button>
            <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-white bg-gray-700 py-2.5 text-sm font-medium text-white hover:bg-gray-600 transition">
              Google
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-sm text-center text-white mt-6">
            Don't have an account?{" "}
            <Link
              to="/signup-options"
              className="font-medium text-gray-800 bg-white px-2 py-1 rounded-xl hover:bg-gray-200 transition"
            >
              Sign Up Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
