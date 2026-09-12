import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/lib/products-data';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.isBestseller).slice(0, 4);
  const fill = products.filter((p) => !p.isBestseller).slice(0, Math.max(0, 4 - featured.length));
  const display = [...featured, ...fill].slice(0, 4);

  return (
    <section className="bg-sand-50/60 py-20 sm:py-28">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Bestsellers"
            title="Featured Wholesale Products"
            description="A snapshot of our most-ordered SKUs across resort gift shops and coastal retail chains. Full specifications and pricing shared on enquiry."
            align="left"
            className="mx-0 text-left"
          />
          <Button href="/products" variant="outline" icon={<ArrowRight className="h-4 w-4" />} className="hidden sm:inline-flex">
            View All Products
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {display.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Button href="/products" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
