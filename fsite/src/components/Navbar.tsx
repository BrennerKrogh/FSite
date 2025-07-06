import Image from "next/image";
import React from "react";

interface NavbarProps {
  textColor?: string;
}

const Navbar: React.FC<NavbarProps> = ({ textColor = 'var(--text-color)' }) => (
  <header className="w-full flex justify-between items-center mb-16" style={{ 
    backgroundColor: 'var(--background-primary)'
   }}>
    <div className="flex items-center gap-3">
    </div>
    <nav>
      <ul className="flex gap-8 text-lg font-medium" style={{ color: textColor }}>
        <li><a href="/" className="hover:underline">About</a></li>
        <li><a href="team" className="hover:underline">Team</a></li>
        <li><a href="contact" className="hover:underline">Contact</a></li>
        <li><a href="sponsors" className="hover:underline">Sponsors</a></li>
        <li><a href="photos" className="hover:underline">Photos</a></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;
