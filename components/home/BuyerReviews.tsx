import { Star, Clock } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProductMedia from '@/components/ProductMedia';
import { AnimatedStagger, StaggerItem } from '@/components/ui/AnimatedSection';

const moments = [
  {
    image: '/photos/lifestyle/mauritius-stall-couple.jpg',
    caption: 'Handed over on the sand, one keepsake at a time.',
  },
  {
    image: '/photos/lifestyle/mauritius-stall-family.jpg',
    caption: 'A souvenir the whole family remembers.',
  },
  {
    image: '/photos/lifestyle/mauritius-stall-sunset.jpg',
    caption: 'Golden-hour sales at a beachside handicraft counter.',
  },
];

export default function BuyerReviews() {
  return (
    <section className="bg-sand-50/60 py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Real Retail Moments"
          title="Loved at Beach Resorts & Souvenir Counters Worldwide"
          description="This is what our décor and souvenirs are built for — genuine moments at the point of sale, from beachside stalls to resort gift shops."
        />

        <AnimatedStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {moments.map(({ image, caption }, index) => (
            <StaggerItem key={image}>
              <div
                className={`group overflow-hidden rounded-xl2 border border-ocean/10 bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-teal ${
                  index === 1 ? 'sm:-translate-y-4 sm:rotate-0' : index === 0 ? 'sm:rotate-[-1.5deg]' : 'sm:rotate-[1.5deg]'
                }`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <ProductMedia
                    src={image}
                    label={caption}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="p-4 text-sm font-medium leading-snug text-ink">{caption}</p>
              </div>
            </StaggerItem>
          ))}
        </AnimatedStagger>

        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-3 rounded-xl2 border border-dashed border-ocean/20 bg-white px-8 py-8 text-center">
          <div className="flex items-center gap-1 text-wood">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-wood text-wood" />
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-full bg-ocean/5 px-4 py-2 text-sm font-semibold text-ocean-dark">
            <Clock className="h-4 w-4" />
            Verified Buyer Reviews Coming Soon
          </div>
          <p className="max-w-sm text-sm text-ink-light">
            We only publish verified, permission-based buyer testimonials. Check back soon, or ask
            our team for direct buyer references.
          </p>
        </div>
      </div>
    </section>
  );
}
