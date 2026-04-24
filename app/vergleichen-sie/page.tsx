import type { Metadata } from "next";
import { SubpageShell } from "@/components/SubpageShell";
import { SubpageArticle } from "@/components/SubpageArticle";

export const metadata: Metadata = {
  title: "Vergleichen Sie",
  description:
    "Worauf Sie beim Vergleich von Hausnotruf-Angeboten achten sollten: Technik, Service, Kosten und Vertragstransparenz.",
};

export default function VergleichenSiePage() {
  return (
    <SubpageShell>
      <SubpageArticle
        title="Vergleichen Sie"
        lead="Ein fairer Vergleich schaut über den Preis hinaus — auf Technik, Erreichbarkeit und was im Ernstfall wirklich passiert."
      >
        <p>Bei der Bewertung von Angeboten lohnt sich u. a. ein Blick auf:</p>
        <ul className="list-inside list-disc space-y-2 marker:text-asd-red">
          <li>Wie erfolgt die Anbindung an die Zentrale (Festnetz, mobil)?</li>
          <li>Welche Komponenten sind enthalten (Basis, Sender, Zubehör)?</li>
          <li>Wie werden Tests, Wartung und Batteriewechsel geregelt?</li>
          <li>Welche Hilfeszenarien sind vertraglich abgesichert?</li>
          <li>Wie transparent sind Laufzeiten und Kündigungsmodalitäten?</li>
        </ul>
        <p>
          Wir beantworten Ihre Fragen gerne offen — damit Sie eine Entscheidung
          treffen können, die zu Ihrer Lebenssituation passt.
        </p>
      </SubpageArticle>
    </SubpageShell>
  );
}
