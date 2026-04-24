import { SiteHeader } from "@/components/SiteHeader";
import { HeroSection } from "@/components/HeroSection";
import { IntroBand } from "@/components/IntroBand";
import { SectionTeaser } from "@/components/SectionTeaser";
import { FeatureGrid } from "@/components/FeatureGrid";
import { StepsSection } from "@/components/StepsSection";
import { FaqSection } from "@/components/FaqSection";
import { DualCta } from "@/components/DualCta";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <HeroSection />
        <IntroBand />
        <SectionTeaser />
        <FeatureGrid />
        <StepsSection />
        <FaqSection />
        <DualCta />
      </main>
      <SiteFooter />
    </>
  );
}
