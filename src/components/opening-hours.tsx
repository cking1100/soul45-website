"use client";

import { useEffect, useState } from "react";

import { formatOpeningTime, getOpeningStatus, OPENING_HOURS } from "@/lib/opening-hours";

export function OpeningStatus({ featured = false }: { featured?: boolean }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const timer = window.setInterval(update, 1000);
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") update();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  const status = now ? getOpeningStatus(now) : null;

  return (
    <p
      className={featured
        ? "inline-flex flex-wrap items-center gap-x-2 gap-y-1 rounded-full border border-accent/40 bg-black/70 px-4 py-2 text-sm text-ink-soft"
        : "text-sm text-ink-soft"}
      aria-live="polite"
    >
      {status ? (
        <>
          {featured ? (
            <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${status.isOpen ? "bg-green-300" : "bg-accent"}`} />
          ) : null}
          <span className={status.isOpen ? "font-semibold text-green-300" : "font-semibold text-ink"}>
            {status.isOpen ? "Open now" : "Closed now"}
          </span>
          {" "}<span aria-hidden="true">·</span>{" "}
          <span>{status.detail}</span>
        </>
      ) : "Times shown in UK local time"}
    </p>
  );
}

export function OpeningHours() {
  return (
    <div className="mt-6">
      <h3 className="text-xs uppercase tracking-[0.16em] text-accent">Opening hours</h3>
      <div className="mt-3"><OpeningStatus /></div>
      <dl className="mt-4 max-w-sm space-y-1.5 text-sm text-ink-soft">
        {OPENING_HOURS.map(({ day, openMinutes }) => (
          <div key={day} className="flex justify-between gap-6">
            <dt>{day}</dt>
            <dd>{openMinutes === null ? "Closed" : `${formatOpeningTime(openMinutes)} – 12am`}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-xs text-ink-muted">Regular hours, UK local time. Hours may change.</p>
    </div>
  );
}
