import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Instagram",
  description: "Follow Soul 45 on Instagram for venue updates, event announcements and atmosphere snapshots.",
};

export default function InstagramPage() {
  return (
    <>
      <PageHeader
        eyebrow="Instagram"
        title={INSTAGRAM_HANDLE}
        intro="Soul 45 updates, announcements and visual moments live on Instagram."
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
        <article className="relative overflow-hidden rounded-3xl border border-border bg-panel p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(158,93,55,0.35),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(115,42,38,0.28),transparent_40%)]" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Official Account</p>
            <h2 className="mt-4 font-display text-5xl tracking-[0.04em] text-ink md:text-7xl">{INSTAGRAM_HANDLE}</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
              Instagram is the primary channel for latest updates from Soul 45, including event announcements, venue
              atmosphere and day-to-day moments.
            </p>
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-xs uppercase tracking-[0.16em] text-black transition hover:bg-accent-2"
            >
              Open Instagram
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
