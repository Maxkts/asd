/** Zentrale Stammdaten — Stand der öffentlichen Angaben wie auf asd-hausnotruf.de. */
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
  /** Kostenlose Info-Hotline (Werbeträger / Erstkontakt) */
  infoHotlineDisplay: "0800 76 77 896",
  infoHotlineTel: "tel:+498007677896",
  /** Büro / allgemeine Erreichbarkeit */
  officePhoneDisplay: "04471 926 29 50",
  officePhoneTel: "tel:+4944719262950",
  faxDisplay: "04471 926 29 55",
  /** Primär für CTAs in Header & Buttons (Info-Hotline) */
  phoneDisplay: "0800 76 77 896",
  phoneTel: "tel:+498007677896",
  email: "info@asd-hausnotruf.de",
  legalName: "ASD Hausnotruf GmbH",
  street: "Porscheweg 22",
  zipCity: "49661 Cloppenburg",
  country: "Deutschland",
  managingDirector: "Matthias Hackmann",
  registerCourt: "Amtsgericht Oldenburg",
  registerNumber: "HRB 201712",
  vatId: "DE247588588",
  institutionId: "IK590342651",
} as const;
