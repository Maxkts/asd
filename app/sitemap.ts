import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const now = new Date();
  const sub = [
    "der-alarm",
    "hausnotrufzentrale",
    "hilfemassnahmen",
    "warum-hausnotruf",
    "hausnotrufgeraete",
    "hausnotruf-ohne-festnetz",
    "vergleichen-sie",
    "preise",
    "bestellen",
    "kontakt",
    "partner",
    "faq",
  ] as const;

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...sub.map((path) => ({
      url: `${base}/${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${base}/impressum`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${base}/datenschutz`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
