"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BackButton from "../components/BackButton";
import { useRouter } from "next/navigation";
import { isAuthenticated } from "../utils/auth";

type Testimonial = {
  id: number;
  name: string;
  message: string;
};

export default function TestimonialsPage() {
  const [data, setData] = useState<Testimonial[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
      return;
    }

    fetch("/api/testimonials")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="p-6">
      <BackButton />

      <h1 className="text-3xl font-bold mb-6">Témoignages</h1>

      <Link
        href="/testimonials/add"
        className="bg-white text-black px-4 py-2 rounded mb-4 inline-block"
      >
        Ajouter un témoignage
      </Link>

      <div className="space-y-4">
        {data.map((t) => (
          <div key={t.id} className="border border-gray-700 p-4 rounded">
            <p className="font-bold">{t.name}</p>
            <p className="text-gray-400">{t.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}