// src/pages/SignupPage.jsx
import React, { useState } from "react";
import {
  User,
  GraduationCap,
  Users,
  Building2,
  Briefcase,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

/**
 * Multi-role Signup page
 * - Default role: alumni
 * - Student role uses a multi-step (2-step) form
 * - Other roles: single-step clean forms
 *
 * Tailwind classes assume your app already uses Tailwind + the trust palette.
 */

const ROLE_META = {
  alumni: { label: "Alumni", Icon: User },
  student: { label: "Current Student", Icon: GraduationCap },
  faculty: { label: "Faculty", Icon: Users },
  management: { label: "Management", Icon: Building2 },
  employer: { label: "Employer", Icon: Briefcase },
};

export default function SignupPage() {
  const [role, setRole] = useState("alumni"); // default as requested
  const [studentStep, setStudentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);

  // Simple local state for forms (in production, use form library)
  const [form, setForm] = useState({
    // common
    name: "",
    username: "",
    email: "",
    password: "",

    // student
    registrationNumber: "",
    college: "",
    expectedGradYear: "",
    branch: "",

    // alumni
    gradYear: "",
    alumniBranch: "",
    specialization: "",

    // faculty
    designation: "",
    department: "",
    employeeId: "",
    researchInterests: "",

    // management
    institutionName: "",
    position: "",
    institutionType: "",

    // employer
    companyName: "",
    companyWebsite: "",
    companySize: "",
    industry: "",
    recruiterRole: "",
  });

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }));

  // Basic front-end validation examples
  const validateStudentStep1 = () =>
    form.name.trim() !== "" &&
    form.username.trim() !== "" &&
    form.email.includes("@") &&
    form.password.length >= 8;

  const validateStudentStep2 = () =>
    form.registrationNumber.trim() !== "" &&
    form.college.trim() !== "" &&
    form.expectedGradYear.trim() !== "" &&
    form.branch.trim() !== "";

  const submitForm = (e) => {
    e?.preventDefault();
    setSubmitting(true);
    // demo: simulate submit then reset (replace with real API call)
    setTimeout(() => {
      alert(`Signed up as ${ROLE_META[role].label}! (demo)`);
      setSubmitting(false);
    }, 800);
  };

  // Role-specific small helper: header text
  const { label: roleLabel, Icon: RoleIcon } = ROLE_META[role];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-lg overflow-hidden">
          {/* top: role selector */}
          <div className="p-6 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-blue-700 grid place-items-center text-white">
                    <RoleIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-indigo-900 dark:text-blue-300">
                      Create an account — {roleLabel}
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Choose a role to see the fields tailored for you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-2">
                {/* role pills in header - quick visual */}
                {Object.keys(ROLE_META).map((r) => {
                  const { label, Icon } = ROLE_META[r];
                  const active = r === role;
                  return (
                    <button
                      key={r}
                      onClick={() => {
                        setRole(r);
                        setStudentStep(1); // reset student step when switching
                      }}
                      className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm transition ${
                        active
                          ? "bg-blue-50 ring-1 ring-blue-300 text-blue-700"
                          : "text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                      }`}
                      aria-pressed={active}
                      title={label}
                    >
                      <Icon className={`h-4 w-4 ${active ? "text-blue-600" : "text-slate-400"}`} />
                      <span className="truncate max-w-[7rem]">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="p-6 md:flex md:gap-8">
            {/* left: role logo + quick benefits */}
            <aside className="hidden md:block md:w-1/3">
              <div className="space-y-4">
                <div className="rounded-xl bg-sky-50 dark:bg-slate-800 p-4">
                  <h3 className="text-sm font-semibold text-indigo-900 dark:text-blue-200">You're signing up as</h3>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-10 w-10 grid place-items-center rounded-lg bg-blue-700 text-white">
                      <RoleIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-slate-100">{roleLabel}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {role === "student" && "Split form — faster sign up"}
                        {role === "alumni" && "Connect, mentor & get updates"}
                        {role === "faculty" && "Add your faculty profile & research"}
                        {role === "management" && "Manage institution-level access"}
                        {role === "employer" && "Post jobs & hire alumni/students"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl p-3 border border-slate-100 dark:border-slate-800">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Quick tips</h4>
                  <ul className="mt-2 text-sm text-slate-600 dark:text-slate-400 space-y-2">
                    <li>Use a professional email (verifies faster).</li>
                    <li>Passwords: min 8 characters. Use a mix of letters & numbers.</li>
                    <li>Please fill accurate institution/company names.</li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* right: dynamic form */}
            <main className="md:flex-1">
              <div className="mb-4">
                {/* Mobile role selector */}
                <div className="flex items-center gap-3 md:hidden overflow-auto pb-1">
                  {Object.keys(ROLE_META).map((r) => {
                    const { Icon, label } = ROLE_META[r];
                    const active = r === role;
                    return (
                      <button
                        key={r}
                        onClick={() => {
                          setRole(r);
                          setStudentStep(1);
                        }}
                        className={`flex items-center gap-2 min-w-[6rem] rounded-full px-3 py-2 text-sm ${
                          active ? "bg-blue-50 ring-1 ring-blue-300 text-blue-700" : "text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                        }`}
                        aria-pressed={active}
                      >
                        <Icon className={`h-4 w-4 ${active ? "text-blue-600" : "text-slate-400"}`} />
                        <span className="truncate">{label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* FORM */}
              <form onSubmit={submitForm}>
                {/* STUDENT: Multi-step */}
                {role === "student" && (
                  <div className="space-y-6">
                    {/* Step indicator */}
                    <div className="flex items-center gap-3 text-sm">
                      <div className={`flex items-center gap-2 ${studentStep === 1 ? "text-blue-600" : "text-slate-400"}`}>
                        <div className={`rounded-full p-1 ${studentStep === 1 ? "bg-blue-100" : "bg-slate-100 dark:bg-slate-800"}`}>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                        <span>Account</span>
                      </div>
                      <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
                      <div className={`flex items-center gap-2 ${studentStep === 2 ? "text-blue-600" : "text-slate-400"}`}>
                        <div className={`rounded-full p-1 ${studentStep === 2 ? "bg-blue-100" : "bg-slate-100 dark:bg-slate-800"}`}>
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <span>Education</span>
                      </div>
                    </div>

                    {/* Step content */}
                    {studentStep === 1 ? (
                      <div className="rounded-xl p-6 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full name</label>
                        <input value={form.name} onChange={update("name")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="e.g. Riya Sharma" />

                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mt-4">Username</label>
                        <input value={form.username} onChange={update("username")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="choose a username" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                            <input value={form.email} onChange={update("email")} type="email" className="mt-2 w-full rounded-md border px-3 py-2" placeholder="name@college.edu" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Password</label>
                            <input value={form.password} onChange={update("password")} type="password" className="mt-2 w-full rounded-md border px-3 py-2" placeholder="min 8 characters" />
                          </div>
                        </div>

                        <div className="mt-6 flex justify-end gap-3">
                          <button
                            type="button"
                            onClick={() => {
                              // validate and go next
                              if (!validateStudentStep1()) {
                                alert("Please fill name, username, valid email and password (min 8 chars).");
                                return;
                              }
                              setStudentStep(2);
                            }}
                            className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="rounded-xl p-6 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Registration / College No.</label>
                        <input value={form.registrationNumber} onChange={update("registrationNumber")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="e.g. 18BCE1234" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">College / University</label>
                            <input value={form.college} onChange={update("college")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="Your college name" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Branch / Program</label>
                            <input value={form.branch} onChange={update("branch")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="e.g. B.Tech CSE" />
                          </div>
                        </div>

                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mt-4">Expected year of graduation</label>
                        <input value={form.expectedGradYear} onChange={update("expectedGradYear")} type="number" className="mt-2 w-40 rounded-md border px-3 py-2" placeholder="e.g. 2026" />

                        <div className="mt-6 flex justify-between gap-3">
                          <button type="button" onClick={() => setStudentStep(1)} className="rounded-lg border px-4 py-2">Back</button>

                          <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-4 py-2 text-white"
                            onClick={(ev) => {
                              if (!validateStudentStep2()) {
                                ev.preventDefault();
                                alert("Please complete registration number, college, branch and expected graduation year.");
                                return;
                              }
                              // submitForm will run on actual submit
                            }}
                          >
                            {submitting ? "Submitting..." : "Create Student Account"}
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* ALUMNI: single tidy form */}
                {role === "alumni" && (
                  <div className="space-y-4">
                    <div className="rounded-xl p-6 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full name</label>
                      <input value={form.name} onChange={update("name")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="Full name" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                          <input value={form.email} onChange={update("email")} type="email" className="mt-2 w-full rounded-md border px-3 py-2" placeholder="name@example.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Username</label>
                          <input value={form.username} onChange={update("username")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="username" />
                        </div>
                      </div>

                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mt-4">Password</label>
                      <input value={form.password} onChange={update("password")} type="password" className="mt-2 w-full rounded-md border px-3 py-2" placeholder="min 8 characters" />

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Graduation year</label>
                          <input value={form.gradYear} onChange={update("gradYear")} type="number" className="mt-2 w-full rounded-md border px-3 py-2" placeholder="e.g. 2020" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">College</label>
                          <input value={form.college} onChange={update("college")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="College name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Branch</label>
                          <input value={form.alumniBranch} onChange={update("alumniBranch")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="e.g. ECE" />
                        </div>
                      </div>

                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mt-4">Specialization (optional)</label>
                      <input value={form.specialization} onChange={update("specialization")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="e.g. ML, Product Management" />
                    </div>

                    <div className="flex justify-end gap-3">
                      <button type="submit" onClick={submitForm} className="rounded-lg bg-blue-600 px-4 py-2 text-white">
                        Create Alumni Account
                      </button>
                    </div>
                  </div>
                )}

                {/* FACULTY */}
                {role === "faculty" && (
                  <div className="space-y-4">
                    <div className="rounded-xl p-6 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full name</label>
                      <input value={form.name} onChange={update("name")} className="mt-2 w-full rounded-md border px-3 py-2" />

                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email (institutional preferred)</label>
                          <input value={form.email} onChange={update("email")} type="email" className="mt-2 w-full rounded-md border px-3 py-2" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Designation</label>
                          <input value={form.designation} onChange={update("designation")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="e.g. Assistant Professor" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Department</label>
                          <input value={form.department} onChange={update("department")} className="mt-2 w-full rounded-md border px-3 py-2" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Employee ID</label>
                          <input value={form.employeeId} onChange={update("employeeId")} className="mt-2 w-full rounded-md border px-3 py-2" />
                        </div>
                      </div>

                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mt-4">Research / Interests (comma separated)</label>
                      <input value={form.researchInterests} onChange={update("researchInterests")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="AI, Networks, HCI..." />
                    </div>

                    <div className="flex justify-end">
                      <button type="submit" onClick={submitForm} className="rounded-lg bg-blue-600 px-4 py-2 text-white">Create Faculty Account</button>
                    </div>
                  </div>
                )}

                {/* MANAGEMENT */}
                {role === "management" && (
                  <div className="space-y-4">
                    <div className="rounded-xl p-6 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full name</label>
                      <input value={form.name} onChange={update("name")} className="mt-2 w-full rounded-md border px-3 py-2" />

                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                          <input value={form.email} onChange={update("email")} type="email" className="mt-2 w-full rounded-md border px-3 py-2" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Position</label>
                          <input value={form.position} onChange={update("position")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="Dean / Registrar / Principal" />
                        </div>
                      </div>

                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mt-4">Institution name</label>
                      <input value={form.institutionName} onChange={update("institutionName")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="College / University" />

                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mt-4">Institution type (optional)</label>
                      <input value={form.institutionType} onChange={update("institutionType")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="Public / Private / Deemed" />
                    </div>

                    <div className="flex justify-end">
                      <button type="submit" onClick={submitForm} className="rounded-lg bg-blue-600 px-4 py-2 text-white">Create Admin Account</button>
                    </div>
                  </div>
                )}

                {/* EMPLOYER */}
                {role === "employer" && (
                  <div className="space-y-4">
                    <div className="rounded-xl p-6 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Full name</label>
                      <input value={form.name} onChange={update("name")} className="mt-2 w-full rounded-md border px-3 py-2" />

                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Company email</label>
                          <input value={form.email} onChange={update("email")} type="email" className="mt-2 w-full rounded-md border px-3 py-2" placeholder="you@company.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Role / Title</label>
                          <input value={form.recruiterRole} onChange={update("recruiterRole")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="Recruiter / Hiring Manager" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Company name</label>
                          <input value={form.companyName} onChange={update("companyName")} className="mt-2 w-full rounded-md border px-3 py-2" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Company website (optional)</label>
                          <input value={form.companyWebsite} onChange={update("companyWebsite")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="https://example.com" />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Industry</label>
                          <input value={form.industry} onChange={update("industry")} className="mt-2 w-full rounded-md border px-3 py-2" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Company size (optional)</label>
                          <input value={form.companySize} onChange={update("companySize")} className="mt-2 w-full rounded-md border px-3 py-2" placeholder="e.g. 50-200" />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button type="submit" onClick={submitForm} className="rounded-lg bg-blue-600 px-4 py-2 text-white">Create Employer Account</button>
                    </div>
                  </div>
                )}
              </form>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
