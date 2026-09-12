import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/lib/categories-data';
import ProductMedia from '@/components/ProductMedia';
import SectionHeading from '@/components/ui/SectionHeading';
import { AnimatedStagger, StaggerItem } from '@/components/ui/AnimatedSection';

export default function CategoriesGrid() {
  return (
    <section className="bg-background/60 py-20 sm:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Our Range"
          title="A Complete Wooden Décor & Souvenir Assortment"
          description="Six focused product categories, engineered for coastal tourism retail, resort gifting, and wholesale distribution — every design available with private label customisation."
        />

        <AnimatedStagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <StaggerItem key={category.slug}>
              <Link
                href={`/products?category=${category.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-xl2 border border-ocean/10 bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-glow-teal"
              >
                <div className="relative h-52 overflow-hidden">
                  <ProductMedia
                    src={category.image}
                    label={category.name}
                    className="transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-white/60 px-3 py-1 text-[11px] font-semibold text-ocean-dark">
                    {category.productCount}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl text-ink">{category.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-light">
                    {category.description}
                  </p>
                  <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-seagreen">
                    Explore Category
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}
