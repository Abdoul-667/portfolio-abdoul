"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import BackButton from "../../components/BackButton";

type Project = {
  id: number;
  title: string;
  description: string;
};

export default function ProjectDetailPage() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data: Project[]) => {
        const found = data.find((p) => p.id.toString() === params.id);
        setProject(found || null);
      });
  }, [params.id]);

  if (!project) return <div className="p-6">Chargement...</div>;

  return (
    <div className="p-6">
      <BackButton />

      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      <p className="text-gray-400 mb-4">{project.description}</p>

      <p className="text-sm text-gray-500">
        Technologies : JavaScript, Node.js, SQL
      </p>
    </div>
  );
}