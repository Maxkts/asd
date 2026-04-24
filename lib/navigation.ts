/** Orientierung am Menü von asd-hausnotruf.de — Pfade relativ zu dieser Site. */
export const navGroups = [
  {
    label: "Hausnotruf",
    items: [
      { href: "/warum-hausnotruf", label: "Warum Hausnotruf" },
      { href: "/hausnotrufgeraete", label: "Hausnotrufgeräte" },
      { href: "/hausnotruf-ohne-festnetz", label: "Hausnotruf ohne Festnetz" },
      { href: "/vergleichen-sie", label: "Vergleichen Sie" },
    ],
  },
  {
    label: "Alarmablauf",
    items: [
      { href: "/der-alarm", label: "Der Alarm" },
      { href: "/hausnotrufzentrale", label: "Hausnotrufzentrale" },
      { href: "/hilfemassnahmen", label: "Hilfemaßnahmen" },
    ],
  },
] as const;

export const navPrimary = [
  { href: "/preise", label: "Preise" },
  { href: "/bestellen", label: "Bestellen" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/partner", label: "Unsere Partner" },
  { href: "/faq", label: "FAQ" },
] as const;

export const navHomeAnchors = [
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#geraete", label: "Geräte" },
  { href: "/#ablauf", label: "So funktioniert’s" },
] as const;
