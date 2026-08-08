import type { EventEntry } from "@/lib/events";
import { EventCard } from "./event-card";

type EventGridProps = {
  events: EventEntry[];
};

export function EventGrid({ events }: EventGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {events.map((event) => (
        <EventCard key={event.slug} event={event} />
      ))}
    </div>
  );
}
