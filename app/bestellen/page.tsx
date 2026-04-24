import type { Metadata } from "next";
import Link from "next/link";
import { SubpageShell } from "@/components/SubpageShell";
import { SubpageArticle } from "@/components/SubpageArticle";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Bestellen",
  description:
    "Hausnotruf bestellen: So starten Sie bei ASD Hausnotruf — Beratung, Angebot und nächste Schritte.",
};

export default function BestellenPage() {
  return (
    <SubpageShell>
      <SubpageArticle
        title="Bestellen"
        lead="So gehen Sie vor, wenn Sie einen Hausnotruf bei uns beauftragen möchten."
      >
        <ol className="list-inside list-decimal space-y-3 marker:font-semibold marker:text-asd-red">
          <li>Kurze Kontaktaufnahme per Telefon oder E-Mail.</li>
          <li>Unverbindliche Beratung — Bedarf, Wohnumfeld, technische Optionen.</li>
          <li>Schriftliches Angebot mit Leistungsbeschreibung.</li>
          <li>Nach Ihrer Zusage: Terminierung von Lieferung, Installation und Einweisung.</li>
        </ol>
        <p className="pt-4">
          <a
            href={siteConfig.infoHotlineTel}
            className="inline-flex rounded-full bg-asd-red px-6 py-3 font-semibold text-white hover:bg-asd-red-hover"
          >
            Jetzt anrufen: {siteConfig.infoHotlineDisplay}
          </a>
        </p>
        <p className="pt-4">
          Oder{" "}
          <Link href="/kontakt" className="text-asd-red hover:text-asd-red-hover underline">
            alle Kontaktwege
          </Link>{" "}
          auf einen Blick.
        </p>
      </SubpageArticle>
    </SubpageShell>
  );
}
