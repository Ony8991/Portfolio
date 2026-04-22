"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiDownload } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Fond avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]" />

      {/* Cercles décoratifs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366F1]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#22D3EE]/10 rounded-full blur-3xl" />

      {/* Contenu */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge disponibilité */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6366F1]/30 bg-[#6366F1]/10 text-[#6366F1] text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-[#22D3EE] animate-pulse" />
          Disponible pour des opportunités
        </div>

        {/* Nom */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Ony{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#22D3EE]">
            Randriambololona
          </span>
        </h1>

        {/* Titre */}
        <p className="text-xl md:text-2xl text-[#94A3B8] font-medium mb-6">
          Développeur{" "}
          <span className="text-[#6366F1]">Fullstack JavaScript</span>{" "}
          Junior
        </p>

        {/* Description */}
        <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Étudiant en dernière année d'IA/ML à Maurice, passionné par le développement
          web moderne. Je construis des applications complètes avec React, Next.js,
          Node.js et MongoDB.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="#projects"
            className="px-8 py-3 rounded-lg bg-[#6366F1] text-white font-medium hover:bg-[#5558E3] transition-all duration-200 hover:scale-105"
          >
            Voir mes projets
          </Link>

          <a
            href="/cv.pdf"
            download
            className="px-8 py-3 rounded-lg border border-[#6366F1] text-[#6366F1] font-medium hover:bg-[#6366F1] hover:text-white transition-all duration-200 hover:scale-105 flex items-center gap-2"
          >
            <FiDownload size={18} />
            Télécharger CV
          </a>
        </div>

        {/* Liens sociaux */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/Ony8991"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-white transition-colors duration-200 hover:scale-110 transform"
          >
            <FiGithub size={24} />
          </a>

          <a
            href="https://www.linkedin.com/in/ony-randriambololona-260b10244"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94A3B8] hover:text-[#22D3EE] transition-colors duration-200 hover:scale-110 transform"
          >
            <FiLinkedin size={24} />
          </a>

          <a
            href="mailto:Onyrandy1998@gmail.com"
            className="text-[#94A3B8] hover:text-[#6366F1] transition-colors duration-200 hover:scale-110 transform"
          >
            <FiMail size={24} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-[#94A3B8]">
          <span className="text-xs">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#94A3B8] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}