"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isAuthenticated, logout } from "../utils/auth";

export default function Navbar() {
  const router = useRouter();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(isAuthenticated());
  }, []);

  const handleLogout = () => {
    logout();
    setAuth(false);
    router.push("/login");
  };

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 bg-black text-white border-b border-white/10">
      <h1 className="font-bold text-lg">Abdoul</h1>

      <div className="flex gap-6 items-center text-sm md:text-base">
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