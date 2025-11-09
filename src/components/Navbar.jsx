import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--peach)] bg-opacity-95 backdrop-blur-md shadow-sm z-50">
      <div className="flex justify-between items-center px-10 py-4 relative">
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/vfilms-logo.png" alt="V Films" className="w-[120px]" />
        </Link>

        {/* Right: Menu Section */}
        <div className="flex items-center gap-6 relative">
          {/* Hamburger / Close Brush Icon */}
          <button
            onClick={toggleMenu}
            className="cursor-pointer transition-transform hover:scale-105"
          >
            <img
              src={menuOpen ? "/close-icon.png" : "/menu-icon.png"}
              alt="menu toggle"
              className="w-[42px] h-auto transition-all duration-200"
            />
          </button>

          {/* Inline Menu beside brush icon */}
          {menuOpen && (
            <div className="absolute right-14 top-1/2 -translate-y-1/2 flex items-center gap-8 bg-[var(--peach)]/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-[var(--accent)]/20 animate-fadeIn">
              <Link
                to="/services"
                className="hover:text-[var(--accent)] text-[var(--text-strong)] transition"
              >
                Services
              </Link>
              <Link
                to="/stories"
                className="hover:text-[var(--accent)] text-[var(--text-strong)] transition"
              >
                Their Stories
              </Link>
              <Link
                to="/our-story"
                className="hover:text-[var(--accent)] text-[var(--text-strong)] transition"
              >
                Our Story
              </Link>
              <Link
                to="/varnan"
                className="hover:text-[var(--accent)] text-[var(--text-strong)] transition"
              >
                Varnan
              </Link>

              {/* Let’s Talk Button */}
              <a
                href="#contact"
                className="bg-[var(--accent)] text-white px-4 py-2 rounded-full shadow-md hover:bg-[var(--accent-dark)] transition-all"
              >
                Let’s Talk ✉️
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
