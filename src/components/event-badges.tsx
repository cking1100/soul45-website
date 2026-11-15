import type { EventEntry } from "@/lib/events";

export function EventBadges({ event }: { event: EventEntry }) {
  const labels = [
    ...(event.isResidency ? ["Residency"] : []),
    ...(event.recurrence?.cadence === "weekly" ? ["Weekly"] : []),
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {labels.map((label) => (
        <span key={label} className="inline-flex items-center gap-2 border border-accent bg-[#120e0c] px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-accent-2">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          {label}
        </span>
      ))}
    </div>
  );
}
