import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/page-header";
import { events, getEventBySlug } from "@/lib/events";

type EventDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: event.title,
    description: event.summary,
  };
}

export default async function EventDetailPage({ params }: EventDetailPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <>
      <PageHeader eyebrow="Event Detail" title={event.title} intro={event.summary} />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-12 md:grid-cols-2 md:px-8">
        <article className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-black/30">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-3"
          />
        </article>

        <article className="rounded-3xl border border-border bg-panel p-6 md:p-8">
          <h2 className="font-display text-4xl tracking-[0.04em] text-ink">Event Information</h2>
          <dl className="mt-5 space-y-3 text-sm text-ink-soft">
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-accent">Date</dt>
              <dd>{event.dateLabel}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-accent">Time</dt>
              <dd>{event.timeLabel}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-accent">DJs / Artists</dt>
              <dd>{event.artistsLabel}</dd>
            </div>
          </dl>

          {event.isPlaceholder ? (
            <p className="mt-6 rounded-2xl border border-border bg-black/35 p-4 text-sm leading-relaxed text-ink-soft">
              This listing is a non-live template to demonstrate the production event architecture. Replace it with
              confirmed Soul 45 event details when available.
            </p>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/events"
              className="inline-flex rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.14em] text-ink-soft transition hover:border-accent hover:text-accent"
            >
              Back To Events
            </Link>
            {event.ticketUrl ? (
              <Link
                href={event.ticketUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-accent px-4 py-2 text-xs uppercase tracking-[0.14em] text-black transition hover:bg-accent-2"
              >
                Tickets
              </Link>
            ) : null}
          </div>
        </article>
      </section>
    </>
  );
}
