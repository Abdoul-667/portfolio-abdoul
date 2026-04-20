"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

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
    description: "Catalogue d’anime interactif",
    tech: ["HTML", "JS"],
  },
  {
    id: "3",
    title: "Gestionnaire de bibliothèque",
    description: "Application en C#",
    tech: ["C#", ".NET"],
  },
  {
    id: "4",
    title: "Fortivia Bank",
    description: "Application bancaire complète",
    tech: ["Node.js", "PostgreSQL"],
  },
  {
    id: "5",
    title: "MaliEats",
    description: "App de livraison",
    tech: ["JS", "Express"],
  },
  {
    id: "6",
    title: "Daily Quotes App",
    description: "App Android de citations",
    tech: ["Java", "Android"],
  },
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) return <div>Projet non trouvé</div>;

  return (
    <div className="main-bg p-8 text-white">
      <Link href="/projects" className="bg-white text-black px-4 py-2 rounded">
        ← Retour
      </Link>

      <h1 className="text-3xl font-bold mt-4">{project.title}</h1>

      <p className="mt-4">{project.description}</p>

      <h2 className="mt-4 font-bold">Technologies :</h2>
      <ul>
        {project.tech.map((t, i) => (
          <li key={i}>- {t}</li>
        ))}
      </ul>
    </div>
  );
}