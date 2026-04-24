import type { Metadata } from "next";
import { SubpageShell } from "@/components/SubpageShell";
import { SubpageArticle } from "@/components/SubpageArticle";
import { faqItems } from "@/lib/faq-content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Häufig gestellte Fragen zu Hausnotruf, Technik und Ablauf bei ASD Hausnotruf.",
};

export default function FaqPage() {
  return (
    <SubpageShell>
      <SubpageArticle
        title="Häufige Fragen (FAQ)"
        lead="Antworten auf typische Fragen — wenn Sie mehr wissen möchten, erreichen Sie uns telefonisch oder per E-Mail."
      >
        <div className="space-y-3">
          {faqItems.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-zinc-200 bg-asd-surface px-4 py-1 open:bg-white"
            >
              <summary className="cursor-pointer list-none py-3 font-medium text-asd-charcoal after:float-right after:text-zinc-400 after:content-['+'] group-open:after:content-['−']">
                {item.q}
              </summary>
              <p className="border-t border-zinc-200 pb-4 pt-2 text-zinc-700">{item.a}</p>
            </details>
          ))}
        </div>
      </SubpageArticle>
    </SubpageShell>
  );
}
