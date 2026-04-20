"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BackButton from "../components/BackButton";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "../utils/auth";

type Project = {
  id: number;
  title: string;
  description: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
      return;
    }

    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="p-6">
      <BackButton />

      <h1 className="text-3xl font-bold mb-6">Mes projets</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className="border border-gray-700 p-4 rounded-lg hover:bg-gray-800 cursor-pointer transition">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}