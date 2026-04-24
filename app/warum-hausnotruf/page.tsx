import type { Metadata } from "next";
import Link from "next/link";
import { SubpageShell } from "@/components/SubpageShell";
import { SubpageArticle } from "@/components/SubpageArticle";

export const metadata: Metadata = {
  title: "Warum Hausnotruf",
  description:
    "Mehr Sicherheit und Selbstständigkeit zu Hause: Gründe für einen Hausnotruf und was Sie realistisch erwarten können.",
};

export default function WarumHausnotrufPage() {
  return (
    <SubpageShell>
      <SubpageArticle
        title="Warum Hausnotruf?"
        lead="Ein Hausnotruf ersetzt keine Vorsorge — er ergänzt sie: mit einem klaren Weg zu Hilfe, wenn Sie ihn brauchen."
      >
        <p>
          Viele Menschen möchten möglichst lange in den eigenen vier Wänden
          bleiben. Ein Hausnotruf kann dazu beitragen, weil Hilfe über eine
          bewusste Handlung ausgelöst werden kann: ein Knopfdruck, den Sie auch
          in Unsicherheit noch schaffen.
        </p>
        <p>
          Besonders sinnvoll ist das, wenn Sie allein leben, gesundheitlich
          belastbar sind, aber dennoch Szenarien kennen, in denen schnelle
          Unterstützung wichtig wäre — etwa nach einem Sturz oder bei
          plötzlichen Beschwerden.
        </p>
        <p>
          Wir erklären Ihnen offen, was ein System kann — und was nicht — und
          welche{" "}
          <Link href="/hausnotrufgeraete" className="text-asd-red hover:text-asd-red-hover underline">
            Geräte
          </Link>{" "}
          für Ihre Wohnsituation passen.
        </p>
      </SubpageArticle>
    </SubpageShell>
  );
}
