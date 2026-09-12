import { Anchor, Gift, Home, Compass, HeartHandshake, UtensilsCrossed, Package, ImageIcon, Camera } from 'lucide-react';
import clsx from 'clsx';

export type PlaceholderVariant =
  | 'beach'
  | 'souvenir'
  | 'table'
  | 'home'
  | 'couple'
  | 'gift'
  | 'hero'
  | 'factory'
  | 'quality'
  | 'packaging';

const VARIANT_MAP: Record<
  PlaceholderVariant,
  { icon: typeof Anchor; gradient: string }
> = {
  beach: { icon: Anchor, gradient: 'from-ocean via-ocean-light to-sand-50' },
  souvenir: { icon: Compass, gradient: 'from-wood via-wood-light to-sand-50' },
  table: { icon: UtensilsCrossed, gradient: 'from-wood-light via-sand to-sand-50' },
  home: { icon: Home, gradient: 'from-ocean-light via-seagreen/40 to-sand-50' },
  couple: { icon: HeartHandshake, gradient: 'from-wood via-sand to-seagreen/30' },
  gift: { icon: Gift, gradient: 'from-seagreen via-ocean-light to-sand-50' },
  hero: { icon: Anchor, gradient: 'from-ocean via-ocean-light to-seagreen/60' },
  factory: { icon: Package, gradient: 'from-ocean via-ocean-light to-sand-50' },
  quality: { icon: Package, gradient: 'from-seagreen via-ocean-light to-sand-50' },
  packaging: { icon: Package, gradient: 'from-wood via-wood-light to-sand-50' },
};

interface PlaceholderImageProps {
  variant: PlaceholderVariant;
  label?: string;
  className?: string;
  iconClassName?: string;
}

export default function PlaceholderImage({
  variant,
  label,
  className,
  iconClassName,
}: PlaceholderImageProps) {
  const config = VARIANT_MAP[variant] ?? { icon: ImageIcon, gradient: 'from-ocean to-sand-50' };
  const Icon = config.icon;

  return (
    <div
      className={clsx(
        'relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br',
        config.gradient,
        className
      )}
      role="img"
      aria-label={label ?? 'Product sample — photography coming soon'}
    >
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(115deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1.5px, transparent 1.5px, transparent 8px)',
        }}
      />
      <div className="relative flex flex-col items-center gap-2.5">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/60 shadow-soft backdrop-blur-sm">
          <Icon className={clsx('h-6 w-6 text-ink', iconClassName)} strokeWidth={1.5} />
        </div>
        <span className="flex items-center gap-1 rounded-full bg-white/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink backdrop-blur-sm">
          <Camera className="h-3 w-3" strokeWidth={1.75} />
          Photography coming soon
        </span>
      </div>
      {label && (
        <span className="absolute bottom-2 left-2 right-2 truncate rounded bg-white/60 px-2 py-1 text-[10px] font-medium text-ink backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
