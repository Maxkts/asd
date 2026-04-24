import type { Metadata } from "next";
import Link from "next/link";
import { SubpageShell } from "@/components/SubpageShell";
import { SubpageArticle } from "@/components/SubpageArticle";

export const metadata: Metadata = {
  title: "Hausnotrufgeräte",
  description:
    "Basisstation, Handsender und Anhänger: typische Komponenten eines Hausnotrufsystems und worauf es bei der Auswahl ankommt.",
};

export default function HausnotrufgeraetePage() {
  return (
    <SubpageShell>
      <SubpageArticle
        title="Hausnotrufgeräte"
        lead="Die meisten Systeme bestehen aus einer fest installierten Basis und einem oder mehreren mobilen Sendern."
      >
        <p>
          Die <strong>Basisstation</strong> steht zentral in der Wohnung: Sie
          ist über das Telefonnetz mit der Zentrale verbunden, verfügt häufig
          über eine Sprechstelle und zeigt den Systemzustand an.
        </p>
        <p>
          <strong>Handsender</strong> (z. B. am Armband) und{" "}
          <strong>Anhänger</strong> (zum Umhängen) nehmen Sie mit in den Alltag
          — damit der Alarm auch dann auslösbar ist, wenn Sie nicht direkt an
          der Basis sind.
        </p>
        <p>
          Welche Kombination für Sie sinnvoll ist, hängt von Wohnungsgröße,
          Gewohnheiten und ggf.{" "}
          <Link
            href="/hausnotruf-ohne-festnetz"
            className="text-asd-red hover:text-asd-red-hover underline"
          >
            ohne klassisches Festnetz
          </Link>{" "}
          ab. Auf der Startseite finden Sie unter „Geräte“ eine kompakte
          Übersicht mit Bildbeispielen.
        </p>
      </SubpageArticle>
    </SubpageShell>
  );
}
