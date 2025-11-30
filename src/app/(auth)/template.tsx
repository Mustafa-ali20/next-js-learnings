"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [input, setInput] = useState<string>("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-500">
      <div className="w-full max-w-md bg-white/50 rounded-lg shadow-md p-8">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type something..."
        />
        <nav className="mb-8 flex justify-center">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (pathname.startsWith(link.href) && link.href !== "/");
            return (
              <Link
                className={`mr-4 px-3 py-2 rounded transition-colors ${
                  isActive
                    ? "font-bold bg-blue-500 text-white"
                    : "text-blue-500 hover:bg-blue-100"
                }`}
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div>{children}</div>
      </div>
    </div>
  );
}
