import Link from "next/link";

import {
  ADDRESS_LINES,
  BUSINESS_FULL_NAME,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  NAV_ITEMS,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-black/60">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <h2 className="font-display text-2xl tracking-[0.15em] text-ink">SOUL 45</h2>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">{BUSINESS_FULL_NAME}</p>
          <p className="mt-4 text-sm text-ink-soft">{ADDRESS_LINES.join(", ")}</p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-ink">Explore</h3>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-ink-soft">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] text-ink">Follow</h3>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex rounded-full border border-border px-4 py-2 text-sm text-ink-soft transition hover:border-accent hover:text-accent"
          >
            {INSTAGRAM_HANDLE}
          </Link>
          <p className="mt-6 text-xs uppercase tracking-[0.16em] text-ink-muted">Music first. Always.</p>
        </div>
      </div>
    </footer>
  );
}
