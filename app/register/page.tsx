"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setMessage("Email invalide");
      return;
    }

    if (password.length < 4) {
      setMessage("Mot de passe trop court");
      return;
    }

    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMessage(data.error || data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form className="bg-gray-900 p-8 rounded-xl w-full max-w-md flex flex-col gap-4">
        <h1 className="text-2xl text-center text-purple-400">Inscription</h1>

        <input
          placeholder="Email"
          className="p-2 bg-black border border-gray-700"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Mot de passe"
          type="password"
          className="p-2 bg-black border border-gray-700"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSubmit} className="bg-purple-600 py-2">
          S’inscrire
        </button>

        {message && <p className="text-red-400 text-center">{message}</p>}
      </form>
    </div>
  );
}