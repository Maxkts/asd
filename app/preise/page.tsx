import type { Metadata } from "next";
import Link from "next/link";
import { SubpageShell } from "@/components/SubpageShell";
import { SubpageArticle } from "@/components/SubpageArticle";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Preise",
  description:
    "Preise und Leistungsumfang beim ASD Hausnotruf: individuelle Angebote nach Beratung.",
};

export default function PreisePage() {
  return (
    <SubpageShell>
      <SubpageArticle
        title="Preise"
        lead="Hausnotruf ist keine Einheitslösung — deshalb erhalten Sie bei uns ein Angebot, das zu Ihrer Konfiguration passt."
      >
        <p>
          Je nach gewählter Technik (z. B. mit oder ohne Festnetz), gewünschter
          Ausstattung und Laufzeit können sich Kosten unterscheiden. Seriöse
          Beratung beginnt für uns damit, Bedarf und Rahmenbedingungen zu
          klären — nicht mit Pauschalversprechen im Werbeprospekt.
        </p>
        <p>
          Rufen Sie uns an oder schreiben Sie eine kurze Nachricht — wir gehen
          die Eckdaten mit Ihnen durch und nennen Ihnen danach verbindliche
          Angaben.
        </p>
        <p>
          <strong>Info-Hotline:</strong>{" "}
          <a className="text-asd-red hover:text-asd-red-hover underline" href={siteConfig.infoHotlineTel}>
            {siteConfig.infoHotlineDisplay}
          </a>
          <br />
          <strong>E-Mail:</strong>{" "}
          <a className="text-asd-red hover:text-asd-red-hover underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </p>
        <p>
          <Link href="/bestellen" className="font-medium text-asd-red hover:text-asd-red-hover underline">
            Zur Bestellseite
          </Link>
        </p>
      </SubpageArticle>
    </SubpageShell>
  );
}
