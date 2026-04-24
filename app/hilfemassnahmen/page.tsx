import type { Metadata } from "next";
import { SubpageShell } from "@/components/SubpageShell";
import { SubpageArticle } from "@/components/SubpageArticle";

export const metadata: Metadata = {
  title: "Hilfemaßnahmen",
  description:
    "Welche Hilfemaßnahmen nach einem Alarm möglich sind — von Angehörigen bis Rettungsdienst, individuell mit Ihnen abgestimmt.",
};

export default function HilfemassnahmenPage() {
  return (
    <SubpageShell>
      <SubpageArticle
        title="Hilfemaßnahmen"
        lead="Nach einem Alarm geht es darum, die richtige Hilfe schnell zu organisieren — passend zu Ihrem Alltag und Ihren Wünschen."
      >
        <p>
          Typische Hilfeketten umfassen z. B. die Benachrichtigung von
          Angehörigen oder einer festgelegten Bezugsperson, die Prüfung durch
          Nachbarschaftshilfe oder — wenn es nötig ist — die Alarmierung des
          Rettungsdienstes.
        </p>
        <p>
          Entscheidend ist, dass diese Schritte mit Ihnen besprochen und
          dokumentiert werden, damit im Ernstfall keine Zeit mit Rückfragen
          verloren geht.
        </p>
        <p>
          Wir unterstützen Sie dabei, ein realistisches und für Sie belastbares
          Szenario zu finden — ohne unnötige Komplexität.
        </p>
      </SubpageArticle>
    </SubpageShell>
  );
}
