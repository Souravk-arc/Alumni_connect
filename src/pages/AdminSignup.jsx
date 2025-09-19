// src/pages/AdminSignup.jsx
import { useState } from "react";

export default function AdminSignup() {
  const [form, setForm] = useState({
    adminName: "",
    email: "",
    phone: "",
    institutionName: "",
    institutionCode: "",
    designation: "",
    password: "",
    confirmPassword: "",
  });

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Admin Signup Data:", form);
    // 👉 Call API here to create admin account
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-100 dark:from-slate-900 dark:to-slate-800 px-4">
      <div className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-slate-800 dark:text-white">
          Institution Admin Signup
        </h1>
        <p className="mt-2 text-center text-slate-600 dark:text-slate-400">
          Register your institution and manage students, faculty, and alumni
        </p>

        <form onSubmit={submitForm} className="mt-6 space-y-6">
          {/* Admin Name & Email */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                value={form.adminName}
                onChange={update("adminName")}
                placeholder="Enter your name"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="admin@institution.com"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          {/* Phone & Designation */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Phone Number
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="e.g. +91 9876543210"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Designation
              </label>
              <input
                type="text"
                value={form.designation}
                onChange={update("designation")}
                placeholder="Principal / Admin Officer"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          {/* Institution Name & Code */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Institution Name
              </label>
              <input
                type="text"
                value={form.institutionName}
                onChange={update("institutionName")}
                placeholder="e.g. Ganga Institute of Technology"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                Institution Code
              </label>
              <input
                type="text"
                value={form.institutionCode}
                onChange={update("institutionCode")}
                placeholder="e.g. GITM123"
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
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
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-green-500"
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
                className="mt-2 w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-green-500"
                required
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-lg bg-green-600 hover:bg-green-700 text-white px-6 py-2 font-semibold transition"
            >
              Create Admin Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
