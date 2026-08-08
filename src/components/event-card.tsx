import Image from "next/image";
import Link from "next/link";

import type { EventEntry } from "@/lib/events";

type EventCardProps = {
  event: EventEntry;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-panel transition hover:-translate-y-1 hover:border-accent/70">
      <div className="relative aspect-[3/4] overflow-hidden border-b border-border bg-black/30">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-2 transition duration-700 group-hover:scale-[1.02]"
        />
      </div>
      <div className="space-y-3 p-5">
        {event.isPlaceholder ? (
          <span className="inline-block rounded-full border border-border px-3 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-ink-muted">
            Planning Template
          </span>
        ) : null}
        <h3 className="font-display text-3xl leading-none tracking-[0.04em] text-ink">{event.title}</h3>
        <dl className="space-y-1 text-sm text-ink-soft">
          <div>
            <dt className="sr-only">Date</dt>
            <dd>{event.dateLabel}</dd>
          </div>
          <div>
            <dt className="sr-only">Time</dt>
            <dd>{event.timeLabel}</dd>
          </div>
          <div>
            <dt className="sr-only">Artists</dt>
            <dd>{event.artistsLabel}</dd>
          </div>
        </dl>
        <p className="text-sm leading-relaxed text-ink-soft">{event.summary}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex rounded-full border border-border px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft transition hover:border-accent hover:text-accent"
          >
            Event Details
          </Link>
          {event.ticketUrl ? (
            <Link
              href={event.ticketUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-accent px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.16em] text-black transition hover:bg-accent-2"
            >
              Tickets
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
