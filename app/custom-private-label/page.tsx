import type { Metadata } from 'next';
import { Stamp, PenTool, Package2, Palette, Ruler, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductMedia from '@/components/ProductMedia';
import PageHero from '@/components/ui/PageHero';
import CustomPrivateLabelForm from '@/components/forms/CustomPrivateLabelForm';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Custom & Private Label Wooden Gifts',
  description:
    'Build a private label wooden decor or souvenir collection with MeaningWood Crafts — logo engraving, destination branding, custom packaging, and full custom design programmes. MOQ from 500 pieces.',
  alternates: { canonical: '/custom-private-label' },
};

const customisationOptions = [
  {
    icon: PenTool,
    title: 'Logo & Text Engraving',
    description:
      'Laser-engrave your company logo, wordmark, or a personalised message onto any product in our catalogue — precise, permanent, and production-ready at scale.',
  },
  {
    icon: Stamp,
    title: 'Destination Name Customisation',
    description:
      'Ideal for resort, tourism board, and souvenir retail buyers — we engrave destination names, coordinates, or local landmarks to match your local market.',
  },
  {
    icon: Package2,
    title: 'Private Label Packaging',
    description:
      'Retail boxes, kraft sleeves, and insert cards designed and printed to your brand guidelines, so the product feels entirely yours on the shelf.',
  },
  {
    icon: Palette,
    title: 'Colour, Finish & Material Change',
    description:
      'Adjust stain tone, lacquer finish, or base wood species to align with your brand palette or a specific retail collection.',
  },
  {
    icon: Ruler,
    title: 'Full Custom Design',
    description:
      'Bring your own sketch, reference product, or 3D file — our design team evaluates feasibility and develops tooling for a fully original product.',
  },
];

const investmentPoints = [
  'Logo engraving and packaging customisation typically require no additional tooling cost above standard MOQ.',
  'Full custom design (new shapes, new tooling) may involve a one-time design and mould development cost, confirmed after your brief.',
  'Standard MOQ for private label programmes is 500 pieces per SKU — mixed-SKU private label runs are considered individually.',
  'A physical sample is always produced and shipped for your approval before any bulk production begins.',
];

export default function CustomPrivateLabelPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Custom & Private Label', item: `${siteConfig.domain}/custom-private-label` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <PageHero
        eyebrow="Custom & Private Label"
        title="Create a Custom Collection Built Entirely Around Your Brand"
        description="From a single engraved logo to a complete, tooled product line — we partner with resorts, distributors, and gifting brands to design and manufacture wooden collections that carry your brand, not ours."
        image="/photos/stock/sunset-shoreline-glow.jpg"
      />

      <section className="bg-white/60 py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="What We Customise"
            title="Five Ways to Make a Product Yours"
            description="Choose one customisation type or combine several for a fully private-labelled collection."
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {customisationOptions.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-xl2 border border-ocean/10 p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-wood/10 text-wood">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-50/60 py-20 sm:py-28">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Investment & MOQ"
              title="What to Expect Before You Brief Us"
              align="left"
              className="mx-0 text-left"
            />
            <ul className="mt-8 space-y-4">
              {investmentPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-ink-light">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-seagreen" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-xl2 shadow-card">
            <ProductMedia src="/photos/stock/aerial-boat-white-sand.jpg" label="Private label sampling process" className="h-full w-full" />
          </div>
        </div>
      </section>

      <section className="bg-white/60 py-20 sm:py-28">
        <div className="container max-w-3xl">
          <SectionHeading
            eyebrow="Get Started"
            title="Tell Us About Your Custom Collection"
            description="Share your product interest, customisation needs, and target price — our design and export team will respond with feasibility and a recommended sample plan."
          />
          <div className="mt-12 rounded-xl2 border border-ocean/10 bg-white p-6 shadow-soft sm:p-10">
            <CustomPrivateLabelForm />
          </div>
        </div>
      </section>
    </>
  );
}
