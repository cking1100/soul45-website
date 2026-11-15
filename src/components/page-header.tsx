type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  intro: string;
};

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="page-shell relative overflow-hidden">
      <div className="noise-layer" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-12 md:px-8 md:py-14">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="editorial-title max-w-4xl text-5xl text-ink md:text-7xl">{title}</h1>
        <p className="max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">{intro}</p>
      </div>
    </section>
  );
}
