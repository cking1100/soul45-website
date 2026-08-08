import Image from "next/image";

import { ButtonLink } from "@/components/button-link";

export function SplashSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="noise-layer" />
      <Image
        src="/images/venue.png"
        alt="Soul 45 interior"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/65 to-black/90" />

      <div className="mx-auto flex min-h-[72vh] w-full max-w-7xl items-end px-4 py-16 md:px-8 md:py-24">
        <div className="reveal-up max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] text-accent">Hull&apos;s Vinyl Listening Culture</p>
          <h1 className="mt-4 font-display text-6xl leading-[0.9] tracking-[0.03em] text-ink md:text-8xl">SOUL 45</h1>
          <p className="mt-6 text-base leading-relaxed text-ink-soft md:text-lg">
            A listening bar, record shop and cafe built around community, selectors and deep grooves.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/events">See What&apos;s On</ButtonLink>
            <ButtonLink href="/about" variant="ghost">
              Our Story
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
