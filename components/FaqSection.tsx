import { faqItems } from "@/lib/faq-content";
import Link from "next/link";

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
          className="text-2xl font-semibold text-asd-charcoal md:text-3xl"
        >
          Häufige Fragen
        </h2>
        <p className="mt-3 text-zinc-600">
          Kurz beantwortet — ausführlicher mit weiteren Themen auf der{" "}
          <Link href="/faq" className="font-medium text-asd-red hover:text-asd-red-hover underline">
            FAQ-Seite
          </Link>
          .
        </p>
        <div className="mt-8 space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-zinc-200 bg-white px-4 py-1 shadow-sm open:shadow-md"
            >
              <summary className="cursor-pointer list-none py-3 font-medium text-asd-charcoal after:float-right after:text-zinc-400 after:content-['+'] group-open:after:content-['−']">
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
