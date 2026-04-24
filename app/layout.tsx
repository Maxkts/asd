import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SkipLink } from "@/components/SkipLink";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans-brand",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.brand,
    template: `%s | ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.brand,
    description: siteConfig.description,
    locale: "de_DE",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.brand,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  formatDetection: {
    telephone: true,
    email: true,
  },
};

const zipParts = siteConfig.zipCity.trim().split(/\s+/);
const postalCode = zipParts[0] ?? "";
const addressLocality = zipParts.slice(1).join(" ") || siteConfig.zipCity;

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.brand,
  url: siteUrl,
  telephone: siteConfig.officePhoneTel.replace(/^tel:/u, ""),
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.street,
    addressLocality,
    postalCode,
    addressCountry: "DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
