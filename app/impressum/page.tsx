import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum und Anbieterkennzeichnung von ASD Hausnotruf.",
};

export default function ImpressumPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="min-h-[50vh] bg-white py-12">
        <article className="mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-semibold text-asd-charcoal">Impressum</h1>
          <p className="mt-4 rounded-md border border-asd-red/25 bg-asd-red/5 p-4 text-sm text-asd-charcoal">
            <strong>Hinweis:</strong> Die folgenden Angaben sind{" "}
            <strong>Platzhalter</strong>. Vor Veröffentlichung müssen sie durch
            die tatsächlichen, rechtskonformen Daten Ihres Unternehmens ersetzt
            und ggf. von einer Rechtsanwältin oder einem Rechtsanwalt geprüft
            werden.
          </p>
          <div className="mt-10 space-y-8 text-zinc-700">
            <section aria-labelledby="angaben">
              <h2 id="angaben" className="text-xl font-semibold text-asd-charcoal">
                Angaben zur Anbieterkennzeichnung (TMG)
              </h2>
              <p className="mt-3">
                {siteConfig.legalName}
                <br />
                {siteConfig.street}
                <br />
                {siteConfig.zipCity}
                <br />
                {siteConfig.country}
              </p>
            </section>
            <section aria-labelledby="vertretung">
              <h2 id="vertretung" className="text-xl font-semibold text-asd-charcoal">
                Vertreten durch
              </h2>
              <p className="mt-3">{siteConfig.managingDirector} (Geschäftsführung)</p>
            </section>
            <section aria-labelledby="kontakt-imp">
              <h2 id="kontakt-imp" className="text-xl font-semibold text-asd-charcoal">
                Kontakt
              </h2>
              <p className="mt-3">
                Telefon:{" "}
                <a className="text-asd-red hover:text-asd-red-hover underline" href={siteConfig.phoneTel}>
                  {siteConfig.phoneDisplay}
                </a>
                <br />
                E-Mail:{" "}
                <a
                  className="text-asd-red hover:text-asd-red-hover underline"
                  href={`mailto:${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
              </p>
            </section>
            <section aria-labelledby="register">
              <h2 id="register" className="text-xl font-semibold text-asd-charcoal">
                Registereintrag
              </h2>
              <p className="mt-3">
                Eintragung im Handelsregister.
                <br />
                Registergericht: {siteConfig.registerCourt}
                <br />
                Registernummer: {siteConfig.registerNumber}
              </p>
            </section>
            <section aria-labelledby="umsatzsteuer">
              <h2 id="umsatzsteuer" className="text-xl font-semibold text-asd-charcoal">
                Umsatzsteuer-ID
              </h2>
              <p className="mt-3">
                Umsatzsteuer-Identifikationsnummer gemäß Umsatzsteuergesetz:{" "}
                {siteConfig.vatId}
              </p>
            </section>
            <section aria-labelledby="streitschlichtung">
              <h2 id="streitschlichtung" className="text-xl font-semibold text-asd-charcoal">
                EU-Streitschlichtung / Verbraucherstreitbeilegung
              </h2>
              <p className="mt-3">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  className="text-asd-red hover:text-asd-red-hover underline"
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind
                nicht verpflichtet und grundsätzlich nicht bereit, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen — sofern nicht
                gesetzlich anders vorgegeben (Platzhalter, bitte prüfen lassen).
              </p>
            </section>
            <section aria-labelledby="haftung-inhalt">
              <h2 id="haftung-inhalt" className="text-xl font-semibold text-asd-charcoal">
                Haftung für Inhalte
              </h2>
              <p className="mt-3">
                Als Diensteanbieter sind wir nach dem Telemediengesetz (TMG) für
                eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Hinsichtlich fremder Inhalte gelten die
                einschlägigen Haftungsbeschränkungen des TMG; wir sind jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hiervon unberührt.
              </p>
            </section>
            <p className="pt-4">
              <Link href="/" className="font-medium text-asd-red hover:text-asd-red-hover underline">
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
