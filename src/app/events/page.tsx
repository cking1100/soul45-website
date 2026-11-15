import type { Metadata } from "next";

import { CtaSection } from "@/components/cta-section";
import { EventGrid } from "@/components/event-grid";
import { PageHeader } from "@/components/page-header";
import { getUpcomingEvents } from "@/lib/events";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Events",
  description:
    "Soul 45 events page with live event listings, recurring sessions and event detail routes.",
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events"
        title="Upcoming Soul 45 Sessions"
        intro="Find upcoming sessions, dates and lineups at Soul 45."
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
        <EventGrid events={getUpcomingEvents()} />
      </section>

      <CtaSection
        title="Announcements Land On Instagram"
        body="For live updates and last-minute additions, follow Soul 45 on Instagram."
        primaryLabel="Instagram"
        primaryHref="/instagram"
        secondaryLabel="Visit Us"
        secondaryHref="/visit"
      />
    </>
  );
}
