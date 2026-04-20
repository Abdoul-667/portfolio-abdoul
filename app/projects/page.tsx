"use client";

import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Technology Catalog Website",
      description: "Site web dynamique avec Node.js et SQL",
    },
    {
      id: 2,
      title: "Anime Streaming Website",
      description: "Catalogue d’anime interactif",
    },
    {
      id: 3,
      title: "Gestionnaire de bibliothèque",
      description: "Application en C#",
    },
    {
      id: 4,
      title: "Fortivia Bank",
      description: "Application bancaire complète",
    },
    {
      id: 5,
      title: "MaliEats",
      description: "App de livraison",
    },
    {
      id: 6,
      title: "Daily Quotes App",
      description: "Application Android de citations",
    },
  ];

  return (
    <div className="main-bg p-8 text-white">
      <Link href="/" className="inline-block mb-6 px-4 py-2 bg-white text-black rounded">
        ← Retour
      </Link>

      <h1 className="text-3xl font-bold mb-6">Mes projets</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Link key={p.id} href={`/projects/${p.id}`}>
            <div className="bg-white text-black p-6 rounded-lg shadow hover:scale-105 transition cursor-pointer">
              <h2 className="text-xl font-bold">{p.title}</h2>
              <p>{p.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}