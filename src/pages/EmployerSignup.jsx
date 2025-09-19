import { useState } from "react";

export default function EmployerSignup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    recruiterRole: "",
    companyName: "",
    companyWebsite: "",
    industry: "",
    companySize: "",
  });

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Employer Signup Data:", form);
    // TODO: integrate with backend API
    alert("Employer account created ✅");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 px-4 py-12">
      <div className="w-full max-w-3xl bg-white dark:bg-slate-900 shadow-lg rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">
          Create Employer Account
        </h1>

        <form onSubmit={submitForm} className="space-y-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              Full name
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={update("name")}
              placeholder="Enter your full name"
              className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email + Role */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Company email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="you@company.com"
                className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="recruiterRole"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Role / Title
              </label>
              <input
                id="recruiterRole"
                value={form.recruiterRole}
                onChange={update("recruiterRole")}
                placeholder="Recruiter / Hiring Manager"
                className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Company Name + Website */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Company name
              </label>
              <input
                id="companyName"
                value={form.companyName}
                onChange={update("companyName")}
                placeholder="Enter company name"
                className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="companyWebsite"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Company website (optional)
              </label>
              <input
                id="companyWebsite"
                value={form.companyWebsite}
                onChange={update("companyWebsite")}
                placeholder="https://example.com"
                className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Industry + Company Size */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Industry
              </label>
              <input
                id="industry"
                value={form.industry}
                onChange={update("industry")}
                placeholder="e.g. IT, Finance, Healthcare"
                className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="companySize"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                Company size (optional)
              </label>
              <input
                id="companySize"
                value={form.companySize}
                onChange={update("companySize")}
                placeholder="e.g. 50-200"
                className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 px-3 py-2 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="rounded-lg bg-blue-600 hover:bg-blue-700 active:scale-95 transition px-8 py-3 text-white font-medium shadow-md"
            >
              Create Employer Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
