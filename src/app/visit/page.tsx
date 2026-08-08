import type { Metadata } from "next";

import { LocationSection } from "@/components/location-section";
import { PageHeader } from "@/components/page-header";
import { ADDRESS_LINES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Visit Us",
  description: `Visit Soul 45 at ${ADDRESS_LINES.join(", ")}. Find directions, location details and Instagram updates.`,
};

export default function VisitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Visit"
        title="Soul 45 - Listening Bar and Record Shop"
        intro="Find us on Newland Avenue in Hull. Use the map for directions and Instagram for the latest operating updates."
      />

      <LocationSection />
    </>
  );
}
