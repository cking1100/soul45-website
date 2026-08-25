import Image from "next/image";
import Link from "next/link";

import type { EventEntry } from "@/lib/events";

type EventCardProps = {
  event: EventEntry;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="group image-card flex h-full flex-col overflow-hidden bg-panel/80 transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/5] overflow-hidden border-b border-border bg-black/30">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <p className="absolute left-4 top-4 bg-black/70 px-2 py-1 text-[0.56rem] uppercase tracking-[0.2em] text-ink">
          Soul 45 / Programme
        </p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-center justify-between gap-3 border-b border-border pb-3">
          <div>
            <p className="metadata-label">Date</p>
            <p className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-accent">{event.dateLabel}</p>
          </div>
          {event.isPlaceholder ? (
            <span className="text-[0.56rem] uppercase tracking-[0.18em] text-ink-muted">Template</span>
          ) : null}
        </div>

        <div className="space-y-3">
          <h3 className="editorial-title text-3xl text-ink md:text-[2.2rem]">{event.title}</h3>
          <div className="grid grid-cols-2 gap-3 border-y border-border py-3">
            <div>
              <p className="metadata-label">Time</p>
              <p className="mt-1 text-[0.6rem] uppercase tracking-[0.16em] text-ink-muted">{event.timeLabel}</p>
            </div>
            <div>
              <p className="metadata-label">Artist</p>
              <p className="mt-1 text-[0.6rem] uppercase tracking-[0.12em] text-ink-muted">{event.artistsLabel}</p>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-ink-soft">{event.summary}</p>

        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/events/${event.slug}`}
              className="inline-flex border border-border px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.18em] text-ink-soft transition hover:border-accent hover:text-accent"
            >
              Details
            </Link>
            {event.ticketUrl ? (
              <Link
                href={event.ticketUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex bg-accent px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.18em] text-black transition hover:bg-accent-2"
              >
                Tickets
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
