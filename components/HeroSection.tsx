import Link from "next/link";
import { Home, UserCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden text-white" aria-labelledby="hero-heading">
      <div
        className="absolute inset-0 bg-zinc-900"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #252525 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_25%_15%,#c12e2e_0,transparent_45%),radial-gradient(circle_at_85%_70%,#fff_0,transparent_35%)]" />
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
            className="group flex gap-5 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-asd-red-soft/50 hover:bg-white/10"
          >
            <div className="flex size-14 shrink-0 items-center justify-center rounded-md bg-asd-red/25 text-asd-red-soft">
              <Home className="size-8" aria-hidden />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white md:text-2xl">
                Für Sie <strong className="text-asd-red-soft">zuhause</strong>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300 md:text-base">
                Unauffällige Geräte, einfache Bedienung und Begleitung bei der
                Einrichtung.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-asd-red-soft group-hover:underline">
                Zu den Leistungen
              </span>
            </div>
          </Link>
          <Link
            href="/#kontakt"
            className="group flex gap-5 rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-asd-red-soft/50 hover:bg-white/10"
          >
            <div className="flex size-14 shrink-0 items-center justify-center rounded-md bg-asd-red/25 text-asd-red-soft">
              <UserCircle className="size-8" aria-hidden />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white md:text-2xl">
                Für <strong className="text-asd-red-soft">Angehörige</strong>
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300 md:text-base">
                Transparente Abläufe und direkte Ansprechpartnerinnen und
                Ansprechpartner für Ihre Fragen.
              </p>
              <span className="mt-3 inline-block text-sm font-semibold text-asd-red-soft group-hover:underline">
                Kontakt aufnehmen
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
