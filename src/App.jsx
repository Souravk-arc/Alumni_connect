import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./Home/HomePage.jsx";
import Login from "./pages/Login.jsx";
import SignupOptions from "./pages/SignupOptions.jsx";
import AlumniSignup from "./pages/AlumniSignup.jsx";
import StudentSignup from "./pages/StudentSignup.jsx";
import FacultySignup from "./pages/FacultySignup.jsx";
import AdminSignup from "./pages/AdminSignup.jsx";
import RecruiterSignup from "./pages/EmployerSignup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AlumniDashboard from "./pages/AlumniDashboard.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import FacultyDashboard from "./pages/FacultyDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import RecruiterDashboard from "./pages/RecruiterDashboard.jsx";
import JobBoard from "./pages/JobBoard.jsx";

export default function App() {
  const location = useLocation();  // 👈 detect current path

  // pages where navbar should be hidden
  const hideNavbarRoutes = [
    "/login",
    "/register",
    "/signup/alumni",
    "/signup/student",
    "/signup/faculty",
    "/signup/admin",
    "/signup/employer",
  ];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Only show Navbar if not on login/signup routes */}
      {!shouldHideNavbar && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignupOptions />} />
          <Route path="/signup/alumni" element={<AlumniSignup />} />
          <Route path="/signup/student" element={<StudentSignup />} />
          <Route path="/signup/faculty" element={<FacultySignup />} />
          <Route path="/signup/admin" element={<AdminSignup />} />
          <Route path="/signup/employer" element={<RecruiterSignup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/alumni" element={<AlumniDashboard />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/faculty" element={<FacultyDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/employer" element={<RecruiterDashboard />} />
          <Route path="/jobs" element={<JobBoard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {!shouldHideNavbar && <Footer />}
    </div>
  );
}
