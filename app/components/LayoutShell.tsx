"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideChrome = pathname === "/login" || pathname === "/register";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {!hideChrome && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideChrome && <Footer />}
    </div>
  );
}