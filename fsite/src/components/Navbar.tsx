'use client';

import Image from "next/image";
import React from "react";

interface NavbarProps {
  textColor?: string;
}


import { useState } from "react";

const navLinks = [
  { href: '/', label: 'About' },
  { href: 'team', label: 'Team' },
  { href: 'contact', label: 'Contact' },
  { href: 'sponsors', label: 'Sponsors' },
  { href: 'photos', label: 'Photos' },
];

const Navbar: React.FC<NavbarProps> = ({ textColor = 'var(--text-color)' }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
      className="w-auto flex justify-end items-center absolute top-0 right-0 z-50 px-8 py-4"
      style={{ backgroundColor: 'var(--background-primary)', zIndex: 10, right: 10, top: 50 }}
    >
      {/* Hamburger icon for mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
        aria-label="Open navigation menu"
        onClick={() => setMenuOpen((open) => !open)}
        style={{ background: 'transparent', border: 'none', padding: 0, marginRight: 8 }}
      >
        <span className={`block w-7 h-1 bg-yellow-400 rounded transition-all duration-300 mb-1 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-7 h-1 bg-yellow-400 rounded transition-all duration-300 mb-1 ${menuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-7 h-1 bg-yellow-400 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Desktop nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 text-lg font-medium" style={{ color: textColor }}>
          {navLinks.map(({ href, label }) => (
            <li key={label} className="relative overflow-hidden">
              <a
                href={href}
                className="block px-2 py-1 transition-colors duration-200 relative"
                style={{ position: 'relative', zIndex: 1 }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="absolute top-full right-0 mt-2 w-48 bg-[#181c2a] bg-opacity-95 rounded-lg shadow-lg md:hidden animate-fade-in z-50">
          <ul className="flex flex-col gap-2 py-4 px-4 text-lg font-medium" style={{ color: textColor }}>
            {navLinks.map(({ href, label }) => (
              <li key={label} className="relative">
                <a
                  href={href}
                  className="block px-2 py-2 rounded hover:bg-yellow-300 hover:text-black transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <style jsx>{`
        ul > li {
          position: relative;
        }
        ul > li a {
          position: relative;
          z-index: 1;
        }
        ul > li a::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #ffe066 0%, #ffd700 100%);
          z-index: -10;
          transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        ul > li a:hover::before {
          width: 100%;
        }
        ul > li a {
          transition: color 0.2s;
        }
        ul > li a:hover {
          color: #222;
        }
        @media (max-width: 768px) {
          .animate-fade-in {
            animation: fadeIn 0.2s;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
