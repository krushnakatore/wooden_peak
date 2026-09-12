import Image from 'next/image';
import clsx from 'clsx';
import PlaceholderImage, { PlaceholderVariant } from '@/components/PlaceholderImage';

interface ProductMediaProps {
  /** Either a real image path (starting with "/") or a PlaceholderVariant key */
  src: string;
  label?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function ProductMedia({ src, label, className, sizes, priority }: ProductMediaProps) {
  if (src.startsWith('/')) {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={src}
          alt={label ?? 'MeaningWood Crafts product photo'}
          fill
          sizes={sizes ?? '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'}
          priority={priority}
          className={clsx('object-cover', className)}
        />
      </div>
    );
  }

  return (
    <PlaceholderImage variant={src as PlaceholderVariant} label={label} className={className} />
  );
}
