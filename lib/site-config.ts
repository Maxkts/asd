/** Zentrale Texte — Angaben vor Livegang durch echte Firmendaten ersetzen. */
export const siteConfig = {
  brand: "ASD Hausnotruf",
  /** Markenlogo (PNG), Datei in `public/` */
  logoSrc: "/logo-asd-hausnotruf.png",
  logoWidth: 320,
  logoHeight: 72,
  /** Startseiten-Hero (breites Banner) */
  heroBannerSrc: "/hero-asd-banner.png",
  titleTemplate: "%s | ASD Hausnotruf",
  description:
    "ASD Hausnotruf: professionelle Anbindung an eine Notrufzentrale, einfache Bedienung und persönliche Beratung für mehr Sicherheit zu Hause.",
  phoneDisplay: "0800 000 0000",
  phoneTel: "tel:+4980000000000",
  email: "kontakt@example.de",
  legalName: "ASD Hausnotruf GmbH (Muster)",
  street: "Musterstraße 1",
  zipCity: "12345 Musterstadt",
  country: "Deutschland",
  managingDirector: "Max Mustermann",
  registerCourt: "Amtsgericht Musterstadt",
  registerNumber: "HRB 00000",
  vatId: "DE000000000",
} as const;
