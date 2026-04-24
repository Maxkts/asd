import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

type SubpageShellProps = {
  children: ReactNode;
};

export function SubpageShell({ children }: SubpageShellProps) {
  return (
    <>
      <SiteHeader />
      <main id="main" className="min-h-[50vh] bg-white py-12 md:py-16">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
