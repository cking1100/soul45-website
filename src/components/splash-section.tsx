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
        className="-z-20 object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(9,8,6,0.42),rgba(9,8,6,0.82)_55%,rgba(9,8,6,0.95))]" />

      <div className="mx-auto flex min-h-[78vh] w-full max-w-7xl items-end px-4 py-16 md:px-8 md:py-20">
        <div className="reveal-up max-w-4xl">
          <p className="eyebrow text-accent">Hull’s vinyl listening culture</p>
          <div className="mt-5 flex flex-col gap-2 md:gap-3">
            <h1 className="editorial-title text-6xl text-ink md:text-8xl lg:text-[8rem]">SOUL 45</h1>
            <p className="text-[0.72rem] uppercase tracking-[0.35em] text-ink-soft md:text-base">
              Listening Bar · Record Shop · Drinks + Bar · Hull
            </p>
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            A warm room for records, selectors, conversation and late-night listening.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/events">See What&apos;s On</ButtonLink>
            <ButtonLink href="/about" variant="ghost">
              Our Story
            </ButtonLink>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="text-[0.6rem] uppercase tracking-[0.28em] text-ink-muted">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-ink-soft to-transparent" />
      </div>
    </section>
  );
}
