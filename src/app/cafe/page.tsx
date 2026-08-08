import type { Metadata } from "next";
import Image from "next/image";

import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Cafe and Drinks",
  description:
    "Discover Soul 45's cafe and drinks atmosphere from daytime coffee sessions to evening social rhythm.",
};

export default function CafePage() {
  return (
    <>
      <PageHeader
        eyebrow="Cafe And Drinks"
        title="Coffee, Conversation, Music"
        intro="The cafe and bar side of Soul 45 supports the rhythm of the day: calm starts, daytime social flow and evening transitions into listening sessions."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-14 md:grid-cols-2 md:px-8">
        <article className="relative min-h-[28rem] overflow-hidden rounded-3xl border border-border">
          <Image src="/images/gallery-drinks.svg" alt="Soul 45 cafe and drinks atmosphere" fill className="object-cover" />
        </article>

        <article className="rounded-3xl border border-border bg-panel p-6 md:p-8">
          <h2 className="font-display text-4xl tracking-[0.04em] text-ink md:text-5xl">Day To Night Energy</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Daytime at Soul 45 leans toward coffee, records and relaxed conversation. As the evening develops, the room
            shifts into a warmer social pace where drinks and music settle into the same flow.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Drinks, taps, beer fridge, decks and records all sit in the same shared room so the social side and music
            side stay connected all night.
          </p>
        </article>
      </section>

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
