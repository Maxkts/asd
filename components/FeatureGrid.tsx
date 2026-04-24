import { Headphones, MapPin, Shield } from "lucide-react";

const items = [
  {
    title: "Hausnotruf",
    icon: Headphones,
    body: (
      <>
        <p className="font-semibold text-asd-shark">
          Direkte Verbindung zu Hilfe.
        </p>
        <p className="mt-2 text-zinc-600">
          In Notfällen wird Ihr Signal zuverlässig entgegengenommen und die
          vereinbarte Hilfe eingeleitet.
        </p>
      </>
    ),
  },
  {
    title: "Mobil & zu Hause",
    icon: MapPin,
    body: (
      <>
        <p className="font-semibold text-asd-shark">
          Passend zu Ihrem Lebensstil.
        </p>
        <p className="mt-2 text-zinc-600">
          Ob klassische Basisstation oder ergänzende mobile Optionen — wir
          finden die passende Kombination.
        </p>
      </>
    ),
  },
  {
    title: "Beratung & Service",
    icon: Shield,
    body: (
      <>
        <p className="font-semibold text-asd-shark">Persönlich statt anonym.</p>
        <p className="mt-2 text-zinc-600">
          Klare Abläufe, feste Ansprechpartner und Unterstützung bei Fragen zur
          Bedienung.
        </p>
      </>
    ),
  },
] as const;

export function FeatureGrid() {
  return (
    <section
      id="leistungen"
      className="border-y border-zinc-200 bg-asd-surface py-12 md:py-16"
      aria-labelledby="leistungen-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="leistungen-heading"
          className="text-2xl font-semibold text-asd-shark md:text-3xl"
        >
          Leistungen im Überblick
        </h2>
        <p className="mt-3 max-w-2xl text-zinc-600 md:text-lg">
          Praxiserprobte Notruflösungen mit Fokus auf Sicherheit, Alltagstauglichkeit
          und verständliche Kommunikation.
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map(({ title, icon: Icon, body }) => (
            <li key={title}>
              <article className="flex h-full flex-col rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex size-12 items-center justify-center rounded-md bg-amber-100 text-amber-800">
                  <Icon className="size-6" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-asd-shark">{title}</h3>
                <div className="mt-3 text-sm leading-relaxed">{body}</div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
