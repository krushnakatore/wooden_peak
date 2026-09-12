import {
  Factory,
  Palette,
  Boxes,
  ShieldCheck,
  PackageCheck,
  Clock,
  Headset,
  Leaf,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { AnimatedStagger, StaggerItem } from '@/components/ui/AnimatedSection';

const values = [
  {
    icon: Factory,
    title: 'Direct Factory Pricing',
    description: 'No middlemen. You deal directly with our production facility for transparent, competitive wholesale pricing.',
  },
  {
    icon: Palette,
    title: 'Full Customisation & Private Label',
    description: 'Logo engraving, destination branding, and custom packaging built to your specification, not just our catalogue.',
  },
  {
    icon: Boxes,
    title: 'Consistent Production Capacity',
    description: 'A production capacity of 10,000+ pieces per month supports both seasonal peaks and recurring reorders.',
  },
  {
    icon: ShieldCheck,
    title: 'Rigorous Quality Control',
    description: 'Every batch is inspected against agreed specifications before packing, with pre-shipment reports available on request.',
  },
  {
    icon: PackageCheck,
    title: 'Export-Ready Packaging',
    description: 'Carton specifications, cushioning, and labelling are built for ocean and air freight, reducing in-transit damage.',
  },
  {
    icon: Clock,
    title: 'Reliable Lead Times',
    description: 'Clear sample and bulk production timelines are agreed upfront and tracked through to dispatch.',
  },
  {
    icon: Headset,
    title: 'Dedicated Export Support',
    description: 'A single point of contact manages your account from first enquiry through to repeat ordering.',
  },
  {
    icon: Leaf,
    title: 'Responsible Wood Sourcing',
    description: 'We prioritise responsibly sourced timber and offcut utilisation across our product range. [Add certification details if applicable]',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white/60 py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Why Buyers Choose Us"
          title="Built for Buyers Who Need a Dependable Manufacturing Partner"
          description="Beyond the product itself, international buyers choose MeaningWood Crafts for the operational reliability behind it."
        />

        <AnimatedStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <div className="h-full rounded-xl2 border border-ocean/10 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-teal">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ocean/5 text-ocean-dark">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
