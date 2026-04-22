"use client";

import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const infos = [
  { icon: <FiMapPin size={18} />, label: "Localisation", value: "Beau Bassin, Maurice" },
  { icon: <FiMail size={18} />, label: "Email", value: "Onyrandy1998@gmail.com" },
  { icon: <FiPhone size={18} />, label: "Téléphone", value: "+230 5771 9315" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Titre de section */}
        <div className="text-center mb-16">
          <p className="text-[#6366F1] text-sm font-medium tracking-widest uppercase mb-3">
            À propos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Qui suis-je ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Texte */}
          <div>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
              Je suis <span className="text-white font-medium">Ony Randriambololona</span>,
              étudiant en dernière année d'Intelligence Artificielle et Machine Learning
              à Maurice. Passionné par la technologie sous toutes ses formes, je me
              spécialise dans le développement web fullstack JavaScript.
            </p>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
              Mon parcours en IA/ML me donne une vision plus large du développement
              je comprends non seulement comment construire des applications web performantes,
              mais aussi comment intégrer des modèles intelligents dans des produits réels.
            </p>
            <p className="text-[#94A3B8] text-lg leading-relaxed mb-10">
              Je suis ouvert à toutes les opportunités : développement web fullstack,
              data analyst, ou développeur ML junior. Mon objectif est de rejoindre
              une équipe où je peux apprendre vite et apporter de la valeur dès le premier jour.
            </p>

            {/* Infos de contact */}
            <div className="flex flex-col gap-4">
              {infos.map((info) => (
                <div key={info.label} className="flex items-center gap-3">
                  <span className="text-[#6366F1]">{info.icon}</span>
                  <span className="text-[#94A3B8] text-sm">{info.label} :</span>
                  <span className="text-white text-sm font-medium">{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards statistiques */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "3", label: "Projets\ncomplétés", color: "#6366F1" },
              { number: "22", label: "Tests\nautomatisés", color: "#22D3EE" },
              { number: "15+", label: "Routes\nAPI REST", color: "#6366F1" },
              { number: "100%", label: "Commits\nconventionnels", color: "#22D3EE" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#1E293B] rounded-xl p-6 border border-[#334155] hover:border-[#6366F1]/50 transition-all duration-300 text-center"
              >
                <p
                  className="text-4xl font-bold mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.number}
                </p>
                <p className="text-[#94A3B8] text-sm leading-snug whitespace-pre-line">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}