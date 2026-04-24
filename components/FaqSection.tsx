const faqs = [
  {
    q: "Brauche ich einen Festnetzanschluss?",
    a: "Das hängt von der gewählten Lösung ab. Wir beraten Sie zu Optionen mit und ohne klassisches Telefon und zu mobilen Ergänzungen.",
  },
  {
    q: "Was passiert, wenn ich den Notruf auslöse?",
    a: "Ihr Signal wird in der vereinbarten Zentrale entgegengenommen. Im Anschluss erfolgt die Hilfe nach den mit Ihnen festgelegten Vorgaben — z. B. Kontakt zu Angehörigen oder Rettungsdiensten.",
  },
  {
    q: "Kann ich den Dienst testen oder wechseln?",
    a: "Testmöglichkeiten und Kündigungsfristen ergeben sich aus dem jeweiligen Vertrag. Diese Punkte besprechen wir transparent in der Beratung.",
  },
] as const;

export function FaqSection() {
  return (
    <section
      id="faq"
      className="border-t border-zinc-200 bg-asd-surface py-12 md:py-16"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4">
        <h2
          id="faq-heading"
          className="text-2xl font-semibold text-asd-shark md:text-3xl"
        >
          Häufige Fragen
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-zinc-200 bg-white px-4 py-1 shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none py-3 font-medium text-asd-shark after:float-right after:text-zinc-400 after:content-['+'] group-open:after:content-['−']">
                {item.q}
              </summary>
              <p className="border-t border-zinc-100 pb-4 pt-2 text-sm leading-relaxed text-zinc-600 md:text-base">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
