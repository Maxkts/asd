import type { Metadata } from "next";
import { SubpageShell } from "@/components/SubpageShell";
import { SubpageArticle } from "@/components/SubpageArticle";

export const metadata: Metadata = {
  title: "Unsere Partner",
  description: "Partner und Kooperationen im Umfeld von ASD Hausnotruf.",
};

export default function PartnerPage() {
  return (
    <SubpageShell>
      <SubpageArticle
        title="Unsere Partner"
        lead="Gemeinsam mit ausgewählten Partnern sorgen wir dafür, dass Beratung, Technik und Service ineinandergreifen."
      >
        <p>
          Im Bereich Hausnotruf arbeiten wir mit Netzwerkpartnern zusammen — etwa
          wenn es um regionale Betreuung, ergänzende Dienstleistungen oder
          Fachhandel geht.
        </p>
        <p>
          Konkrete Partnerlisten können je nach Region und Angebot variieren.
          Sprechen Sie uns an, wenn Sie für Ihr Projekt eine passende
          Anbindung suchen.
        </p>
      </SubpageArticle>
    </SubpageShell>
  );
}
