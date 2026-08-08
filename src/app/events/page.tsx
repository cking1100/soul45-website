import type { Metadata } from "next";

import { CtaSection } from "@/components/cta-section";
import { EventGrid } from "@/components/event-grid";
import { PageHeader } from "@/components/page-header";
import { events } from "@/lib/events";

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
        intro="This is the dedicated Soul 45 event hub. Browse live listings for upcoming sessions, dates and lineups."
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
        <p className="mb-6 max-w-3xl text-sm leading-relaxed text-ink-soft">
          Each card includes date, time and DJ details so you can quickly see what is coming up at Soul 45.
        </p>
        <EventGrid events={events} />
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
