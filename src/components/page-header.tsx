type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  intro: string;
};

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="noise-layer" />
      <div className="mx-auto w-full max-w-7xl px-4 py-16 md:px-8 md:py-20">
        {eyebrow ? <p className="text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p> : null}
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[0.92] tracking-[0.04em] text-ink md:text-7xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">{intro}</p>
      </div>
    </section>
  );
}
