'use client';

import { useState } from 'react';
import { Stamp, PenTool, Package2, Palette, ArrowRight, Camera } from 'lucide-react';
import Button from '@/components/ui/Button';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProductMedia from '@/components/ProductMedia';

const options = [
  { icon: PenTool, label: 'Logo & Text Engraving' },
  { icon: Stamp, label: 'Destination Name Customisation' },
  { icon: Package2, label: 'Private Label Packaging' },
  { icon: Palette, label: 'Custom Colour & Finish' },
];

const MAX_LENGTH = 26;

export default function CustomizationShowcase() {
  const [engraveText, setEngraveText] = useState('Mauritius Beach Resort');

  return (
    <section className="bg-white/60 py-20 sm:py-28">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <AnimatedSection className="relative">
          <div className="relative aspect-square overflow-hidden rounded-xl2 border border-ocean/10 bg-wood-dark shadow-card sm:aspect-[4/3] lg:aspect-square">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(98deg, rgba(0,0,0,0.25) 0px, rgba(0,0,0,0.25) 2px, transparent 2px, transparent 9px)',
              }}
            />
            <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 p-8">
              <span className="rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                Live Engraving Preview
              </span>
              <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[6px] border-white/20 bg-sand shadow-lift sm:h-56 sm:w-56">
                <div
                  className="absolute inset-0 rounded-full opacity-25"
                  style={{
                    backgroundImage:
                      'repeating-radial-gradient(circle at 50% 50%, rgba(0,0,0,0.12) 0px, rgba(0,0,0,0.12) 1.5px, transparent 1.5px, transparent 6px)',
                  }}
                />
                <span className="relative px-5 text-center font-serif text-base font-semibold uppercase leading-snug tracking-wide text-wood-dark [text-shadow:0_1px_0_rgba(255,255,255,0.35)] sm:text-lg">
                  {engraveText || 'Your Brand Here'}
                </span>
              </div>
              <p className="max-w-[220px] text-center text-xs text-white/70">
                Preview shown on a wooden coaster/wall plaque — actual engraving finish confirmed on your sample.
              </p>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-4 hidden w-36 rotate-3 rounded-xl border-4 border-white bg-white shadow-lift sm:block">
            <div className="relative aspect-square overflow-hidden rounded-md">
              <ProductMedia
                src="/photos/products/custom-destination-wave-plaque-1.jpg"
                label="Real destination-name engraving example"
                className="h-full w-full"
              />
            </div>
            <p className="flex items-center gap-1 px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-ink-muted">
              <Camera className="h-3 w-3 text-wood" /> Real example
            </p>
          </div>

          <div className="mt-5">
            <label htmlFor="engrave-preview" className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Try it — type your brand or destination name
            </label>
            <input
              id="engrave-preview"
              type="text"
              value={engraveText}
              maxLength={MAX_LENGTH}
              onChange={(e) => setEngraveText(e.target.value)}
              placeholder="e.g. Mauritius Beach Resort"
              className="mt-2 w-full rounded-full border border-ocean/15 bg-background px-4 py-2.5 text-sm text-ink focus:border-seagreen focus:outline-none focus:ring-2 focus:ring-seagreen/20"
            />
            <p className="mt-1.5 text-xs text-ink-muted">{engraveText.length}/{MAX_LENGTH} characters</p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-seagreen">
            Customisation &amp; Private Label
          </span>
          <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
            Make It Yours: Build a Branded Collection Around Your Business
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-light sm:text-lg">
            Beyond our standard catalogue, we build fully private-labelled collections for resorts,
            distributors, and gifting brands — from a single engraved logo to a complete custom
            product line with your packaging and brand story. Use the live preview to try your own
            branding on a sample coaster or wall plaque.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {options.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-lg border border-ocean/10 px-4 py-3">
                <Icon className="h-5 w-5 shrink-0 text-wood" strokeWidth={1.5} />
                <span className="text-sm font-medium text-ink">{label}</span>
              </div>
            ))}
          </div>

          <Button href="/custom-private-label" variant="secondary" size="lg" className="mt-8" icon={<ArrowRight className="h-5 w-5" />}>
            Create a Custom Collection
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
