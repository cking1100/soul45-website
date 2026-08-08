import { ButtonLink } from "./button-link";

type CtaSectionProps = {
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function CtaSection({
  title,
  body,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaSectionProps) {
  return (
    <section className="mx-auto my-14 w-full max-w-7xl rounded-3xl border border-border bg-panel px-4 py-10 md:px-8">
      <div className="grid gap-7 md:grid-cols-[1.2fr_auto] md:items-end">
        <div>
          <h2 className="font-display text-4xl tracking-[0.04em] text-ink md:text-5xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink>
          {secondaryLabel && secondaryHref ? (
            <ButtonLink href={secondaryHref} variant="ghost">
              {secondaryLabel}
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
