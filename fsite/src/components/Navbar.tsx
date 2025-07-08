'use client';

import Image from "next/image";
import React from "react";

interface NavbarProps {
  textColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({ textColor = 'var(--text-color)' }) => (
  <header
    className="w-auto flex justify-end items-center absolute top-0 right-0 z-50 px-8 py-4"
    style={{ backgroundColor: 'var(--background-primary)', zIndex: 10, right: 10, top: 50 }}
  >
    <nav>
      <ul className="flex gap-8 text-lg font-medium" style={{ color: textColor }}>
        {[
          { href: '/', label: 'About' },
          { href: 'team', label: 'Team' },
          { href: 'contact', label: 'Contact' },
          { href: 'sponsors', label: 'Sponsors' },
          { href: 'photos', label: 'Photos' },
        ].map(({ href, label }) => (
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
    `}</style>
  </header>
);

export default Navbar;
