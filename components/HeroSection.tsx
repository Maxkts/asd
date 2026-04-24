import Link from "next/link";
import { Home, UserCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white" aria-labelledby="hero-heading">
      <div
        className="absolute inset-0 bg-zinc-900"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #1e2228 0%, #2c3135 45%, #3d4450 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_20%,#fff_0,transparent_50%),radial-gradient(circle_at_80%_60%,#fff_0,transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-12 md:pb-20 md:pt-16">
        <h1
          id="hero-heading"
          className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl md:leading-tight"
        >
          Sicherheit zu Hause — mit einem Hausnotruf, der zu Ihrem Alltag passt
          <span className="mt-4 block text-lg font-normal leading-snug text-zinc-300 md:text-2xl md:leading-snug">
            Persönliche Beratung, klare Technik und eine zuverlässige
            Anbindung an Hilfe, wenn Sie sie brauchen.
          </span>
        </h1>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Link
            href="/#leistungen"
            className="group flex gap-5 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-amber-400/40 hover:bg-white/10"
          >
            <div className="flex size-14 shrink-0 items-center justify-center rounded-md bg-amber-500/20 text-amber-300">
              <Home className="size-8" aria-hidden />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white md:text-2xl">
                Für Sie <strong className="text-amber-300">zuhause</strong>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300 md:text-base">
                Unauffällige Geräte, einfache Bedienung und Begleitung bei der
                Einrichtung.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-amber-300 group-hover:underline">
                Zu den Leistungen
              </span>
            </div>
          </Link>
          <Link
            href="/#kontakt"
            className="group flex gap-5 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-amber-400/40 hover:bg-white/10"
          >
            <div className="flex size-14 shrink-0 items-center justify-center rounded-md bg-amber-500/20 text-amber-300">
              <UserCircle className="size-8" aria-hidden />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white md:text-2xl">
                Für <strong className="text-amber-300">Angehörige</strong>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300 md:text-base">
                Transparente Abläufe und direkte Ansprechpartnerinnen und
                Ansprechpartner für Ihre Fragen.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-amber-300 group-hover:underline">
                Kontakt aufnehmen
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
