import Link from "next/link";

import {
  ADDRESS_LINES,
  BUSINESS_FULL_NAME,
  CONTACT_NOTE,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  OPENING_HOURS_NOTE,
} from "@/lib/site";

const MAP_QUERY = "Soul 45, 45 Newland Ave, Hull HU5 3BE";

export function LocationSection() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-14 md:grid-cols-2 md:px-8">
      <article className="rounded-3xl border border-border bg-panel p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.16em] text-accent">Visit Us</p>
        <h2 className="mt-3 font-display text-4xl leading-none tracking-[0.04em] text-ink">{BUSINESS_FULL_NAME}</h2>
        <address className="mt-5 not-italic text-base leading-relaxed text-ink-soft">
          {ADDRESS_LINES.map((line) => (
            <div key={line}>{line}</div>
          ))}
        </address>
        <p className="mt-6 text-sm text-ink-soft">{OPENING_HOURS_NOTE}</p>
        <p className="mt-3 text-sm text-ink-soft">{CONTACT_NOTE}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`https://maps.google.com/?q=${encodeURIComponent(MAP_QUERY)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full bg-accent px-4 py-2 text-xs uppercase tracking-[0.14em] text-black transition hover:bg-accent-2"
          >
            Open Map
          </Link>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-full border border-border px-4 py-2 text-xs uppercase tracking-[0.14em] text-ink-soft transition hover:border-accent hover:text-accent"
          >
            {INSTAGRAM_HANDLE}
          </Link>
        </div>
      </article>

      <article className="overflow-hidden rounded-3xl border border-border bg-panel p-3">
        <iframe
          title="Soul 45 map"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
          loading="lazy"
          className="h-full min-h-80 w-full rounded-2xl border-0"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </article>
    </section>
  );
}
