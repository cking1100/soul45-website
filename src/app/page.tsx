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

const draughtBeers = [
  {
    name: "Kasteel Rouge",
    style: "Belgian Red",
    price: "£5.50",
    abv: "8%",
    note: "Fruity Finish",
    logo: "/images/kasteel-rouge.jpg",
  },
  {
    name: "Guinness",
    style: "Stout",
    price: "£5.75",
    abv: "4.1%",
    note: "Superior Quality",
    logo: "/images/Guinness.jpg",
  },
  {
    name: "Velvet Stout",
    style: "Dark Porter",
    price: "£6.80",
    abv: "5.8%",
    note: "Smooth finish",
    logo: "/images/kasteel-rouge.png",
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
        <div className="rounded-[1.75rem] border border-border bg-[linear-gradient(135deg,rgba(206,141,79,0.16),rgba(9,8,6,0.95))] p-5 md:p-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-[0.66rem] uppercase tracking-[0.24em] text-accent">On Draught</p>
              <h2 className="mt-1 font-display text-3xl tracking-[0.04em] text-ink md:text-4xl">
                Fresh pours for the night
              </h2>
            </div>
            <div className="rounded-full border border-accent/40 bg-black/25 px-2.5 py-1 text-[0.62rem] uppercase tracking-[0.2em] text-ink-soft">
              Whats on Tap?
            </div>
          </div>

          <div className="mt-4 grid gap-3 xl:grid-cols-3">
            {draughtBeers.map((beer) => (
              <article
                key={beer.name}
                className="rounded-[1.25rem] border border-border/70 bg-panel/80 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[1rem] border border-border/80 bg-black/40 p-2">
                      <Image
                        src={beer.logo}
                        alt={`${beer.name} logo`}
                        fill
                        sizes="96px"
                        className="object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.58rem] uppercase tracking-[0.2em] text-accent">On tap</p>
                      <h3 className="mt-1.5 font-display text-xl tracking-[0.04em] text-ink">{beer.name}</h3>
                      <p className="mt-1 text-sm text-ink-soft">
                        <span>{beer.style}</span>
                        <span className="mx-1 text-accent">·</span>
                        <span>{beer.note}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-3 text-right">
                    <div>
                      <p className="text-[0.58rem] uppercase tracking-[0.2em] text-ink-muted">Price</p>
                      <p className="mt-1 text-sm font-semibold text-ink">{beer.price}</p>
                    </div>
                    <div>
                      <p className="text-[0.58rem] uppercase tracking-[0.2em] text-ink-muted">ABV</p>
                      <p className="mt-1 text-sm font-semibold text-ink">{beer.abv}</p>
                    </div>
                  </div>
                </div>

              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-6 md:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl tracking-[0.04em] text-ink md:text-5xl">Upcoming Events</h2>
          <ButtonLink href="/events" variant="ghost">
            All Events
          </ButtonLink>
        </div>
        <EventGrid events={events.slice(0, 3)} />
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
