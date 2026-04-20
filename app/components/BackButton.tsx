"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mb-4 px-4 py-2 border border-gray-600 rounded-lg hover:bg-white hover:text-black transition"
    >
      ← Retour
    </button>
  );
}