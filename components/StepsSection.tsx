import Link from "next/link";

const steps = [
  {
    n: 1,
    title: "Beratung",
    text: "Wir klären Bedarf, Wohnumfeld und Wünsche in einem unverbindlichen Gespräch.",
  },
  {
    n: 2,
    title: "Installation & Einweisung",
    text: "Auf Wunsch koordinieren wir Termine und erklären die Bedienung verständlich.",
  },
  {
    n: 3,
    title: "Schutz im Alltag",
    text: "Sie nutzen den Hausnotruf wie besprochen — wir sind bei Fragen für Sie da.",
  },
] as const;

export function StepsSection() {
  return (
    <section
      id="ablauf"
      className="bg-white py-12 md:py-16"
      aria-labelledby="ablauf-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="ablauf-heading"
          className="text-2xl font-semibold text-asd-charcoal md:text-3xl"
        >
          So funktioniert&apos;s
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="relative flex gap-4">
              <span
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-asd-charcoal text-sm font-bold text-white"
                aria-hidden
              >
                {s.n}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-asd-charcoal">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-zinc-600 md:text-base">
          Technischer Ablauf vom Knopfdruck bis zur Zentrale:{" "}
          <Link href="/der-alarm" className="font-medium text-asd-red hover:text-asd-red-hover underline">
            Der Alarm
          </Link>{" "}
          und{" "}
          <Link
            href="/hausnotrufzentrale"
            className="font-medium text-asd-red hover:text-asd-red-hover underline"
          >
            Hausnotrufzentrale
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
