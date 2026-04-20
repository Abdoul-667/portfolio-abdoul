"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTestimonial() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("/api/testimonials", {
      method: "POST",
      body: JSON.stringify({ name, message }),
    });

    router.push("/testimonials");
  };

  return (
    <div className="main-bg flex items-center justify-center">
      <div className="bg-white text-black p-8 rounded-xl w-[450px] shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Ajouter un témoignage
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            placeholder="Nom"
            className="p-2 border rounded"
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Message"
            className="p-2 border rounded"
            onChange={(e) => setMessage(e.target.value)}
          />

          <button className="bg-black text-white py-2 rounded hover:bg-gray-800">
            Ajouter
          </button>
        </form>
      </div>
    </div>
  );
}