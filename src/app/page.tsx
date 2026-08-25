import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { CtaSection } from "@/components/cta-section";
import { DraughtSection } from "@/components/draught-section";
import { EventGrid } from "@/components/event-grid";
import { LocationSection } from "@/components/location-section";
import { GoogleReviewsSection } from "@/components/google-reviews-section";
import { SplashSection } from "@/components/splash-section";
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
    image: "/images/gallery-dj.svg",
    imageAlt: "DJ decks ready for a listening session",
  },
  {
    title: "Record Shop",
    body: "Browse and buy records across soul, jazz, funk, disco, house and electronic music.",
    href: "/records",
    image: "/images/gallery-vinyl.svg",
    imageAlt: "Vinyl records ready to browse",
  },
  {
    title: "Drinks",
    body: "From daytime coffee flow to evening social energy in one connected venue.",
    href: "/drinks",
    image: "/images/gallery-drinks.svg",
    imageAlt: "Drinks and warm lighting at Soul 45",
  },
  {
    title: "Gallery",
    body: "Editorial frames capturing venue texture, DJs, records and atmosphere.",
    href: "/gallery",
    image: "/images/venue.png",
    imageAlt: "The Soul 45 venue interior",
  },
  {
    title: "Visit Soul 45",
    body: "Find Soul 45 on Newland Avenue, Hull and plan your route with map support.",
    href: "/visit",
    image: "/images/venueOutisde.png",
    imageAlt: "The exterior of Soul 45 on Newland Avenue",
  },
  {
    title: "Instagram",
    body: "Follow live updates, announcements and venue moments from Soul 45.",
    href: "/instagram",
    image: "/images/gallery-atmosphere.svg",
    imageAlt: "Atmosphere inside Soul 45",
  },
];

export default function HomePage() {
  return (
    <>
      <SplashSection />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Soul 45</p>
            <h2 className="editorial-title mt-4 text-4xl text-ink md:text-5xl">A room built for music culture.</h2>
          </div>
          <ButtonLink href="/about" variant="ghost">
            Learn More
          </ButtonLink>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="border border-border bg-[#120d0b] p-6 md:p-8">
              <p className="text-[0.66rem] uppercase tracking-[0.22em] text-accent">Manifesto</p>
              <p className="editorial-title mt-5 max-w-3xl text-4xl text-ink md:text-6xl">
                Records, conversation and a room tuned for listening.
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
                Soul 45 is a listening bar, record shop and cafe in Hull built around music as the main event.
                Deep grooves, warm rooms and a community that values crates, selectors and the details in between.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="image-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image src="/images/gallery-dj.svg" alt="Turntables and DJ setup" fill className="object-cover" />
                </div>
              </div>
              <div className="flex flex-col justify-between border border-border bg-[#120d0b] p-6">
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-accent">On the floor</p>
                <p className="editorial-title mt-4 text-3xl text-ink md:text-5xl">From coffee to club mood.</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  The room shifts from daytime records and conversation to evening sessions, where sound, drinks and people meet in one shared flow.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-border bg-[#120d0b] p-6 md:p-8">
            <p className="text-[0.62rem] uppercase tracking-[0.22em] text-accent">The four worlds</p>
            <div className="mt-5 space-y-5">
              {previews.slice(0, 4).map((preview) => (
                <article key={preview.href} className="group border-t border-border pt-4 first:border-t-0 first:pt-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.62rem] uppercase tracking-[0.2em] text-ink-muted">{preview.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{preview.body}</p>
                    </div>
                    <ButtonLink href={preview.href} variant="ghost">
                      View
                    </ButtonLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-6 md:px-8">
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="image-card relative min-h-[24rem] overflow-hidden">
            <Image src="/images/venueOutisde.png" alt="Exterior of Soul 45 on Newland Avenue" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 max-w-md p-6 md:p-8">
              <p className="text-[0.62rem] uppercase tracking-[0.22em] text-accent">Featured experience</p>
              <h2 className="editorial-title mt-3 text-4xl text-ink md:text-6xl">Built for listening.</h2>
            </div>
          </div>

          <div className="border border-border bg-[#120d0b] p-6 md:p-8">
            <p className="text-[0.62rem] uppercase tracking-[0.22em] text-accent">At Soul 45</p>
            <p className="editorial-title mt-4 text-4xl text-ink md:text-5xl">Intentional sound. Human pace.</p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              The venue sits between quiet focus and lively social rhythm, always with the music at the centre of the room.
            </p>
            <ul className="mt-6 space-y-3 text-sm uppercase tracking-[0.18em] text-ink-muted">
              <li>Vinyl-led sets</li>
              <li>Selector culture</li>
              <li>Independent record shop</li>
              <li>Warm cafe and bar energy</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Programme</p>
            <h2 className="editorial-title mt-4 text-4xl text-ink md:text-5xl">Upcoming sessions</h2>
          </div>
          <ButtonLink href="/events" variant="ghost">
            All Events
          </ButtonLink>
        </div>
        <EventGrid events={events.slice(0, 3)} />
      </section>

      <DraughtSection />

      <LocationSection />

      <GoogleReviewsSection compact />

      <CtaSection
        title="Come for the records. Stay for the sound."
        body="Soul 45 is built for people who care about music culture, listening spaces and inclusive community energy."
        primaryLabel="Plan A Visit"
        primaryHref="/visit"
        secondaryLabel="About Soul 45"
        secondaryHref="/about"
      />
    </>
  );
}
