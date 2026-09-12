import clsx from 'clsx';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        'max-w-2xl',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            'mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em]',
            light ? 'text-sand' : 'text-seagreen'
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          'font-serif text-3xl leading-tight sm:text-4xl',
          light ? 'text-white' : 'text-ink'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            'mt-4 text-base leading-relaxed sm:text-lg',
            light ? 'text-sand-light/90' : 'text-ink-light'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
