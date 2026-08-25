type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  intro: string;
};

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="page-shell relative overflow-hidden">
      <div className="noise-layer" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-16 md:px-8 md:py-20">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
          <p className="catalog-label">Soul 45 / Hull</p>
          <p className="text-[0.56rem] uppercase tracking-[0.2em] text-ink-muted">01 / {eyebrow ?? "Edition"}</p>
        </div>
        {eyebrow ? <p className="eyebrow mt-3">{eyebrow}</p> : null}
        <div className="grid gap-6 md:grid-cols-[1.5fr_0.7fr] md:items-end">
          <h1 className="editorial-title max-w-4xl text-5xl text-ink md:text-7xl lg:text-[5.2rem]">{title}</h1>
          <p className="max-w-md justify-self-end text-sm uppercase tracking-[0.18em] text-ink-muted md:text-right">
            Music first. Always.
          </p>
        </div>
        <div className="editorial-rule max-w-3xl" />
        <p className="max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">{intro}</p>
      </div>
    </section>
  );
}
