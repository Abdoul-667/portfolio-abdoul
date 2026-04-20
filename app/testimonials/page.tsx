"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`/api/testimonials?id=${id}`, {
      method: "DELETE",
    });

    setTestimonials(testimonials.filter(t => t.id !== id));
  };

  return (
    <div className="main-bg p-8 text-white">

      {/* 🔙 BOUTON RETOUR */}
      <Link href="/" className="inline-block mb-6 px-4 py-2 bg-white text-black rounded">
        ← Retour
      </Link>

      <h1 className="text-3xl font-bold mb-6">Témoignages</h1>

      <Link
        href="/testimonials/add"
        className="inline-block mb-6 px-4 py-2 bg-purple-600 rounded hover:bg-purple-700"
      >
        Ajouter un témoignage
      </Link>

      <div className="space-y-4">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white text-black p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{t.name}</p>
              <p>{t.message}</p>
            </div>

            <button
              onClick={() => handleDelete(t.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Supprimer
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}