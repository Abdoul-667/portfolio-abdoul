"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../utils/auth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Tous les champs sont requis");
      return;
    }

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.message) {
      login();
      router.push("/");
    } else {
      setMessage(data.error || "Identifiants incorrects");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center main-bg">

      <form
        onSubmit={handleSubmit}
        className="w-[500px] bg-white rounded-2xl shadow-2xl p-10 flex flex-col gap-5"
      >
        <h1 className="text-2xl font-bold text-center text-black">
          Connexion
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

        <button className="bg-[#1e1b4b] text-white py-4 rounded font-semibold">
          Se connecter
        </button>

        {message && (
          <p className="text-red-500 text-center">{message}</p>
        )}
      </form>
    </div>
  );
}