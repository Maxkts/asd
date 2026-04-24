import Image from "next/image";
import Link from "next/link";
import { Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section
      className="relative isolate min-h-[min(88vh,820px)] w-full overflow-hidden md:min-h-[min(78vh,720px)]"
      aria-labelledby="hero-heading"
    >
      <Image
        src={siteConfig.heroBannerSrc}
        alt="Paar zuhause mit Hausnotruf am Handgelenk; daneben Basisstation und mobile Notruf-Sender"
        fill
        priority
        className="object-cover object-[55%_center] md:object-center"
        sizes="100vw"
      />
      {/* Lesbarkeit: links stärker abdunkeln (Text), rechts Foto/Geräte sichtbar lassen */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/55 to-zinc-950/15 md:from-zinc-950/85 md:via-zinc-900/35 md:to-zinc-900/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-zinc-950/25 md:from-zinc-950/40 md:to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_20%_50%,rgba(193,46,46,0.18),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[min(88vh,820px)] max-w-6xl flex-col justify-end px-4 pb-12 pt-28 md:min-h-[min(78vh,720px)] md:justify-center md:pb-20 md:pt-32">
        <div className="max-w-xl md:max-w-lg lg:max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-asd-red-soft md:text-sm">
            Sicher zu Hause
          </p>
          <h1
            id="hero-heading"
            className="mt-3 text-balance text-3xl font-bold leading-[1.12] tracking-tight text-white drop-shadow-sm md:text-4xl lg:text-5xl lg:leading-[1.1]"
          >
            Hilfe auf Knopfdruck —{" "}
            <span className="text-white/95">damit Sie sich zu Hause wohlfühlen</span>
          </h1>
          <span
            className="mt-5 block h-1 w-16 rounded-full bg-asd-red shadow-[0_0_24px_rgba(193,46,46,0.45)]"
            aria-hidden
          />
          <p className="mt-6 text-pretty text-base leading-relaxed text-zinc-100/95 md:text-lg md:leading-relaxed">
            Persönliche Beratung, verständliche Technik und eine zuverlässige
            Anbindung an Hilfe im Ernstfall — ohne komplizierte Verträge zum
            Selbststudium.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-200/90">
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 shrink-0 text-asd-red-soft" aria-hidden />
              Unkompliziert
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 shrink-0 text-asd-red-soft" aria-hidden />
              Persönlich erreichbar
            </li>
            <li className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 shrink-0 text-asd-red-soft" aria-hidden />
              Für Sie &amp; Angehörige
            </li>
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-asd-red px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_32px_rgba(193,46,46,0.35)] transition hover:bg-asd-red-hover hover:shadow-[0_10px_36px_rgba(193,46,46,0.45)]"
            >
              <Phone className="size-5 shrink-0" aria-hidden />
              {siteConfig.phoneDisplay} — Beratung
            </a>
            <Link
              href="/#leistungen"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:border-white/60 hover:bg-white/15"
            >
              Leistungen ansehen
            </Link>
            <Link
              href="/#geraete"
              className="inline-flex items-center justify-center text-sm font-medium text-white/85 underline-offset-4 transition hover:text-white hover:underline sm:ml-1"
            >
              Geräte im Überblick
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
