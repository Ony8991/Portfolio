"use client";

const skillCategories = [
  {
    title: "Frontend",
    color: "#6366F1",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3"],
  },
  {
    title: "Backend",
    color: "#22D3EE",
    skills: ["Node.js", "Express.js", "REST API", "JWT Auth", "Mongoose"],
  },
  {
    title: "Base de données",
    color: "#6366F1",
    skills: ["MongoDB", "MySQL", "PostgreSQL (notions)"],
  },
  {
    title: "IA / ML",
    color: "#22D3EE",
    skills: ["Python", "TensorFlow (notions)", "Pandas", "NumPy", "Scikit-learn (notions)"],
  },
  {
    title: "Outils & DevOps",
    color: "#6366F1",
    skills: ["Git", "GitHub", "Docker (bases)", "Vercel", "Railway", "VS Code"],
  },
  {
    title: "Tests",
    color: "#22D3EE",
    skills: ["Jest", "Supertest", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#1E293B]/30">
      <div className="max-w-6xl mx-auto">

        {/* Titre */}
        <div className="text-center mb-16">
          <p className="text-[#6366F1] text-sm font-medium tracking-widest uppercase mb-3">
            Compétences
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Stack technique
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-xl mx-auto">
            Les technologies que j'utilise pour construire des applications
            complètes, de la base de données à l'interface utilisateur.
          </p>
        </div>

        {/* Grid des catégories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-[#1E293B] rounded-xl p-6 border border-[#334155] hover:border-[#6366F1]/50 transition-all duration-300 group"
            >
              {/* Header catégorie */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3
                  className="font-semibold text-white text-lg group-hover:text-[#6366F1] transition-colors duration-200"
                >
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#334155] text-[#94A3B8] hover:bg-[#6366F1]/20 hover:text-[#6366F1] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}