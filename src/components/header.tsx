import Image from "next/image";
import Link from "next/link";

import { INSTAGRAM_URL, LOGO_SRC, NAV_ITEMS } from "@/lib/site";
import { ActiveNavLink } from "./active-nav-link";
import { InstagramIcon } from "./instagram-icon";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#0b0907]/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/" className="group inline-flex items-center gap-3 leading-none">
          <Image
            src={LOGO_SRC}
            alt="Soul 45 logo"
            width={200}
            height={200}
            className="h-11 w-11 shrink-0 rounded-md border border-border bg-[#1b1411] p-1 object-contain shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            priority
          />
          <span className="inline-flex flex-col">
            <span className="font-display text-[1.3rem] tracking-[0.18em] text-ink transition group-hover:text-accent">
              SOUL 45
            </span>
            <span className="text-[0.56rem] uppercase tracking-[0.26em] text-ink-soft">
              Listening Bar · Record Shop · Drinks
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-4 lg:flex">
          {NAV_ITEMS.map((item) => (
            <ActiveNavLink key={item.href} href={item.href}>
              {item.label}
            </ActiveNavLink>
          ))}
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.18em] text-ink-muted transition hover:border-accent hover:text-accent"
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
