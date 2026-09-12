'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Factory, Package, Palette, Sparkles } from 'lucide-react';
import Button from '@/components/ui/Button';
import HeroVideo from '@/components/HeroVideo';

const badges = [
  { icon: ShieldCheck, label: 'Made in India' },
  { icon: Factory, label: 'Export-Ready' },
  { icon: Package, label: 'Wholesale Orders' },
  { icon: Palette, label: 'Custom Designs' },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[640px] items-end overflow-hidden sm:min-h-[720px] lg:min-h-[840px]">
      <HeroVideo />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 4 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        className="absolute right-5 top-24 z-10 hidden items-center gap-1.5 rounded-2xl border border-white/20 bg-white/60 px-3.5 py-2.5 text-xs font-semibold text-wood-dark shadow-lift backdrop-blur-sm sm:flex sm:right-8 lg:top-28"
      >
        <Sparkles className="h-3.5 w-3.5 text-wood" />
        Handcrafted in India
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        className="absolute right-5 top-44 z-10 hidden rounded-2xl border border-white/20 bg-white/60 px-4 py-2.5 text-center shadow-lift backdrop-blur-sm sm:block sm:right-8 lg:top-48"
      >
        <p className="font-serif text-lg leading-none text-wood-dark">500+</p>
        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-muted">MOQ per SKU</p>
      </motion.div>

      <div className="container relative z-10 flex flex-col gap-8 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="mb-5 inline-block rounded-full border border-sand/40 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sand backdrop-blur-sm">
            From India to the World
          </span>
          <h1 className="font-serif text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl [text-shadow:0_2px_20px_rgba(0,0,0,0.35)]">
            Meaningful Wooden Décor, Crafted in India for the World.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            MeaningWood Crafts manufactures and exports beach-theme décor, table &amp; home décor, and
            honeymoon souvenirs to importers, resorts, and retailers across Mauritius, the USA,
            Australia, Europe, UAE, and Canada — from a single, reliable production partner.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="accent" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              Get Wholesale Quote
            </Button>
            <Button
              href="/catalogue"
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white hover:text-wood-dark"
            >
              Request Full Catalogue
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          className="flex flex-wrap gap-3"
        >
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <Icon className="h-4 w-4 text-seagreen-light" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
