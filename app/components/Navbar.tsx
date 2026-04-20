"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isAuthenticated, logout } from "../utils/auth";

export default function Navbar() {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setAuth(isAuthenticated());
    setReady(true);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  if (!ready) return null;

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-black text-white border-b border-gray-800">
      <h1 className="font-bold text-lg">Abdoul</h1>

      <div className="flex gap-6 items-center">
        <Link href="/">Accueil</Link>
        <Link href="/projects">Projets</Link>
        <Link href="/testimonials">Témoignages</Link>

        {!auth ? (
          <Link href="/login">Login</Link>
        ) : (
          <button onClick={handleLogout} className="text-red-400">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}