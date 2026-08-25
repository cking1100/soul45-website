import Image from "next/image";

import {
  DRAUGHT_MENU,
  PROSECCO_MENU,
  SOFT_DRINKS_MENU,
  SPIRIT_MIXER_MENU,
  SPIRITS_MENU,
  WINE_COLLECTIONS,
} from "@/lib/site";

type MenuListProps = {
  items: { name: string; price: string }[];
};

function MenuList({ items }: MenuListProps) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <li key={item.name} className="flex min-h-12 items-center justify-between gap-4 py-3 text-sm text-ink-soft">
          <span>{item.name}</span>
          <span className="shrink-0 font-medium text-ink">{item.price}</span>
        </li>
      ))}
    </ul>
  );
}

function MenuSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-5" aria-labelledby={`menu-${number}`}>
      <div className="mb-5 flex items-baseline justify-between gap-4">
        <h3 id={`menu-${number}`} className="font-display text-3xl tracking-[0.04em] text-ink md:text-4xl">
          {title}
        </h3>
        <span className="text-[0.56rem] uppercase tracking-[0.2em] text-accent">{number} / Soul 45</span>
      </div>
      {children}
    </section>
  );
}

function WineCollection({ collection }: { collection: (typeof WINE_COLLECTIONS)[number] }) {
  return (
    <article className="border-t border-border pt-4 first:border-t-0 first:pt-0">
      <h4 className="text-[0.64rem] uppercase tracking-[0.2em] text-accent">{collection.name}</h4>
      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-soft">
        {collection.wines.map((wine) => <li key={wine}>{wine}</li>)}
      </ul>
      <dl className="mt-4 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
        {collection.servings.map((serving) => (
          <div key={serving.name} className="bg-panel px-3 py-3">
            <dt className="text-[0.56rem] uppercase tracking-[0.16em] text-ink-muted">{serving.name}</dt>
            <dd className="mt-1 text-sm text-ink">{serving.price}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function DrinksMenu() {
  return (
    <section aria-labelledby="drinks-menu-title" className="relative overflow-hidden border-y border-border bg-panel/60">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="mb-10 border-b border-border pb-6">
          <div>
            <p className="catalog-label">Soul 45 / Menu 01</p>
            <h1 id="drinks-menu-title" className="editorial-title mt-4 text-6xl text-ink md:text-8xl">Drinks</h1>
          </div>
        </div>

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
          <MenuSection number="A1" title="Draught"><DraughtList /></MenuSection>
          <MenuSection number="A2" title="Spirits"><MenuList items={SPIRITS_MENU} /></MenuSection>
          <MenuSection number="B1" title="Spirit & Mixer">
            <MenuList items={[SPIRIT_MIXER_MENU.item]} />
            <h4 className="mt-5 text-[0.62rem] uppercase tracking-[0.2em] text-accent">Mixer choices</h4>
            <ul className="mt-3 grid grid-cols-2 gap-x-5 gap-y-2 text-sm text-ink-soft sm:grid-cols-3">
              {SPIRIT_MIXER_MENU.mixerChoices.map((choice) => <li key={choice}>{choice}</li>)}
            </ul>
          </MenuSection>
          <MenuSection number="B2" title="Wine">
            <div className="space-y-5"><WineCollection collection={WINE_COLLECTIONS[0]} /><WineCollection collection={WINE_COLLECTIONS[1]} /></div>
          </MenuSection>
          <MenuSection number="C1" title="Prosecco">
            <p className="text-sm text-ink-soft">{PROSECCO_MENU.name}</p>
            <dl className="mt-4 grid grid-cols-2 gap-px border border-border bg-border">
              {PROSECCO_MENU.servings.map((serving) => (
                <div key={serving.name} className="bg-panel px-3 py-3"><dt className="text-[0.56rem] uppercase tracking-[0.16em] text-ink-muted">{serving.name}</dt><dd className="mt-1 text-sm text-ink">{serving.price}</dd></div>
              ))}
            </dl>
          </MenuSection>
          <MenuSection number="C2" title="Soft Drinks"><MenuList items={SOFT_DRINKS_MENU} /></MenuSection>
        </div>
      </div>
    </section>
  );
}

function DraughtList() {
  return (
    <ul className="grid list-none gap-4 p-0 sm:auto-rows-fr sm:grid-cols-2">
      {DRAUGHT_MENU.map((item) => {
        const qualifierStart = item.name.indexOf(" (");
        const name = qualifierStart === -1 ? item.name : item.name.slice(0, qualifierStart);
        const qualifier = qualifierStart === -1 ? null : item.name.slice(qualifierStart + 2, -1);

        return (
          <li key={item.name} className="overflow-hidden border border-border bg-[#0b0907]">
            <div className="relative aspect-[4/3] border-b border-border bg-panel p-4 sm:p-5">
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.imageAlt ?? name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-contain p-5 sm:p-7"
                />
              ) : null}
            </div>
            <div className="flex min-h-28 flex-col justify-between p-4 sm:p-5">
              <div>
                <p className="text-[0.56rem] uppercase tracking-[0.2em] text-accent">Draught</p>
                <h4 className="mt-2 font-display text-3xl leading-none tracking-[0.04em] text-ink">{name}</h4>
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.14em] text-ink-soft">
                {qualifier ? `${qualifier} — ` : null}{item.price}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}