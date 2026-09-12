import type { Metadata } from 'next';
import {
  Factory,
  Boxes,
  Anchor,
  FileSignature,
  Clock3,
  Globe2,
  ClipboardCheck,
  Microscope,
  PackageCheck,
  ShieldCheck,
  Truck,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import PageHero from '@/components/ui/PageHero';
import PhotoBackdrop from '@/components/ui/PhotoBackdrop';
import Button from '@/components/ui/Button';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Export Capabilities, Quality Control & Packaging Standards',
  description:
    'Production capacity, MOQ, shipping terms, quality control workflow, and export packaging standards for MeaningWood Crafts — a wooden handicrafts manufacturer and exporter from India.',
  alternates: { canonical: '/export-capabilities' },
};

const metrics = [
  { icon: Factory, label: 'Monthly Production Capacity', value: siteConfig.export.monthlyCapacityUnits },
  { icon: Boxes, label: 'Standard MOQ', value: siteConfig.export.standardMOQUnits },
  { icon: Anchor, label: 'Primary Export Port (Sea)', value: siteConfig.export.port },
  { icon: Truck, label: 'Primary Export Airport', value: siteConfig.export.airport },
  { icon: FileSignature, label: 'Shipping Terms Offered', value: siteConfig.export.incoterms.join(' / ') },
  { icon: Clock3, label: 'Sample Lead Time', value: siteConfig.export.sampleLeadTime },
  { icon: Clock3, label: 'Bulk Production Lead Time', value: siteConfig.export.bulkLeadTime },
  { icon: Globe2, label: 'Primary Export Markets', value: siteConfig.export.primaryMarkets.join(', ') },
];

const qcSteps = [
  {
    icon: Microscope,
    title: 'Raw Material Inspection',
    description: 'Incoming timber and hardware are checked for moisture content, grain quality, and consistency before production begins.',
  },
  {
    icon: ClipboardCheck,
    title: 'In-Line Production Checks',
    description: 'Dimensions, carving detail, and finish are checked at each production stage against the approved sample specification.',
  },
  {
    icon: ShieldCheck,
    title: 'Pre-Shipment Inspection',
    description: 'A full batch inspection covering finish, packaging, and carton count is completed before goods are released for dispatch.',
  },
  {
    icon: PackageCheck,
    title: 'Packaging & Documentation QC',
    description: 'Cartons, labelling, and export documentation are verified against your purchase order before container loading.',
  },
];

const packagingStandards = [
  'Individual products are protected with kraft boxes, poly bags, or foam corners depending on fragility.',
  'Export cartons are 3-ply or 5-ply corrugated board, rated for ocean freight stacking and handling.',
  'Fragile items (mirrors, glass or metal inlay pieces) receive additional cushioning and edge protection.',
  'Wood packaging materials (pallets/crates, where used) follow ISPM 15 fumigation requirements for international shipping. [Confirm current certificate before shipment]',
  'Carton labelling includes SKU, quantity, gross/net weight, and dimensions for customs and warehousing.',
];

const samplePolicy = [
  'Standard samples are produced and shipped within 7–10 working days of a confirmed specification.',
  'Sample and courier costs are communicated upfront and are typically adjustable against your first bulk order.',
  'Custom or fully new-design samples may require additional development time, confirmed at enquiry stage.',
  'One round of sample revision is included; further revisions are quoted based on complexity.',
];

export default function ExportCapabilitiesPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Export Capabilities', item: `${siteConfig.domain}/export-capabilities` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <PageHero
        eyebrow="Export Capabilities"
        title="Fact-Based Production, Quality, and Shipping Capabilities"
        description="No exaggerated claims — just the operational details you need to plan a sourcing decision with confidence."
        image="/photos/stock/aerial-turquoise-coastline.jpg"
      />

      <section className="bg-white/60 py-20 sm:py-28">
        <div className="container">
          <SectionHeading eyebrow="At a Glance" title="Export Capability Metrics" />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex h-full gap-4 rounded-xl2 border border-ocean/10 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ocean/5 text-ocean-dark">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{label}</p>
                  <p className="mt-1 text-sm font-medium leading-snug text-ink">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-50/60 py-20 sm:py-28">
        <div className="container">
          <SectionHeading
            eyebrow="Quality Control"
            title="A Four-Stage Quality Control Workflow"
            description="Every order — standard or private label — passes through the same quality checkpoints before it reaches your port."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {qcSteps.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className="relative rounded-xl2 border border-ocean/10 bg-white p-6">
                <span className="absolute right-5 top-5 font-serif text-2xl text-ocean/10">
                  0{index + 1}
                </span>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-seagreen/10 text-seagreen">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/60 py-20 sm:py-28">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Packaging Standards"
              title="Export Packaging Built for Ocean & Air Freight"
              align="left"
              className="mx-0 text-left"
            />
            <ul className="mt-8 space-y-4">
              {packagingStandards.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-ink-light">
                  <PackageCheck className="mt-0.5 h-5 w-5 shrink-0 text-wood" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading
              eyebrow="Sample Policy"
              title="How Sampling Works Before Bulk Production"
              align="left"
              className="mx-0 text-left"
            />
            <ul className="mt-8 space-y-4">
              {samplePolicy.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-ink-light">
                  <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-seagreen" />
                  {point}
                </li>
              ))}
            </ul>
            <Button href="/shipping-sample-policy" variant="ghost" size="sm" className="mt-6 !px-0" icon={<ArrowRight className="h-4 w-4" />}>
              Read our full Shipping &amp; Sample Policy
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 sm:py-20">
        <PhotoBackdrop image="/photos/stock/sunset-shoreline-glow.jpg" overlayClassName="absolute inset-0 bg-ink/70" />
        <div className="container relative flex flex-col items-center gap-6 text-center">
          <h2 className="font-serif text-2xl text-white sm:text-3xl">
            Have a Specific Compliance or Logistics Question?
          </h2>
          <p className="max-w-xl text-white/90">
            Our export team can walk you through documentation, Incoterm options, and lead times for
            your specific market before you commit to an order.
          </p>
          <Button href="/contact" variant="accent" size="lg">
            Talk to Our Export Team
          </Button>
        </div>
      </section>
    </>
  );
}
