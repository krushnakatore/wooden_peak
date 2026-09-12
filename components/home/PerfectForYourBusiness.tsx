import { Hotel, Store, Truck, Briefcase, Check } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import PhotoBackdrop from '@/components/ui/PhotoBackdrop';
import { AnimatedStagger, StaggerItem } from '@/components/ui/AnimatedSection';

const segments = [
  {
    icon: Hotel,
    title: 'Resorts & Hotel Chains',
    description: 'Branded welcome gifts, in-room amenities, and gift shop assortments that reflect a coastal, premium guest experience.',
    fits: ['Private label welcome gifts', 'In-room decor accents', 'Branded honeymoon amenities'],
  },
  {
    icon: Store,
    title: 'Souvenir & Beachside Gift Shops',
    description: 'Fast-moving, high-margin souvenirs and beach-theme decor sized for counter and shelf retail.',
    fits: ['Engraved fridge magnets & keychains', 'Beach-theme wall decor', 'Impulse-buy price points'],
  },
  {
    icon: Truck,
    title: 'Importers & Distributors',
    description: 'Container-ready volumes, consistent SKUs, and export documentation built for repeat wholesale distribution.',
    fits: ['Full-container and mixed-SKU orders', 'Consistent reorder specifications', 'Flexible Incoterms (EXW/FOB/CIF)'],
  },
  {
    icon: Briefcase,
    title: 'Corporate Gifting Agencies',
    description: 'Logo-engraved, presentation-ready gift sets for corporate clients seeking a distinctive, sustainable gifting option.',
    fits: ['Custom logo engraving', 'Premium presentation packaging', 'Small-to-mid batch flexibility'],
  },
];

export default function PerfectForYourBusiness() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <PhotoBackdrop image="/photos/stock/striped-beach-chairs.jpg" overlayClassName="absolute inset-0 bg-ink/70" />
      <div className="container relative">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Perfect for Your Business"
          description="Whatever your channel, our catalogue and customisation options are built around how you actually sell."
          light
        />

        <AnimatedStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map(({ icon: Icon, title, description, fits }) => (
            <StaggerItem key={title}>
              <div className="h-full rounded-xl2 border border-white/20 bg-white/95 p-6 shadow-lift backdrop-blur-sm transition-all duration-300 hover:-translate-y-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ocean/10 text-ocean-dark">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">{description}</p>
                <ul className="mt-4 space-y-2 border-t border-ocean/10 pt-4">
                  {fits.map((fit) => (
                    <li key={fit} className="flex items-start gap-2 text-xs text-ink-light">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-seagreen" />
                      {fit}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
