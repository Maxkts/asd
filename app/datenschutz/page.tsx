import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung von ASD Hausnotruf.",
};

export default function DatenschutzPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="min-h-[50vh] bg-white py-12">
        <article className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-semibold text-asd-shark">
            Datenschutzerklärung
          </h1>
          <p className="mt-4 rounded-md border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
            <strong>Hinweis:</strong> Diese Erklärung ist eine{" "}
            <strong>Muster-/Startvorlage</strong> und ersetzt keine
            rechtskonforme Datenschutzerklärung. Bitte passen Sie alle Abschnitte
            an Ihre konkrete Datenverarbeitung an und lassen Sie sie rechtlich
            prüfen (insbesondere Hosting, Formulare, Telefonie, Cookies,
            Analyse-Tools).
          </p>
          <div className="mt-10 space-y-8 text-zinc-700">
            <section>
              <h2 className="text-xl font-semibold text-asd-shark">
                1. Verantwortliche Stelle
              </h2>
              <p className="mt-3">
                {siteConfig.legalName}
                <br />
                {siteConfig.street}, {siteConfig.zipCity}
                <br />
                E-Mail: {siteConfig.email}
                <br />
                Telefon: {siteConfig.phoneDisplay}
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-asd-shark">
                2. Allgemeines zur Datenverarbeitung
              </h2>
              <p className="mt-3">
                Wir verarbeiten personenbezogene Daten nur, soweit dies zur
                Bereitstellung einer funktionsfähigen Website sowie unserer
                Inhalte und Leistungen erforderlich ist. Die Verarbeitung erfolgt
                regelmäßig nur nach Einwilligung oder soweit eine Rechtsgrundlage
                im Sinne der DSGVO besteht (z. B. Vertrag, berechtigtes Interesse,
                rechtliche Verpflichtung).
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-asd-shark">
                3. Hosting und Server-Logfiles
              </h2>
              <p className="mt-3">
                Beim Aufruf dieser Website werden durch den Hosting-Anbieter
                technisch notwendigerweise u. a. IP-Adresse, Datum und Uhrzeit des
                Abrufs sowie Gerätetyp verarbeitet. Angaben zum Anbieter,
                Speicherdauer und Widerruf entnehmen Sie bitte den
                Vertragsunterlagen und der Datenschutzerklärung Ihres Hosters
                (hier einfügen).
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-asd-shark">
                4. Kontaktaufnahme
              </h2>
              <p className="mt-3">
                Wenn Sie uns per Telefon oder E-Mail kontaktieren, werden die
                mitgeteilten Daten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1
                lit. b DSGVO (Vertrag/anbahnend) bzw. lit. f (berechtigtes
                Interesse an der Beantwortung).
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-asd-shark">
                5. Cookies und ähnliche Technologien
              </h2>
              <p className="mt-3">
                Soweit wir Cookies einsetzen, tun wir dies nur mit gesetzlicher
                Grundlage und — bei nicht notwendigen Cookies — nach Einwilligung.
                Bitte listen Sie hier konkret verwendete Cookies, Zwecke und
                Speicherdauer auf.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-asd-shark">
                6. Ihre Rechte
              </h2>
              <p className="mt-3">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
                Widerspruch gegen die Verarbeitung, soweit dem keine
                gesetzlichen Einschränkungen entgegenstehen. Außerdem haben Sie
                das Recht, sich bei einer Datenschutzaufsichtsbehörde zu
                beschweren.
              </p>
            </section>
            <p className="pt-4">
              <Link href="/" className="font-medium text-amber-800 underline">
                Zurück zur Startseite
              </Link>
            </p>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
