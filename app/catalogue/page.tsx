import type { Metadata } from 'next';
import { FileText, Boxes, Palette, Ship } from 'lucide-react';
import CatalogueRequestForm from '@/components/forms/CatalogueRequestForm';
import PageHero from '@/components/ui/PageHero';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Request Our Wholesale Product Catalogue',
  description:
    'Request the full MeaningWood Crafts wholesale catalogue — product specifications, MOQs, materials, and customisation options across all six categories.',
  alternates: { canonical: '/catalogue' },
};

const includes = [
  { icon: Boxes, label: 'Full product range across all 6 categories with SKUs and specifications' },
  { icon: Palette, label: 'Available customisation and private label options per product' },
  { icon: Ship, label: 'Standard MOQ, lead times, and packaging details for export planning' },
];

export default function CataloguePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Catalogue', item: `${siteConfig.domain}/catalogue` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <PageHero
        eyebrow="Product Catalogue"
        title="Get the Full MeaningWood Crafts Wholesale Catalogue"
        description="A single, verified request unlocks our complete product range — sent straight to your business email as a PDF."
        image="/photos/stock/woven-umbrella-shoreline.jpg"
        align="left"
      />
      <section className="bg-white/60 py-20 sm:py-28">
        <div className="container grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-wood/10 text-wood">
              <FileText className="h-7 w-7" strokeWidth={1.5} />
            </span>

            <ul className="mt-6 space-y-4">
              {includes.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3 text-sm leading-relaxed text-ink-light">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-seagreen" />
                  {label}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-xs text-ink-muted">
              We share our catalogue only with verified business contacts to protect our design work
              and pricing structure from non-trade use.
            </p>
          </div>

          <div className="rounded-xl2 border border-ocean/10 bg-background p-6 shadow-soft sm:p-10">
            <h2 className="mb-6 font-serif text-2xl text-ink">Request Your Copy</h2>
            <CatalogueRequestForm />
          </div>
        </div>
      </section>
    </>
  );
}
