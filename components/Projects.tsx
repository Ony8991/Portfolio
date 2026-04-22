"use client";

import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Blog-API",
    description:
      "API RESTful complète avec authentification JWT, CRUD posts/commentaires, contrôle d'accès basé sur les rôles, et 22 tests automatisés avec Jest & Supertest.",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Jest", "Supertest"],
    github: "https://github.com/Ony8991/Blog-API",
    demo: null,
  },
  {
    title: "Dashboard Data Analyst",
    description:
      "Tableaux de bord interactifs pour l'analyse des données commerciales avec visualisation claire.",
    tech: ["Power BI", "SQL", "Excel"],
    github: null,
    demo: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-16">
          <p className="text-[#6366F1] text-sm font-medium tracking-widest uppercase mb-3">
            Projets
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Mes réalisations
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-xl mx-auto">
            Quelques projets sur lesquels j'ai travaillé récemment.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#1E293B] rounded-xl p-6 border border-[#334155] hover:border-[#6366F1]/50 transition-all duration-300 flex flex-col"
            >
              {/* Titre */}
              <h3 className="text-white font-semibold text-lg mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-[#94A3B8] text-sm mb-4 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#334155] text-[#94A3B8]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Liens */}
              <div className="flex gap-3 pt-4 border-t border-[#334155]">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#94A3B8] hover:text-[#6366F1] transition-colors duration-200 text-sm font-medium"
                  >
                    <FiGithub size={16} />
                    GitHub
                  </Link>
                )}
                {project.demo && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#94A3B8] hover:text-[#22D3EE] transition-colors duration-200 text-sm font-medium"
                  >
                    <FiExternalLink size={16} />
                    Démo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}