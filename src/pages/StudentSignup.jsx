// src/pages/StudentSignup.jsx
import { useState } from "react";

export default function StudentSignup() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    enrollmentNumber: "",
    course: "",
    branch: "",
    yearOfStudy: "",
    password: "",
    confirmPassword: "",
  });

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Student Signup Data:", form);
    // 👉 here you can call API for signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 px-4">
      <div className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-slate-800 dark:text-white">
          Student Signup
        </h1>
        <p className="mt-2 text-center text-slate-600 dark:text-slate-400">
          Create your student account to connect with alumni and faculty
        </p>

        <form onSubmit={submitForm} className="mt-6 space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Full Name
            </label>
            <input
              type="text"
              value={form.fullName}
              onChange={update("fullName")}
              placeholder="Enter your full name"
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email & Enrollment */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Enrollment Number
              </label>
              <input
                type="text"
                value={form.enrollmentNumber}
                onChange={update("enrollmentNumber")}
                placeholder="e.g. 24CSE161"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Course & Branch */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Course
              </label>
              <input
                type="text"
                value={form.course}
                onChange={update("course")}
                placeholder="B.Tech / M.Tech"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Branch
              </label>
              <input
                type="text"
                value={form.branch}
                onChange={update("branch")}
                placeholder="CSE / ECE / ME"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Year of Study */}
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Year of Study
            </label>
            <input
              type="text"
              value={form.yearOfStudy}
              onChange={update("yearOfStudy")}
              placeholder="e.g. 2nd Year"
              className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Passwords */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Password
              </label>
              <input
                type="password"
                value={form.password}
                onChange={update("password")}
                placeholder="Enter password"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Confirm Password
              </label>
              <input
                type="password"
                value={form.confirmPassword}
                onChange={update("confirmPassword")}
                placeholder="Re-enter password"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 font-semibold transition"
            >
              Create Student Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
