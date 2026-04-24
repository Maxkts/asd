import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function DualCta() {
  return (
    <section
      id="kontakt"
      className="bg-white py-12 md:py-16"
      aria-labelledby="kontakt-heading"
    >
      <h2 id="kontakt-heading" className="sr-only">
        Kontakt
      </h2>
      <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
        <div className="flex flex-col justify-between rounded-lg border border-zinc-200 bg-zinc-100 p-8">
          <div>
            <h3 className="text-xl font-semibold text-asd-charcoal md:text-2xl">
              Ratgeber &amp; Hintergrund
            </h3>
            <p className="mt-3 text-zinc-600">
              Informative Kurzbeiträge zu Sicherheit zu Hause und Hausnotruf —
              ohne Werbedruck, verständlich formuliert.
            </p>
          </div>
          <p className="mt-6">
            <Link
              href="/#faq"
              className="inline-flex rounded-full bg-asd-charcoal px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Zu den Fragen
            </Link>
          </p>
        </div>
        <div className="flex flex-col justify-between rounded-lg border border-asd-red/20 bg-asd-red/5 p-8">
          <div>
            <h3 className="text-xl font-semibold text-asd-charcoal md:text-2xl">
              Sie haben Fragen zu Leistungen oder Geräten?
            </h3>
            <p className="mt-3 text-zinc-700">
              <strong>Telefon:</strong>{" "}
              <a className="text-asd-red underline hover:text-asd-red-hover" href={siteConfig.phoneTel}>
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p className="mt-1 text-zinc-700">
              <strong>E-Mail:</strong>{" "}
              <a
                className="text-asd-red underline hover:text-asd-red-hover"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
          <p className="mt-6">
            <a
              href={siteConfig.phoneTel}
              className="inline-flex rounded-full bg-asd-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-asd-red-hover"
            >
              Jetzt anrufen
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
