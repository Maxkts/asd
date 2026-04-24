import Image from "next/image";
import Link from "next/link";

const GERATE_BILD = "/geraete/hausnotruf-komponenten.png";

/** Ein gemeinsames Foto — pro Karte Ausschnitt per object-position (wirkt wie drei Einzelbilder). */
const geraete = [
  {
    title: "Basisstation",
    text: "Die Station zu Hause: oft mit Lautsprecher, Mikrofon und klar erkennbarer Hilfe-Taste.",
    alt: "Basisstation eines Hausnotrufsystems mit Tasten und Lautsprecher",
    objectPosition: "24% 50%",
    scale: "scale-[1.45] sm:scale-[1.35]",
  },
  {
    title: "Handsender",
    text: "Tragbar am Handgelenk — schnell erreichbar, wenn Sie Hilfe brauchen.",
    alt: "Tragbarer Notruf-Handsender am Armband",
    objectPosition: "50% 50%",
    scale: "scale-[1.45] sm:scale-[1.35]",
  },
  {
    title: "Anhänger",
    text: "Leicht um den Hals — ideal, wenn Sie den Sender stets griffbereit haben möchten.",
    alt: "Notruf-Anhänger zum Umhängen",
    objectPosition: "76% 50%",
    scale: "scale-[1.45] sm:scale-[1.35]",
  },
] as const;

export function DeviceShowcase() {
  return (
    <section
      id="geraete"
      className="bg-white py-12 md:py-16"
      aria-labelledby="geraete-heading"
    >
      <div className="mx-auto max-w-6xl px-4">
        <h2
          id="geraete-heading"
          className="text-2xl font-semibold text-asd-charcoal md:text-3xl"
        >
          Typische Geräte im Überblick
        </h2>
        <p className="mt-3 max-w-3xl text-zinc-600 md:text-lg">
          Viele Hausnotruf-Systeme bestehen aus einer festen Basis und mobilen
          Sendern. Welche Modelle für Sie infrage kommen, besprechen wir in der
          Beratung — die Abbildung zeigt gängige Komponenten nur beispielhaft.{" "}
          <Link href="/hausnotrufgeraete" className="font-medium text-asd-red hover:text-asd-red-hover underline">
            Mehr zu Hausnotrufgeräten
          </Link>
        </p>
        <ul className="mt-10 grid gap-8 md:grid-cols-3">
          {geraete.map((g) => (
            <li key={g.title}>
              <figure className="flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 shadow-sm">
                  <Image
                    src={GERATE_BILD}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`object-cover ${g.scale}`}
                    style={{ objectPosition: g.objectPosition }}
                    priority={false}
                  />
                </div>
                <figcaption className="mt-4">
                  <h3 className="text-lg font-semibold text-asd-charcoal">
                    {g.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 md:text-base">
                    {g.text}
                  </p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
