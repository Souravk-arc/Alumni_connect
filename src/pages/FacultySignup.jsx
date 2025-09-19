import React, { useState } from "react";

export default function FacultySignup() {
  const [role, setRole] = useState("faculty");
  const [form, setForm] = useState({
    name: "",
    email: "",
    designation: "",
    department: "",
    employeeId: "",
    researchInterests: "",
    position: "",
    institutionName: "",
    institutionType: "",
  });

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Submitting:", { role, ...form });
    // TODO: send to backend
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 shadow-2xl rounded-2xl p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 text-center">
          {role === "faculty" ? "Faculty Signup" : "Management Signup"}
        </h2>

        {/* Role Selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            Select Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          >
            <option value="faculty">Faculty</option>
            <option value="management">Management</option>
          </select>
        </div>

        {/* Form */}
        <form onSubmit={submitForm} className="space-y-5">
          {/* Common Fields */}
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
              Full Name
            </label>
            <input
              value={form.name}
              onChange={update("name")}
              className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
              Email
            </label>
            <input
              type="email"
              value={form.email}
              onChange={update("email")}
              className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@university.edu"
            />
          </div>

          {/* Faculty-specific */}
          {role === "faculty" && (
            <>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Designation
                  </label>
                  <input
                    value={form.designation}
                    onChange={update("designation")}
                    placeholder="Assistant Professor"
                    className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Department
                  </label>
                  <input
                    value={form.department}
                    onChange={update("department")}
                    placeholder="Computer Science"
                    className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Employee ID
                  </label>
                  <input
                    value={form.employeeId}
                    onChange={update("employeeId")}
                    className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Research Interests
                  </label>
                  <input
                    value={form.researchInterests}
                    onChange={update("researchInterests")}
                    placeholder="AI, Networks, HCI..."
                    className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </>
          )}

          {/* Management-specific */}
          {role === "management" && (
            <>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Position
                </label>
                <input
                  value={form.position}
                  onChange={update("position")}
                  placeholder="Dean / Registrar / Principal"
                  className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Institution Name
                </label>
                <input
                  value={form.institutionName}
                  onChange={update("institutionName")}
                  placeholder="College / University"
                  className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Institution Type (optional)
                </label>
                <input
                  value={form.institutionType}
                  onChange={update("institutionType")}
                  placeholder="Public / Private / Deemed"
                  className="mt-2 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          {/* Submit */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              className="w-full md:w-auto rounded-xl bg-blue-600 px-6 py-2.5 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-200"
            >
              {role === "faculty"
                ? "Create Faculty Account"
                : "Create Admin Account"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
