import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { CtaSection } from "@/components/cta-section";
import { EventGrid } from "@/components/event-grid";
import { LocationSection } from "@/components/location-section";
import { SplashSection } from "@/components/splash-section";
import { INSTAGRAM_HANDLE } from "@/lib/site";
import { events } from "@/lib/events";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Soul 45 is Hull's first vinyl cafe, bar and record shop - a music-first destination for listening culture, records and community.",
};

const previews = [
  {
    title: "Listening Bar",
    body: "A room built around deep listening, vinyl warmth and selector-led sessions.",
    href: "/listening-bar",
  },
  {
    title: "Record Shop",
    body: "Browse and buy records across soul, jazz, funk, disco, house and electronic music.",
    href: "/records",
  },
  {
    title: "Cafe And Drinks",
    body: "From daytime coffee flow to evening social energy in one connected venue.",
    href: "/cafe",
  },
  {
    title: "Gallery",
    body: "Editorial frames capturing venue texture, DJs, records and atmosphere.",
    href: "/gallery",
  },
  {
    title: "Visit Soul 45",
    body: "Find Soul 45 on Newland Avenue, Hull and plan your route with map support.",
    href: "/visit",
  },
  {
    title: "Instagram",
    body: "Follow live updates, announcements and venue moments from Soul 45.",
    href: "/instagram",
  },
];

export default function HomePage() {
  return (
    <>
      <SplashSection />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl tracking-[0.04em] text-ink md:text-5xl">Explore Soul 45</h2>
          <ButtonLink href="/about" variant="ghost">
            Learn More
          </ButtonLink>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {previews.map((preview) => (
            <article key={preview.href} className="rounded-3xl border border-border bg-panel p-5">
              <h3 className="font-display text-3xl leading-none tracking-[0.04em] text-ink">{preview.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{preview.body}</p>
              <div className="mt-5">
                <ButtonLink href={preview.href} variant="ghost">
                  View Page
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-6 md:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl tracking-[0.04em] text-ink md:text-5xl">Events Preview</h2>
          <ButtonLink href="/events" variant="ghost">
            All Events
          </ButtonLink>
        </div>
        <EventGrid events={events.slice(0, 2)} />
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-14 md:grid-cols-2 md:px-8">
        <article className="overflow-hidden rounded-3xl border border-border bg-panel p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-accent">Instagram Preview</p>
          <h2 className="mt-4 font-display text-5xl tracking-[0.04em] text-ink">{INSTAGRAM_HANDLE}</h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
            Follow Soul 45 for live updates, event announcements and visual moments from the listening bar, record
            shop and cafe.
          </p>
          <div className="mt-7">
            <ButtonLink href="/instagram">Open Instagram Page</ButtonLink>
          </div>
        </article>

        <article className="relative min-h-[22rem] overflow-hidden rounded-3xl border border-border">
          <Image src="/images/gallery-music.svg" alt="Soul 45 crowd and music atmosphere" fill className="object-cover" />
        </article>
      </section>

      <LocationSection />

      <CtaSection
        title="Come For The Records. Stay For The Sound."
        body="Soul 45 is built for people who care about music culture, listening spaces and inclusive community energy."
        primaryLabel="Plan A Visit"
        primaryHref="/visit"
        secondaryLabel="About Soul 45"
        secondaryHref="/about"
      />
    </>
  );
}
