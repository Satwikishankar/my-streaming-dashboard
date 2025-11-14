"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#popular", label: "Popular" },
  { href: "/#top-rated", label: "Top Rated" },
  { href: "/#now-playing", label: "Now Playing" }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/80 via-black/30 to-transparent">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-2xl font-semibold tracking-tight text-white">
          StreamSphere
        </Link>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white/60 hover:bg-white/10 sm:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle navigation</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5M3.75 6h16.5M3.75 18h16.5" />
              )}
            </svg>
          </button>
          <ul className="hidden items-center gap-6 text-sm font-medium text-white sm:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="transition hover:text-brand-red" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {isOpen ? (
        <div className="bg-black/80 backdrop-blur-sm sm:hidden">
          <ul className="space-y-2 px-4 pb-4 text-sm font-medium text-white">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  className="block rounded-md px-3 py-2 transition hover:bg-white/10"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}


