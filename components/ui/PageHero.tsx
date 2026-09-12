import ProductMedia from '@/components/ProductMedia';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  align?: 'left' | 'center';
}

export default function PageHero({ eyebrow, title, description, image, align = 'center' }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0">
        <ProductMedia src={image} className="h-full w-full" />
        <div className="absolute inset-0 bg-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
      </div>
      <div className={`container relative ${align === 'center' ? 'max-w-3xl text-center' : 'max-w-3xl text-left'} ${align === 'center' ? 'mx-auto' : ''}`}>
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sand">
          {eyebrow}
        </span>
        <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl [text-shadow:0_2px_16px_rgba(0,0,0,0.3)]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
