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
    <section className="mx-auto my-14 w-full max-w-7xl border border-border bg-[#120d0b] px-4 py-10 md:px-8">
      <div className="grid gap-7 md:grid-cols-[1.2fr_auto] md:items-end">
        <div>
          <p className="eyebrow">Join the session</p>
          <h2 className="editorial-title mt-4 text-4xl text-ink md:text-5xl">{title}</h2>
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
