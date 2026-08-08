import type { Metadata } from "next";
import Image from "next/image";

import { CtaSection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Listening Bar",
  description:
    "Experience Soul 45's listening bar culture through vinyl-led sessions, deep sound and carefully curated atmosphere.",
};

export default function ListeningBarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Listening Bar"
        title="LISTEN PROPERLY."
        intro="Soul 45 is one open room built around focused listening: vinyl on turntables, selectors on rotation and a setup tuned for detail, warmth and connection."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-14 md:grid-cols-2 md:px-8">
        <article className="relative min-h-[28rem] overflow-hidden rounded-3xl border border-border">
          <Image src="/images/gallery-dj.svg" alt="Turntables and DJ setup" fill className="object-cover" />
        </article>

        <article className="rounded-3xl border border-border bg-panel p-6 md:p-8">
          <h2 className="font-display text-4xl tracking-[0.04em] text-ink md:text-5xl">Atmosphere And Sound</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Sessions flow through jazz, soul, funk, disco, house and electronic records. The energy shifts by hour,
            from reflective daytime selections to rhythmic evening movement.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            The listening bar format puts attention back on records, transitions and texture. You hear intent in the
            sequencing, the room and the people around you.
          </p>
          <ul className="mt-6 grid gap-2 text-sm uppercase tracking-[0.14em] text-ink-muted md:grid-cols-2">
            <li>Vinyl-First Sets</li>
            <li>Turntable Culture</li>
            <li>Selector-Led Sessions</li>
            <li>Calm, Intentional Listening</li>
          </ul>
        </article>
      </section>

      <CtaSection
        title="See Upcoming Sessions"
        body="Soul 45 event formats are updated as new sessions are confirmed."
        primaryLabel="Browse Events"
        primaryHref="/events"
        secondaryLabel="Record Shop"
        secondaryHref="/records"
      />
    </>
  );
}
