'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProductMedia from '@/components/ProductMedia';

type Slide =
  | { type: 'video'; src: string; label: string }
  | { type: 'image'; src: string; label: string };

const SLIDES: Slide[] = [
  { type: 'video', src: '/video/honeymoon-plaque-spotlight.mp4', label: 'Honeymoon palm and wave plaque, engraving detail' },
  { type: 'image', src: '/photos/products/sea-turtle-couple-keepsake-1.jpg', label: 'Sea turtle companion keepsake at sunset' },
  { type: 'image', src: '/photos/products/rustic-longhorn-wall-decor-1.jpg', label: 'Rustic longhorn wall décor styled in a living room' },
  { type: 'image', src: '/photos/lifestyle/mauritius-stall-sunset.jpg', label: 'Golden-hour sales at a beachside handicraft counter' },
];

const IMAGE_DURATION = 4800;
const VIDEO_FALLBACK_DURATION = 11000;

export default function HeroVideo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(query.matches);
    const onChange = () => setPrefersReducedMotion(query.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  const advance = () => {
    setActiveIndex((i) => (i + 1) % SLIDES.length);
  };

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const current = SLIDES[activeIndex];
    const duration = current.type === 'image' ? IMAGE_DURATION : VIDEO_FALLBACK_DURATION;
    timerRef.current = setTimeout(advance, duration);
    return () => clearTimeout(timerRef.current);
  }, [activeIndex, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0">
        <ProductMedia
          src="/photos/products/honeymoon-palm-wave-plaque-1.jpg"
          label="Handcrafted palm and wave honeymoon plaque"
          className="h-full w-full"
        />
        <HeroOverlay />
      </div>
    );
  }

  const current = SLIDES[activeIndex];

  return (
    <div className="absolute inset-0 bg-ink">
      <AnimatePresence mode="sync">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {current.type === 'video' && !videoFailed ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              onEnded={advance}
              onError={() => {
                setVideoFailed(true);
                advance();
              }}
            >
              <source src={current.src} type="video/mp4" />
            </video>
          ) : (
            <ProductMedia src={current.src} label={current.label} className="h-full w-full" priority />
          )}
        </motion.div>
      </AnimatePresence>

      <HeroOverlay />

      <div className="absolute inset-x-0 bottom-6 z-10 flex justify-center gap-2 sm:bottom-8">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function HeroOverlay() {
  return (
    <>
      <div className="absolute inset-0 bg-ink/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/45 via-transparent to-transparent" />
    </>
  );
}
