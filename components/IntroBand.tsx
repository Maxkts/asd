import Link from "next/link";

export function IntroBand() {
  return (
    <section className="border-b border-zinc-200 bg-white py-12 md:py-16" aria-labelledby="intro-heading">
      <div className="mx-auto max-w-3xl px-4">
        <h2 id="intro-heading" className="sr-only">
          Über uns
        </h2>
        <p className="text-lg leading-relaxed text-zinc-700 md:text-xl">
          ASD Hausnotruf unterstützt Sie dabei, im eigenen Zuhause länger
          selbstbestimmt zu bleiben: mit durchdachten Notruflösungen,
          verständlicher Technik und einem Team, das Wert auf Vertrauen und
          Erreichbarkeit legt.{" "}
          <Link href="/warum-hausnotruf" className="font-medium text-asd-red hover:text-asd-red-hover underline">
            Warum ein Hausnotruf sinnvoll sein kann
          </Link>
        </p>
      </div>
    </section>
  );
}
