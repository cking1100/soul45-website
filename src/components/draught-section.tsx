import Image from "next/image";
import Link from "next/link";

import { DRAUGHT_MENU, type MenuItem } from "@/lib/site";

function drinkLabel(item: MenuItem) {
  const qualifierStart = item.name.indexOf(" (");

  if (qualifierStart === -1) {
    return { name: item.name, qualifier: null };
  }

  return {
    name: item.name.slice(0, qualifierStart),
    qualifier: item.name.slice(qualifierStart + 2, -1),
  };
}

function DraughtItem({ item }: { item: MenuItem }) {
  const label = drinkLabel(item);

  return (
    <li className="group overflow-hidden border border-border bg-panel">
      {item.image ? (
        <div className="relative aspect-[4/3] border-b border-border bg-[#0b0907] p-5 md:p-7">
          <Image
            src={item.image}
            alt={item.imageAlt ?? item.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-contain p-5 transition duration-700 ease-out group-hover:scale-105 md:p-7"
            style={{ objectPosition: item.imagePosition }}
          />
        </div>
      ) : null}
      <div className="flex min-h-28 flex-col justify-between p-4 md:p-5">
        <div>
          <p className="text-[0.56rem] uppercase tracking-[0.2em] text-accent">On draught</p>
          <h3 className="editorial-title mt-2 text-3xl text-ink md:text-4xl">{label.name}</h3>
        </div>
        <p className="mt-3 text-sm uppercase tracking-[0.14em] text-ink-soft">
          {label.qualifier ? `${label.qualifier} — ` : ""}{item.price}
        </p>
      </div>
    </li>
  );
}

export function DraughtSection() {
  return (
    <section aria-labelledby="on-draught-title" className="border-y border-border bg-[#100c0a]">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="catalog-label">Soul 45 / Bar</p>
            <h2 id="on-draught-title" className="editorial-title mt-4 text-5xl text-ink md:text-7xl">On Draught</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft md:text-right">
            Four taps, poured in the room where the records turn.
          </p>
        </div>

        <ul className="grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {DRAUGHT_MENU.map((item) => <DraughtItem key={item.name} item={item} />)}
        </ul>

        <div className="mt-8 flex justify-end border-t border-border pt-5">
          <Link href="/drinks" className="group inline-flex items-center gap-3 text-[0.66rem] uppercase tracking-[0.2em] text-ink-soft transition hover:text-accent">
            View full drinks menu <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">-&gt;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}