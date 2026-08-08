import type { Metadata } from "next";
import Image from "next/image";

import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { BUSINESS_DESCRIPTION, BUSINESS_VALUES } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover Soul 45's story, music-first philosophy and commitment to inclusivity, diversity and freedom of expression.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Soul 45"
        title="Built For Listeners, Collectors And Community"
        intro={`${BUSINESS_DESCRIPTION} ${BUSINESS_VALUES}`}
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-14 md:grid-cols-12 md:px-8">
        <article className="rounded-3xl border border-border bg-panel p-6 md:col-span-7 md:p-8">
          <h2 className="font-display text-4xl tracking-[0.04em] text-ink md:text-5xl">The Story</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            Soul 45 was created to give Hull a dedicated home for deep listening, vinyl culture and open-minded music
            conversation. It is one open room with a bar, DJ decks, seating, record bins, beer fridge and taps, all
            shaped around sound quality, curiosity and shared discovery.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Instead of background noise, music is treated as the main event. Selections move across jazz, soul, funk,
            disco, deep house, house and electronic records, connecting generations and scenes through intentional
            programming.
          </p>
        </article>

        <aside className="relative min-h-[24rem] overflow-hidden rounded-3xl border border-border md:col-span-5">
          <Image src="/images/gallery-venue.svg" alt="Soul 45 interior visual" fill className="object-cover" />
        </aside>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 pb-8 md:grid-cols-2 md:px-8">
        <article className="rounded-3xl border border-border bg-panel p-6 md:p-8">
          <h3 className="text-xs uppercase tracking-[0.16em] text-accent">Music-First Philosophy</h3>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Every decision starts with sound: record-led programming, attentive listening spaces and formats that let
            records breathe. Soul 45 is designed for people who want to engage with music, not just pass by it.
          </p>
        </article>
        <article className="rounded-3xl border border-border bg-panel p-6 md:p-8">
          <h3 className="text-xs uppercase tracking-[0.16em] text-accent">Inclusivity And Expression</h3>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            The venue stands for inclusivity, diversity and freedom of expression. Soul 45 welcomes different
            backgrounds, tastes and identities, building a community where respectful participation and musical
            discovery are central.
          </p>
        </article>
      </section>

      <CtaSection
        title="Explore The Space In Person"
        body="Come through and experience the full setup in one connected space from records and decks to seating and drinks."
        primaryLabel="Visit Soul 45"
        primaryHref="/visit"
        secondaryLabel="View Gallery"
        secondaryHref="/gallery"
      />
    </>
  );
}
