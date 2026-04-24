import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function SectionTeaser() {
  return (
    <section className="py-12 md:py-16" aria-labelledby="teaser-heading">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <div
            className="min-h-[220px] bg-zinc-800 md:min-h-[280px]"
            style={{
              backgroundImage:
                "linear-gradient(105deg, #2d2d2d 0%, #3a2a2a 35%, #5c2a2a 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/95 via-zinc-900/80 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 lg:max-w-xl">
            <h2
              id="teaser-heading"
              className="text-2xl font-semibold text-white md:text-3xl"
            >
              Konkrete Lösungen <strong className="text-asd-red-soft">für Sie</strong>
            </h2>
            <p className="mt-4 text-zinc-200 md:text-lg">
              Von der ersten Beratung bis zur Einweisung — Schritt für Schritt,
              ohne Fachjargon.
            </p>
            <p className="mt-6">
              <Link
                href="/#leistungen"
                className="inline-flex items-center gap-2 rounded-full bg-asd-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-asd-red-hover"
              >
                Mehr erfahren
                <ChevronRight className="size-4" aria-hidden />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
