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
            <h3 className="text-xl font-semibold text-asd-shark md:text-2xl">
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
              className="inline-flex rounded-full bg-asd-shark px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Zu den Fragen
            </Link>
          </p>
        </div>
        <div className="flex flex-col justify-between rounded-lg border border-amber-700/20 bg-amber-50 p-8">
          <div>
            <h3 className="text-xl font-semibold text-asd-shark md:text-2xl">
              Sie haben Fragen zu Leistungen oder Geräten?
            </h3>
            <p className="mt-3 text-zinc-700">
              <strong>Telefon:</strong>{" "}
              <a className="underline hover:no-underline" href={siteConfig.phoneTel}>
                {siteConfig.phoneDisplay}
              </a>
            </p>
            <p className="mt-1 text-zinc-700">
              <strong>E-Mail:</strong>{" "}
              <a
                className="underline hover:no-underline"
                href={`mailto:${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </p>
          </div>
          <p className="mt-6">
            <a
              href={siteConfig.phoneTel}
              className="inline-flex rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-asd-shark hover:bg-amber-400"
            >
              Jetzt anrufen
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
