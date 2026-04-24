import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="bg-asd-surface">
      <div className="border-b border-zinc-200 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="inline-block shrink-0" aria-label={siteConfig.brand}>
            <Image
              src={siteConfig.logoSrc}
              alt={siteConfig.brand}
              width={siteConfig.logoWidth}
              height={siteConfig.logoHeight}
              className="h-10 w-auto md:h-12"
              sizes="(max-width: 768px) 220px, 280px"
            />
          </Link>
          <p className="max-w-md text-zinc-700">
            <strong className="text-asd-charcoal">ASD Hausnotruf</strong>
            <br />
            Hausnotruflösungen mit persönlicher Beratung und zuverlässiger
            Anbindung an Hilfe im Ernstfall.
          </p>
          <div className="rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-medium text-asd-charcoal">
              <Link href="/#kontakt" className="hover:text-asd-red hover:underline">
                Persönliches Gespräch vereinbaren
              </Link>
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              Mo–Fr, Antwort in der Regel am selben Werktag
            </p>
          </div>
        </div>
      </div>
      <div className="bg-asd-charcoal py-8 text-sm text-zinc-300">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-semibold text-white">{siteConfig.legalName}</p>
              <p className="mt-2">
                {siteConfig.street}
                <br />
                {siteConfig.zipCity}
                <br />
                {siteConfig.country}
              </p>
              <p className="mt-2">
                Telefon:{" "}
                <a className="text-white hover:text-asd-red-soft" href={siteConfig.phoneTel}>
                  {siteConfig.phoneDisplay}
                </a>
              </p>
              <p className="mt-1">
                E-Mail:{" "}
                <a
                  className="text-white hover:text-asd-red-soft"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
            <div>
              <p className="font-semibold text-white">Leistungen</p>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link href="/#leistungen" className="hover:text-white">
                    Hausnotruf
                  </Link>
                </li>
                <li>
                  <Link href="/#ablauf" className="hover:text-white">
                    Ablauf &amp; Installation
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-white">
                    Häufige Fragen
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white">Rechtliches</p>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link href="/impressum" className="hover:text-white">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="hover:text-white">
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-8 border-t border-white/10 pt-6 text-xs text-zinc-400">
            © {new Date().getFullYear()} {siteConfig.legalName}. Alle Angaben
            ohne Gewähr; Vertragsinhalte nur nach schriftlicher Vereinbarung.
          </p>
        </div>
      </div>
      <div className="bg-zinc-950 py-3 text-center text-xs text-zinc-500">
        <nav aria-label="Fußnavigation">
          <ul className="flex flex-wrap justify-center gap-4">
            <li>
              <Link href="/#kontakt" className="hover:text-zinc-300">
                Kontakt
              </Link>
            </li>
            <li>
              <Link href="/datenschutz" className="hover:text-zinc-300">
                Datenschutz
              </Link>
            </li>
            <li>
              <Link href="/impressum" className="hover:text-zinc-300">
                Impressum
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
