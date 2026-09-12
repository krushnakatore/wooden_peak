import type { Metadata } from 'next';
import { Compass, Hammer, Globe2, HeartHandshake, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductMedia from '@/components/ProductMedia';
import PageHero from '@/components/ui/PageHero';
import PhotoBackdrop from '@/components/ui/PhotoBackdrop';
import Button from '@/components/ui/Button';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'About Us — Wooden Handicrafts Manufacturer & Exporter',
  description:
    'MeaningWood Crafts is an India-based manufacturer and exporter of wooden handicrafts and beach decor, built to serve importers, resorts, and retailers with reliable production and export support.',
  alternates: { canonical: '/about' },
};

const values = [
  {
    icon: Hammer,
    title: 'Craft, Not Just Manufacturing',
    description:
      'Every product starts as a hand-finished design before it is scaled into repeatable production — we treat craftsmanship and consistency as equally important.',
  },
  {
    icon: Globe2,
    title: 'Built for Export, From Day One',
    description:
      'Our specifications, packaging, and documentation processes are designed around international buyer requirements, not adapted from a domestic retail model.',
  },
  {
    icon: HeartHandshake,
    title: 'A Long-Term Sourcing Partner',
    description:
      'We aim to be the exporter you reorder from every season, not a one-time transaction — which shapes how we handle quality, communication, and lead times.',
  },
  {
    icon: Compass,
    title: 'Design With a Sense of Place',
    description:
      'Our beach, coastal, and honeymoon collections are designed specifically for how they will be sold — resort shelves, souvenir counters, and destination gifting.',
  },
];

export default function AboutPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: `${siteConfig.domain}/about` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <PageHero
        eyebrow="About MeaningWood Crafts"
        title="Wooden Décor and Souvenirs, Manufactured for the World"
        description="We are a manufacturer and exporter of wooden handicrafts based in India, built specifically to serve international buyers — from resort gift shops to large-volume distributors."
        image="/photos/stock/palm-trees-blue-sky.jpg"
        align="left"
      />

      <section className="bg-background/60 py-16 sm:py-24">
        <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="aspect-[4/3] overflow-hidden rounded-xl2 shadow-card">
            <ProductMedia src="/photos/products/rustic-longhorn-wall-decor-1.jpg" label="Handcrafted wooden décor" className="h-full w-full" />
          </div>
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-seagreen">
              Our Story
            </span>
            <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
              From a Craft Tradition to an Export Business
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-ink-light">
              <p>
                MeaningWood Crafts was founded to bring India&apos;s wood-carving and joinery traditions
                to international retail shelves in a form built for wholesale: consistent
                specifications, dependable lead times, and export-ready packaging. [Add founding year
                and origin story details]
              </p>
              <p>
                What began as a focus on home décor has grown into a specialised range for the coastal
                tourism and gifting trade — beach-theme décor, wooden souvenirs, and honeymoon
                keepsakes designed specifically for how resorts and gift shops actually sell.
              </p>
              <p>
                Today, our production is organised around serving importers and distributors directly,
                with a single export team managing your account from first sample to repeat container
                orders. [Add team size, facility location, or capacity details for verification]
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/60 py-16 sm:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="What We Believe"
            title="The Principles Behind How We Manufacture"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-xl2 border border-ocean/10 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ocean/5 text-ocean-dark">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-50/60 py-16 sm:py-24">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-seagreen">
              Why Mauritius, and Why Coastal Markets
            </span>
            <h2 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">
              A Deliberate Focus on Coastal Tourism Retail
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-light">
              We chose to specialise in beach-theme décor and honeymoon souvenirs because coastal
              tourism markets — led by Mauritius — have a retail rhythm our catalogue is built around:
              high footfall gift shops, resort welcome gifting, and a steady demand for personalised,
              destination-specific keepsakes. This focus lets us hold relevant stock designs, respond
              faster to seasonal demand, and go deeper on customisation than a general handicraft
              exporter.
            </p>
            <Button href="/export-capabilities" variant="outline" className="mt-7" icon={<ArrowRight className="h-4 w-4" />}>
              See Our Export Capabilities
            </Button>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-xl2 shadow-card">
            <ProductMedia src="/photos/stock/striped-beach-chairs.jpg" label="Coastal retail focus" className="h-full w-full" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <PhotoBackdrop image="/photos/stock/sunset-shoreline-glow.jpg" overlayClassName="absolute inset-0 bg-ink/70" />
        <div className="container relative flex flex-col items-center gap-6 text-center">
          <h2 className="font-serif text-2xl text-white sm:text-3xl">
            Ready to See if We&apos;re the Right Fit for Your Business?
          </h2>
          <p className="max-w-xl text-white/90">
            Tell us about your market and volumes — we&apos;ll be direct about whether and how we can
            serve you well.
          </p>
          <Button href="/contact" variant="accent" size="lg">
            Start a Conversation
          </Button>
        </div>
      </section>
    </>
  );
}
