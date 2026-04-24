"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const nav = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#geraete", label: "Geräte" },
  { href: "/#ablauf", label: "So funktioniert’s" },
  { href: "/#faq", label: "Häufige Fragen" },
  { href: "/#kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-asd-charcoal text-sm text-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2">
          <nav aria-label="Meta-Navigation" className="hidden sm:block">
            <ul className="flex flex-wrap gap-4">
              <li>
                <Link href="/impressum" className="hover:text-white">
                  Unternehmen
                </Link>
              </li>
              <li>
                <Link href="/#kontakt" className="hover:text-white">
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
          <a
            href={siteConfig.phoneTel}
            className="inline-flex items-center gap-2 font-medium text-white hover:text-asd-red-soft"
          >
            <Phone className="size-4 shrink-0" aria-hidden />
            Tel. {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
      <div className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <Link href="/" className="flex shrink-0 items-center" aria-label={siteConfig.brand}>
            <Image
              src={siteConfig.logoSrc}
              alt={siteConfig.brand}
              width={siteConfig.logoWidth}
              height={siteConfig.logoHeight}
              className="h-9 w-auto md:h-11"
              priority
              sizes="(max-width: 768px) 200px, 260px"
            />
          </Link>
          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <ul className="flex items-center gap-8 text-sm font-semibold uppercase tracking-wide text-asd-charcoal">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="border-b-2 border-transparent pb-1 hover:border-asd-red"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={siteConfig.phoneTel}
            className="hidden rounded-full bg-asd-red px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-asd-red-hover lg:inline-flex"
          >
            Beratung anfragen
          </a>
          <button
            type="button"
            className="inline-flex rounded-md p-2 text-asd-charcoal hover:bg-zinc-100 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menü</span>
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
        {open ? (
          <nav
            id="mobile-nav"
            className="border-t border-zinc-100 px-4 pb-4 lg:hidden"
            aria-label="Mobile Navigation"
          >
            <ul className="flex flex-col gap-3 pt-3 text-asd-charcoal">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.phoneTel}
                  className="inline-flex w-full justify-center rounded-full bg-asd-red px-4 py-3 font-semibold text-white hover:bg-asd-red-hover"
                >
                  Anrufen
                </a>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
