import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { PageHeader } from "@/components/page-header";
import { BUSINESS_DESCRIPTION, BUSINESS_VALUES } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Discover Soul 45's listening bar, record shop and music-first community in Hull.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Soul 45"
        title="A place for music and people."
        intro={`${BUSINESS_DESCRIPTION} ${BUSINESS_VALUES}`}
      />

      <section className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-12 md:grid-cols-2 md:px-8">
        <div className="space-y-8">
          <article id="listening-bar" className="scroll-mt-24">
            <h2 className="editorial-title text-4xl text-ink md:text-5xl">The listening bar</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Music comes first at Soul 45. Listen to vinyl-led sessions, enjoy a drink and share the room with
              fellow music lovers.
            </p>
          </article>
          <article id="records" className="scroll-mt-24 border-t border-border pt-8">
            <h2 className="editorial-title text-4xl text-ink md:text-5xl">The record shop</h2>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              Browse and buy records in the same room as the bar and decks, with selections across soul, jazz,
              funk, disco, house and electronic music.
            </p>
          </article>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/events">Upcoming events</ButtonLink>
            <ButtonLink href="/gallery" variant="ghost">View gallery</ButtonLink>
          </div>
        </div>
        <div className="image-card relative min-h-80">
          <Image
            src="/images/Decks.png"
            alt="Turntable decks at Soul 45"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </section>
    </>
  );
}
