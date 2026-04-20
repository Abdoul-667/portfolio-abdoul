"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Testimonial = {
  id: number;
  name: string;
  message: string;
};

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [newMessage, setNewMessage] = useState("");

  const loadTestimonials = async () => {
    const res = await fetch("/api/testimonials");
    const data = await res.json();
    setTestimonials(data);
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const handleDelete = async (id: number) => {
    await fetch(`/api/testimonials?id=${id}`, {
      method: "DELETE",
    });

    setTestimonials((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEdit = (id: number, message: string) => {
    setEditingId(id);
    setNewMessage(message);
  };

  const handleSave = async (id: number) => {
    await fetch("/api/testimonials", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, message: newMessage }),
    });

    setTestimonials((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, message: newMessage } : t
      )
    );

    setEditingId(null);
  };

  return (
    <div className="main-bg min-h-screen p-8 text-white">
      <Link
        href="/"
        className="inline-block mb-6 px-4 py-2 bg-white text-black rounded"
      >
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
            className="bg-white text-black p-4 rounded-lg"
          >
            <p className="font-bold">{t.name}</p>

            {editingId === t.id ? (
              <>
                <input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="border p-2 w-full mt-2 mb-2"
                />

                <button
                  onClick={() => handleSave(t.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Enregistrer
                </button>
              </>
            ) : (
              <>
                <p className="mt-1">{t.message}</p>

                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleEdit(t.id, t.message)}
                    className="bg-yellow-500 px-3 py-1 rounded"
                  >
                    Modifier
                  </button>

                  <button
                    onClick={() => handleDelete(t.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Supprimer
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}