import type { Metadata } from "next";
import { SubpageShell } from "@/components/SubpageShell";
import { SubpageArticle } from "@/components/SubpageArticle";

export const metadata: Metadata = {
  title: "Hausnotrufzentrale",
  description:
    "Was die Hausnotrufzentrale leistet: Entgegennahme des Alarms, Abstimmung der Hilfe und Ansprechpartner im Ernstfall.",
};

export default function HausnotrufzentralePage() {
  return (
    <SubpageShell>
      <SubpageArticle
        title="Hausnotrufzentrale"
        lead="Ihr Alarm wird professionell entgegengenommen — damit im Ernstfall nichts dem Zufall überlassen bleibt."
      >
        <p>
          Wenn Sie den Notruf auslösen, erreicht Ihr Signal die vereinbarte
          Hausnotrufzentrale. Dort werden die nächsten Schritte nach den mit
          Ihnen festgelegten Vorgaben eingeleitet — etwa der Kontakt zu
          Angehörigen, Nachbarn oder den Rettungsdienst.
        </p>
        <p>
          Die Zentrale ist darauf ausgelegt, auch in stressigen Situationen
          ruhig nachzufragen und Sie an der Sprechstelle des Geräts zu
          begleiten, soweit dies möglich ist.
        </p>
        <p>
          Welche Abläufe für Sie gelten, klären wir vorab in der Beratung — so
          wissen alle Beteiligten Bescheid.
        </p>
      </SubpageArticle>
    </SubpageShell>
  );
}
