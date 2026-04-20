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

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.message) {
      login();
      router.push("/");
    } else {
      setMessage(data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg w-full max-w-md flex flex-col gap-4"
      >
        <h1 className="text-2xl font-bold text-center">Connexion</h1>

        <input
          type="email"
          placeholder="Email"
          className="p-2 bg-black border border-gray-700"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          className="p-2 bg-black border border-gray-700"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-white text-black py-2 font-semibold">
          Se connecter
        </button>

        {message && <p className="text-red-400 text-center">{message}</p>}
      </form>
    </div>
  );
}