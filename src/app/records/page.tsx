import type { Metadata } from "next";
import Image from "next/image";

import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Record Shop",
  description:
    "Explore Soul 45's record shop culture, from browsing bins to discovering jazz, funk, soul, disco, house and electronic vinyl.",
};

const genres = ["Soul", "Jazz", "Funk", "Disco", "House", "Electronic"];

export default function RecordsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Record Shop"
        title="Vinyl culture at street level."
        intro="Soul 45 is one open room where records, people and music all live together in the same space."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-14 md:grid-cols-12 md:px-8">
        <article className="border border-border bg-[#120d0b] p-6 md:col-span-7 md:p-8">
          <p className="eyebrow">Crates and conversation</p>
          <h2 className="editorial-title mt-4 text-4xl text-ink md:text-5xl">One room, real record culture.</h2>
          <p className="mt-5 text-base leading-relaxed text-ink-soft">
            The bins sit right inside the main room alongside the bar, decks and seating, so buying records and hearing
            records happen together. The selection runs across soul, jazz, funk, disco, house and electronic music.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Soul 45 treats record buying as part of the night itself: listen, chat, pull records, have a drink and stay
            in the same flow.
          </p>
        </article>

        <article className="image-card relative min-h-[28rem] overflow-hidden md:col-span-5">
          <Image src="/images/gallery-vinyl.svg" alt="Record bins and vinyl browsing" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </article>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-12 md:px-8">
        <div className="border border-border bg-[#120d0b] p-6 md:p-8">
          <p className="eyebrow">Selections</p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {genres.map((genre, index) => (
              <div
                key={genre}
                className={`border border-border px-4 py-5 ${index % 2 === 1 ? "bg-[#18120f]" : "bg-[#100c0a]"}`}
              >
                <p className="text-[0.6rem] uppercase tracking-[0.2em] text-ink-muted">{index + 1}</p>
                <p className="editorial-title mt-3 text-4xl text-ink">{genre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="Pair digging with listening"
        body="Everything happens in one room, so you can hear what is being played while you dig through the bins."
        primaryLabel="Listening Bar"
        primaryHref="/listening-bar"
        secondaryLabel="View Gallery"
        secondaryHref="/gallery"
      />
    </>
  );
}
