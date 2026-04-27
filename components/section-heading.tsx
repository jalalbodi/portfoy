type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[color-mix(in_srgb,var(--foreground)_70%,transparent)] md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
