"use client";

import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Technology Catalog Website",
      description: "Site web dynamique avec Node.js et SQL",
    },
    {
      title: "Anime Streaming Website",
      description: "Catalogue d’anime interactif",
    },
    {
      title: "Gestionnaire de bibliothèque",
      description: "Application C# console",
    },
  ];

  return (
    <div className="main-bg p-8 text-white">
      <Link href="/" className="inline-block mb-6 px-4 py-2 bg-white text-black rounded">
        ← Retour
      </Link>

      <h1 className="text-3xl font-bold mb-6">Mes projets</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white text-black p-6 rounded-lg shadow hover:scale-105 transition"
          >
            <h2 className="text-xl font-bold">{p.title}</h2>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}