import type { EventEntry } from "@/lib/events";
import { EventCard } from "./event-card";

type EventGridProps = {
  events: EventEntry[];
};

export function EventGrid({ events }: EventGridProps) {
  if (events.length === 0) {
    return (
      <div className="border border-dashed border-border bg-panel p-8 text-center">
        <p className="font-display text-3xl text-ink">New sessions are being lined up.</p>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-soft">
          Follow Soul 45 on Instagram for the next event announcement.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
      {events.map((event, index) => (
        <div
          key={event.slug}
          className={index % 2 === 1 ? "md:translate-y-8" : ""}
        >
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
}
