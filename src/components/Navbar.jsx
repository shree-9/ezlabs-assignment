import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--peach)] shadow-sm">
      <div className="flex justify-between items-center px-6 py-4">
        <img src="/vfilms-logo.png" alt="Logo" className="w-[120px]" />

        <button onClick={() => setOpen(!open)} className="w-8 h-8">
          <img
            src={open ? "/close-icon.png" : "/menu-icon.png"}
            alt="menu toggle"
          />
        </button>
      </div>

      {/* Dropdown Menu */}
      {open && (
        <div
          className="absolute right-6 top-16 bg-white/80 border border-[var(--accent)] rounded-lg shadow-lg p-4 space-y-3 transition-all"
          style={{ backdropFilter: "blur(4px)" }}
        >
          {["Services", "Their Stories", "Our Story", "Varnan"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="block text-[var(--text-strong)] hover:text-[var(--accent)] font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
