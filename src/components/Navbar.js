import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // 👇 Close menu and scroll to top whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <nav className="bg-blue-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h2 className="text-2xl font-bold tracking-wide">Codemantralabs</h2>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-red-400 relative group">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="hover:text-red-400 relative group">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/services" className="hover:text-red-400 relative group">
              Services
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/portfolio" className="hover:text-red-400 relative group">
              Portfolio
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="hover:text-red-400 relative group">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-red-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-700">
          <Link to="/" className="block hover:text-red-400">Home</Link>
          <Link to="/about" className="block hover:text-red-400">About</Link>
          <Link to="/services" className="block hover:text-red-400">Services</Link>
          <Link to="/portfolio" className="block hover:text-red-400">Portfolio</Link>
          <Link to="/contact" className="block hover:text-red-400">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
