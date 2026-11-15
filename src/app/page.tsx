import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { DraughtSection } from "@/components/draught-section";
import { EventGrid } from "@/components/event-grid";
import { OpeningHours } from "@/components/opening-hours";
import { SplashSection } from "@/components/splash-section";
import { getUpcomingEvents } from "@/lib/events";
import { ADDRESS_LINES } from "@/lib/site";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Home",
  description:
    "Soul 45 is Hull's first vinyl cafe, bar and record shop - a music-first destination for listening culture, records and community.",
};

export default function HomePage() {
  return (
    <>
      <SplashSection />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Welcome to Soul 45</p>
          <h2 className="editorial-title mt-4 text-4xl text-ink md:text-5xl">Records, drinks and good music.</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            A listening bar and record shop in Hull, bringing people together over jazz, funk, soul, disco, house and electronic music.
          </p>
        </div>
        <ButtonLink href="/about" variant="ghost">More about Soul 45</ButtonLink>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-14 md:px-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">What&apos;s on</p>
            <h2 className="editorial-title mt-4 text-4xl text-ink md:text-5xl">Upcoming sessions</h2>
          </div>
          <ButtonLink href="/events" variant="ghost">All events</ButtonLink>
        </div>
        <EventGrid events={getUpcomingEvents().slice(0, 3)} />
      </section>

      <DraughtSection />

      <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="eyebrow">Find us</p>
          <h2 className="editorial-title mt-4 text-4xl text-ink md:text-5xl">Visit Soul 45</h2>
          <p className="mt-4 text-base text-ink-soft">{ADDRESS_LINES.join(", ")}</p>
          <OpeningHours />
        </div>
        <ButtonLink href="/visit" variant="ghost">Plan your visit</ButtonLink>
      </section>
    </>
  );
}
