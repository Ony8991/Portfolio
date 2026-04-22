import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ony Randriambololona — Développeur Fullstack JS",
  description:
    "Portfolio de Ony Randriambololona, développeur Fullstack JavaScript junior basé à Maurice. Spécialisé en React, Next.js, Node.js et MongoDB.",
  keywords: ["développeur fullstack", "React", "Node.js", "Next.js", "Maurice"],
  authors: [{ name: "Ony Randriambololona" }],
  openGraph: {
    title: "Ony Randriambololona — Développeur Fullstack JS",
    description: "Portfolio de Ony Randriambololona, développeur Fullstack Junior",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}