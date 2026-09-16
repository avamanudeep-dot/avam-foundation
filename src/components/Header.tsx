"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, User, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Membership", href: "#membership" },
  { label: "Clubs", href: "#clubs" },
  { label: "Support", href: "#support" },
  { label: "Our Work", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3">
          <Image src="/images/logo.svg" alt="AVAM Foundation logo" width={44} height={44} />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold tracking-wide text-brand-green sm:text-xl">
              AVAM FOUNDATION
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:text-xs">
              Together for a Better Tomorrow
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-brand-green"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button className="flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-light">
            <User size={16} />
            Login / Register
          </button>
        </div>

        <button
          className="rounded-md p-2 text-neutral-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-neutral-700 hover:text-brand-green"
              >
                {link.label}
              </a>
            ))}
            <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-sm font-semibold text-white">
              <User size={16} />
              Login / Register
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
