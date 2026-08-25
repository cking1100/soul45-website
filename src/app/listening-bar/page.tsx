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
        title="Listen properly."
        intro="Soul 45 is one open room built around focused listening: vinyl on turntables, selectors on rotation and a setup tuned for detail, warmth and connection."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-14 md:grid-cols-[1.2fr_0.8fr] md:px-8">
        <article className="image-card relative min-h-[30rem] overflow-hidden">
          <Image src="/images/gallery-dj.svg" alt="Turntables and DJ setup" fill className="object-cover" />
        </article>

        <article className="border border-border bg-[#120d0b] p-6 md:p-8">
          <p className="eyebrow">Atmosphere and sound</p>
          <h2 className="editorial-title mt-4 text-4xl text-ink md:text-5xl">A room tuned for detail.</h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Sessions flow through jazz, soul, funk, disco, house and electronic records. The energy shifts by hour,
            from reflective daytime selections to rhythmic evening movement.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            The listening bar format puts attention back on records, transitions and texture. You hear intent in the
            sequencing, the room and the people around you.
          </p>
          <ul className="mt-6 grid gap-2 text-[0.68rem] uppercase tracking-[0.2em] text-ink-muted md:grid-cols-2">
            <li>Vinyl-first sets</li>
            <li>Turntable culture</li>
            <li>Selector-led sessions</li>
            <li>Calm listening</li>
          </ul>
        </article>
      </section>

      <CtaSection
        title="See upcoming sessions"
        body="Soul 45 event formats are updated as new sessions are confirmed."
        primaryLabel="Browse Events"
        primaryHref="/events"
        secondaryLabel="Record Shop"
        secondaryHref="/records"
      />
    </>
  );
}
