"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProjectDetailsPage() {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const projects = [
    {
      id: "1",
      title: "Technology Catalog Website",
      description: "Site web dynamique avec Node.js et SQL",
      tech: ["Node.js", "SQL"],
    },
    {
      id: "2",
      title: "Anime Streaming Website",
      description: "Catalogue d’anime interactif avec navigation fluide",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: "3",
      title: "Gestionnaire de bibliothèque",
      description: "Application en C# pour gérer des livres",
      tech: ["C#", ".NET"],
    },
    {
      id: "4",
      title: "Fortivia Bank",
      description: "Application bancaire web avec gestion de comptes",
      tech: ["Node.js", "PostgreSQL", "Express"],
    },
    {
      id: "5",
      title: "MaliEats",
      description: "Application de livraison de nourriture",
      tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    },
    {
      id: "6",
      title: "Daily Quotes App",
      description: "Application Android de citations",
      tech: ["Java", "Android"],
    },
  ];

  const project = projects.find((p) => p.id === String(id));

  if (!project) {
    return (
      <div className="main-bg min-h-screen p-8 text-white">
        <Link
          href="/projects"
          className="inline-block mb-6 px-4 py-2 bg-white text-black rounded"
        >
          ← Retour
        </Link>

        <h1 className="text-3xl font-bold">Projet introuvable</h1>
      </div>
    );
  }

  return (
    <div className="main-bg min-h-screen p-8 text-white">
      <Link
        href="/projects"
        className="inline-block mb-6 px-4 py-2 bg-white text-black rounded"
      >
        ← Retour
      </Link>

      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      <p className="mb-6">{project.description}</p>

      <h2 className="text-xl font-semibold mb-2">
        Technologies utilisées :
      </h2>

      <ul className="list-disc pl-6 space-y-1">
        {project.tech.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}