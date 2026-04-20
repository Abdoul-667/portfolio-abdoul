"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "./utils/auth";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const loggedIn = isAuthenticated();

    if (!loggedIn) {
      router.replace("/login");
    } else {
      setAuth(true);
    }

    setReady(true);
  }, [router]);

  if (!ready || !auth) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#4c1d95] text-white">

      {/* PHOTO */}
      <div className="absolute top-20 left-6 w-[120px] h-[120px]">
  <img
    src="/profile.jpg"
    alt="profil"
    className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
  />
</div>

      {/* CONTENU CENTRÉ */}
      <div className="flex flex-col items-center justify-center text-center min-h-screen px-6">

        <p className="text-sm uppercase tracking-widest mb-2 text-gray-300">
          Portfolio étudiant
        </p>

        <h1 className="text-5xl font-bold mb-4">
          Abdoul Wahab Maïga
        </h1>

        <p className="max-w-xl text-lg mb-6 text-gray-300">
          Étudiant en programmation informatique, passionné par le développement web,
          les interfaces modernes et la création d’applications concrètes.
        </p>

        <div className="flex gap-4">
          <Link
            href="/projects"
            className="bg-white text-[#1e1b4b] px-6 py-3 rounded font-semibold"
          >
            Voir mes projets
          </Link>

          <Link
            href="/testimonials"
            className="border border-white px-6 py-3 rounded font-semibold"
          >
            Témoignages
          </Link>
        </div>

      </div>
    </main>
  );
}