"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { INSTAGRAM_URL, NAV_ITEMS } from "@/lib/site";
import { InstagramIcon } from "./instagram-icon";

export function MobileMenu() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        ref={menuButtonRef}
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-panel text-ink transition hover:border-accent hover:text-accent"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label="Toggle navigation menu"
      >
        <span className="sr-only">Menu</span>
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
          <span
            className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </span>
      </button>

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        hidden={!open}
        className={`absolute left-4 right-4 top-[4.6rem] z-40 rounded-3xl border border-border bg-black/95 p-5 backdrop-blur transition ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-3">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2 text-sm tracking-[0.08em] transition ${
                  isActive ? "bg-accent text-black" : "text-ink-muted hover:bg-panel hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center gap-2 rounded-xl border border-border px-3 py-2 text-sm tracking-[0.08em] text-ink-muted transition hover:border-accent hover:text-accent"
          >
            <InstagramIcon className="h-4 w-4" />
            Instagram
          </Link>
        </nav>
      </div>
    </div>
  );
}
