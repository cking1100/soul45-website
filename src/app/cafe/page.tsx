import type { Metadata } from "next";

import { CtaSection } from "@/components/cta-section";
import { DrinksMenu } from "@/components/drinks-menu";

export const metadata: Metadata = {
  title: "Drinks",
  description:
    "Discover Soul 45's cafe and drinks atmosphere from daytime coffee sessions to evening social rhythm.",
};

export default function CafePage() {
  return (
    <>
      <DrinksMenu />

      <CtaSection
        title="Plan Your Visit"
        body="Find Soul 45 on Newland Avenue and follow Instagram for the latest venue updates."
        primaryLabel="Visit Us"
        primaryHref="/visit"
        secondaryLabel="Instagram"
        secondaryHref="/instagram"
      />
    </>
  );
}
