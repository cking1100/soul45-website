import Image from "next/image";
import Link from "next/link";

import { INSTAGRAM_URL, LOGO_SRC, NAV_ITEMS } from "@/lib/site";
import { InstagramIcon } from "./instagram-icon";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link href="/" className="group inline-flex items-center gap-3 leading-none">
          <Image
            src={LOGO_SRC}
            alt="Soul 45 logo"
            width={225}
            height={225}
            className="h-11 w-11 shrink-0 rounded-md border border-border/80 bg-black/40 p-1 object-contain"
            priority
          />
          <span className="inline-flex flex-col">
            <span className="font-display text-2xl tracking-[0.18em] text-ink transition group-hover:text-accent">SOUL 45</span>
            <span className="text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">Listening Bar . Record Shop . Cafe</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.12em] text-ink-muted transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-ink-muted transition hover:border-accent hover:text-accent"
            aria-label="Soul 45 Instagram"
          >
            <InstagramIcon className="h-4 w-4" />
            IG
          </Link>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
