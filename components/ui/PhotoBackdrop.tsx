import ProductMedia from '@/components/ProductMedia';

interface PhotoBackdropProps {
  image: string;
  /** Tailwind classes for the color wash sitting over the photo — tune per section for text contrast */
  overlayClassName?: string;
}

export default function PhotoBackdrop({ image, overlayClassName }: PhotoBackdropProps) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <ProductMedia src={image} className="h-full w-full" />
      <div className={overlayClassName ?? 'absolute inset-0 bg-ink/55'} />
    </div>
  );
}
