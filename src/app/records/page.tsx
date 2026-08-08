import type { Metadata } from "next";
import Image from "next/image";

import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Record Shop",
  description:
    "Explore Soul 45's record shop culture, from browsing bins to discovering jazz, funk, soul, disco, house and electronic vinyl.",
};

export default function RecordsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Record Shop"
        title="Vinyl Culture At Street Level"
        intro="Soul 45 is one open room where records, people and music all live together in the same space."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-14 md:grid-cols-12 md:px-8">
        <article className="rounded-3xl border border-border bg-panel p-6 md:col-span-7 md:p-8">
          <h2 className="font-display text-4xl tracking-[0.04em] text-ink md:text-5xl">One Space, Real Record Culture</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            The bins sit right inside the main room alongside the bar, decks and seating, so buying records and hearing
            records happen together. The selection runs across soul, jazz, funk, disco, house and electronic music.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Soul 45 treats record buying as part of the night itself: listen, chat, pull records, have a drink and stay
            in the same flow.
          </p>
        </article>

        <article className="relative min-h-[28rem] overflow-hidden rounded-3xl border border-border md:col-span-5">
          <Image src="/images/gallery-vinyl.svg" alt="Record bins and vinyl browsing" fill className="object-cover" />
        </article>
      </section>

      <CtaSection
        title="Pair Digging With Listening"
        body="Everything happens in one room, so you can hear what is being played while you dig through the bins."
        primaryLabel="Listening Bar"
        primaryHref="/listening-bar"
        secondaryLabel="View Gallery"
        secondaryHref="/gallery"
      />
    </>
  );
}
