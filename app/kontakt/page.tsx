import type { Metadata } from "next";
import Link from "next/link";
import { SubpageShell } from "@/components/SubpageShell";
import { SubpageArticle } from "@/components/SubpageArticle";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontakt ASD Hausnotruf GmbH: Adresse, Telefon, Fax und E-Mail.",
};

export default function KontaktPage() {
  return (
    <SubpageShell>
      <SubpageArticle
        title="Kontakt"
        lead="Wir freuen uns auf Ihre Nachricht oder Ihren Anruf."
      >
        <div className="rounded-lg border border-zinc-200 bg-asd-surface p-6">
          <p className="font-semibold text-asd-charcoal">{siteConfig.legalName}</p>
          <p className="mt-2">
            {siteConfig.street}
            <br />
            {siteConfig.zipCity}
            <br />
            {siteConfig.country}
          </p>
          <p className="mt-4">
            <strong>Info-Hotline:</strong>{" "}
            <a className="text-asd-red hover:text-asd-red-hover underline" href={siteConfig.infoHotlineTel}>
              {siteConfig.infoHotlineDisplay}
            </a>
          </p>
          <p className="mt-2">
            <strong>Telefon:</strong>{" "}
            <a className="text-asd-red hover:text-asd-red-hover underline" href={siteConfig.officePhoneTel}>
              {siteConfig.officePhoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            <strong>Fax:</strong> {siteConfig.faxDisplay}
          </p>
          <p className="mt-2">
            <strong>E-Mail:</strong>{" "}
            <a className="text-asd-red hover:text-asd-red-hover underline" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
        </div>
        <p className="pt-4 text-sm text-zinc-600">
          Rechtliche Angaben finden Sie im{" "}
          <Link href="/impressum" className="text-asd-red hover:text-asd-red-hover underline">
            Impressum
          </Link>
          .
        </p>
      </SubpageArticle>
    </SubpageShell>
  );
}
