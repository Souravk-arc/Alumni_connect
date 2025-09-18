import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HomePage from "./Home/HomePage.jsx";
import Login from "./pages/Login.jsx";
import SignupOptions from "./pages/SignupOptions.jsx";
import AlumniSignup from "./pages/AlumniSignup.jsx";
import StudentSignup from "./pages/StudentSignup.jsx";
import FacultySignup from "./pages/FacultySignup.jsx";
import AdminSignup from "./pages/AdminSignup.jsx";
import RecruiterSignup from "./pages/RecruiterSignup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AlumniDashboard from "./pages/AlumniDashboard.jsx";
import StudentDashboard from "./pages/StudentDashboard.jsx";
import FacultyDashboard from "./pages/FacultyDashboard.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import RecruiterDashboard from "./pages/RecruiterDashboard.jsx";
import JobBoard from "./pages/JobBoard.jsx";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<SignupOptions />} />
          <Route path="/signup/alumni" element={<AlumniSignup setUser={setUser} />} />
          <Route path="/signup/student" element={<StudentSignup setUser={setUser} />} />
          <Route path="/signup/faculty" element={<FacultySignup setUser={setUser} />} />
          <Route path="/signup/admin" element={<AdminSignup setUser={setUser} />} />
          <Route path="/signup/recruiter" element={<RecruiterSignup setUser={setUser} />} />
          
          {/* Role-based dashboards */}
          <Route path="/dashboard" element={user ? <Dashboard user={user} /> : <Navigate to="/login" />} />
          <Route path="/dashboard/alumni" element={<AlumniDashboard user={user} />} />
          <Route path="/dashboard/student" element={<StudentDashboard user={user} />} />
          <Route path="/dashboard/faculty" element={<FacultyDashboard user={user} />} />
          <Route path="/dashboard/admin" element={<AdminDashboard user={user} />} />
          <Route path="/dashboard/recruiter" element={<RecruiterDashboard user={user} />} />

          {/* Jobs page */}
          <Route path="/jobs" element={<JobBoard />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
