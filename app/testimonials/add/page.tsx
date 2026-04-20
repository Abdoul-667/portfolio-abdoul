"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "../../components/BackButton";

export default function AddTestimonial() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/testimonials", {
      method: "POST",
      body: JSON.stringify({ name, message }),
    });

    router.push("/testimonials");
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <BackButton />

      <h1 className="text-2xl mb-4">Ajouter un témoignage</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          placeholder="Nom"
          className="p-2 border border-gray-600 bg-black"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Message"
          className="p-2 border border-gray-600 bg-black"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className="bg-white text-black py-2">
          Envoyer
        </button>
      </form>
    </div>
  );
}