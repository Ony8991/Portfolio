"use client";

import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const contacts = [
  {
    icon: <FiMail size={18} />,
    label: "Email",
    value: "Onyrandy1998@gmail.com",
  },
  {
    icon: <FiPhone size={18} />,
    label: "Téléphone",
    value: "+230 5771 9315",
  },
  {
    icon: <FiMapPin size={18} />,
    label: "Localisation",
    value: "Beau Bassin, Maurice",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#1E293B]/30">
      <div className="max-w-6xl mx-auto">
        {/* Titre */}
        <div className="text-center mb-16">
          <p className="text-[#6366F1] text-sm font-medium tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Me contacter
          </h2>
          <p className="text-[#94A3B8] mt-4 max-w-xl mx-auto">
            N'hésitez pas à me contacter pour toute opportunité ou collaboration.
          </p>
        </div>

        {/* Contenu */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Infos */}
          <div className="flex flex-col gap-6">
            {contacts.map((contact) => (
              <div
                key={contact.label}
                className="flex items-center gap-3 bg-[#1E293B] p-4 rounded-xl border border-[#334155]"
              >
                <span className="text-[#6366F1]">{contact.icon}</span>
                <div>
                  <p className="text-[#94A3B8] text-sm">
                    {contact.label}
                  </p>
                  <p className="text-white text-sm font-medium">
                    {contact.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Formulaire */}
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nom"
              className="bg-[#1E293B] border border-[#334155] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6366F1]"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-[#1E293B] border border-[#334155] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6366F1]"
            />

            <textarea
              rows={5}
              placeholder="Message"
              className="bg-[#1E293B] border border-[#334155] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#6366F1]"
            />

            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-[#6366F1] text-white font-medium hover:bg-[#5558E3] transition-all duration-200"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}