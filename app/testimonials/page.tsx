"use client";

import { useEffect, useState } from "react";

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const loadTestimonials = async () => {
    const res = await fetch("/api/testimonials");
    const data = await res.json();
    setTestimonials(data);
  };

  useEffect(() => {
    loadTestimonials();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/testimonials", {
      method: "POST",
      body: JSON.stringify({ name, message }),
    });

    setName("");
    setMessage("");
    loadTestimonials();
  };

  const handleDelete = async (id: number) => {
    await fetch("/api/testimonials", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });

    loadTestimonials();
  };

  return (
    <div className="min-h-screen p-10">

      <h1 className="text-3xl font-bold mb-6">Témoignages</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
        <input
          placeholder="Nom"
          className="p-3 text-black rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Message"
          className="p-3 text-black rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="bg-indigo-600 px-4 py-2 rounded">
          Ajouter
        </button>
      </form>

      {/* LISTE */}
      <div className="flex flex-col gap-4">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white text-black p-4 rounded flex justify-between items-center">

            <div>
              <p className="font-bold">{t.name}</p>
              <p>{t.message}</p>
            </div>

            <button
              onClick={() => handleDelete(t.id)}
              className="text-red-500 font-bold"
            >
              Supprimer
            </button>

          </div>
        ))}
      </div>

    </div>
  );
}