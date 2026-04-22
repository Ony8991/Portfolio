"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détecte le scroll pour changer le style
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0F172A]/95 backdrop-blur-sm shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          className="text-xl font-bold text-white hover:text-[#6366F1] transition-colors duration-200"
        >
          Ony<span className="text-[#6366F1]">.</span>dev
        </Link>

        {/* Links desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[#94A3B8] hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Bouton CV desktop */}
        <a
          href="/cv.pdf"
          download
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg border border-[#6366F1] text-[#6366F1] text-sm font-medium hover:bg-[#6366F1] hover:text-white transition-all duration-200"
        >
          Télécharger CV
        </a>

        {/* Menu burger mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#94A3B8] hover:text-white transition-colors"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#1E293B] border-t border-[#334155] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#94A3B8] hover:text-white transition-colors duration-200 text-sm font-medium block py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="/cv.pdf"
            download
            className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[#6366F1] text-[#6366F1] text-sm font-medium hover:bg-[#6366F1] hover:text-white transition-all duration-200"
          >
            Télécharger CV
          </a>
        </div>
      )}
    </nav>
  );
}