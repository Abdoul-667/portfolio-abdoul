"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "./utils/auth";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
    } else {
      setChecked(true);
    }
  }, []);

  // ⛔ évite affichage moche pendant redirection
  if (!checked) return null;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
        Abdoul Wahab Maïga
      </h1>

      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-8">
        Étudiant en programmation informatique passionné par le développement web,
        la création d’applications interactives et les technologies modernes.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <Link
          href="/projects"
          className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Voir mes projets
        </Link>

        <Link
          href="/testimonials"
          className="border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"
        >
          Témoignages
        </Link>
      </div>

    </main>
  );
}