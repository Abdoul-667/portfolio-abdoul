"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.error || data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#4c1d95]">

      <form
        onSubmit={handleSubmit}
        className="w-[500px] bg-white rounded-2xl shadow-2xl p-10 flex flex-col gap-5"
      >
        <h1 className="text-2xl font-bold text-center text-black">
          Inscription
        </h1>

        <input
          placeholder="Email"
          className="p-3 border border-gray-300 rounded text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="p-3 border border-gray-300 rounded text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-[#1e1b4b] text-white py-4 rounded font-semibold text-lg">
          Créer un compte
        </button>

        {message && (
          <p className="text-red-500 text-center">{message}</p>
        )}
      </form>
    </div>
  );
}