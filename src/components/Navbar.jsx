import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <GraduationCap className="text-blue-600 w-6 h-6" />
              <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
                Smriti Connect
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </a>
            <a href="#jobs" className="text-gray-700 hover:text-blue-600 transition">
              Jobs
            </a>
            <a href="#mentorship" className="text-gray-700 hover:text-blue-600 transition">
              Mentorship
            </a>
            <a href="#events" className="text-gray-700 hover:text-blue-600 transition">
              Events
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden mt-2 border-t border-gray-200 bg-white/95 backdrop-blur-sm overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-2">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">
              Home
            </a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">
              About
            </a>
            <a href="#jobs" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">
              Jobs
            </a>
            <a href="#mentorship" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">
              Mentorship
            </a>
            <a href="#events" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">
              Events
            </a>
            <div className="flex flex-col space-y-2 px-3 pt-4">
              <Link
                to="/login"
                className="w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:text-blue-600 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="w-full text-left px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
