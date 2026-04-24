import type { ReactNode } from "react";
import Link from "next/link";

type SubpageArticleProps = {
  title: string;
  lead?: string;
  children: ReactNode;
};

export function SubpageArticle({ title, lead, children }: SubpageArticleProps) {
  return (
    <article className="mx-auto max-w-3xl px-4">
      <nav className="text-sm text-zinc-500" aria-label="Brotkrumen">
        <Link href="/" className="text-asd-red hover:text-asd-red-hover underline-offset-2 hover:underline">
          Startseite
        </Link>
        <span aria-hidden> · </span>
        <span className="text-zinc-700">{title}</span>
      </nav>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-asd-charcoal md:text-4xl">
        {title}
      </h1>
      {lead ? (
        <p className="mt-4 text-lg leading-relaxed text-zinc-600 md:text-xl">{lead}</p>
      ) : null}
      <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-700 md:text-lg">
        {children}
      </div>
      <p className="mt-12 border-t border-zinc-200 pt-8">
        <Link
          href="/"
          className="font-medium text-asd-red hover:text-asd-red-hover underline"
        >
          Zurück zur Startseite
        </Link>
      </p>
    </article>
  );
}
