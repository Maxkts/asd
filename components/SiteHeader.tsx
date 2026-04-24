"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { navGroups, navHomeAnchors, navPrimary } from "@/lib/navigation";

const mobileLinks = [
  ...navHomeAnchors.map((l) => ({ ...l, section: "Startseite" as const })),
  ...navGroups.flatMap((g) =>
    g.items.map((item) => ({ ...item, section: g.label as string })),
  ),
  ...navPrimary.map((l) => ({ ...l, section: "Service" as const })),
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      <div className="bg-asd-red text-sm text-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2">
          <p className="font-medium">
            <span className="hidden sm:inline">Kostenlose Info-Hotline: </span>
            <a
              href={siteConfig.infoHotlineTel}
              className="underline-offset-2 hover:underline"
            >
              {siteConfig.infoHotlineDisplay}
            </a>
            <span className="hidden sm:inline"> (aus jedem Telefonnetz)</span>
          </p>
          <nav aria-label="Meta-Navigation" className="flex flex-wrap gap-4">
            <Link href="/impressum" className="hover:text-white/90">
              Impressum
            </Link>
            <Link href="/kontakt" className="hover:text-white/90">
              Kontakt
            </Link>
          </nav>
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
            <ul className="flex flex-wrap items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-asd-charcoal lg:gap-1.5 xl:text-xs">
              {navGroups.map((group) => (
                <li key={group.label} className="group relative">
                  <span className="inline-flex cursor-default items-center gap-1 border-b-2 border-transparent px-2 py-1 pb-2">
                    {group.label}
                    <ChevronDown className="size-3 opacity-60" aria-hidden />
                  </span>
                  <ul className="invisible absolute left-0 top-full z-50 min-w-[13rem] translate-y-1 rounded-md border border-zinc-200 bg-white py-2 text-xs font-semibold normal-case tracking-normal text-asd-charcoal opacity-0 shadow-lg transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 hover:bg-zinc-50 hover:text-asd-red"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              {navPrimary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block border-b-2 border-transparent px-2 py-1 pb-2 hover:border-asd-red"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {navHomeAnchors.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-block border-b-2 border-transparent px-2 py-1 pb-2 hover:border-asd-red"
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
            className="max-h-[min(70vh,calc(100dvh-8rem))] overflow-y-auto border-t border-zinc-100 px-4 pb-4 lg:hidden"
            aria-label="Mobile Navigation"
          >
            <ul className="flex flex-col gap-1 pt-3 text-asd-charcoal">
              {mobileLinks.map((item) => (
                <li key={`${item.section}-${item.href}`}>
                  <Link
                    href={item.href}
                    className="block rounded-md py-2.5 pl-1 font-medium hover:bg-zinc-50"
                    onClick={() => setOpen(false)}
                  >
                    <span className="text-[11px] font-normal uppercase tracking-wide text-zinc-400">
                      {item.section}
                    </span>
                    <span className="block">{item.label}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={siteConfig.phoneTel}
                  className="inline-flex w-full justify-center rounded-full bg-asd-red px-4 py-3 font-semibold text-white hover:bg-asd-red-hover"
                >
                  <Phone className="mr-2 size-4 shrink-0" aria-hidden />
                  Hotline anrufen
                </a>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
