import type { Metadata } from 'next';
import Link from 'next/link';
import clsx from 'clsx';
import { products } from '@/lib/products-data';
import { categories } from '@/lib/categories-data';
import ProductCard from '@/components/ProductCard';
import PageHero from '@/components/ui/PageHero';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Wholesale Wooden Handicrafts & Decor Catalogue',
  description:
    'Browse our full wholesale range of beach theme decor, wooden souvenirs, table decor, home decor, and honeymoon souvenirs. MOQ from 500 pieces per SKU, private label available.',
  alternates: { canonical: '/products' },
};

interface ProductsPageProps {
  searchParams: { category?: string };
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const activeCategory = searchParams.category;
  const filtered = activeCategory
    ? products.filter((p) => p.categorySlug === activeCategory)
    : products;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteConfig.domain}/products` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <PageHero
        eyebrow="Wholesale Catalogue"
        title="Our Wholesale Product Range"
        description="Six focused categories, each available in standard finishes or fully customised for your brand. Contact us for wholesale pricing on any product."
        image="/photos/stock/aerial-boat-white-sand.jpg"
        align="left"
      />

      <section className="bg-background/60 py-10">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            <Link
              href="/products"
              className={clsx(
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                !activeCategory
                  ? 'border-ocean bg-ocean text-ink'
                  : 'border-ocean/15 text-ink-light hover:border-ocean/40'
              )}
            >
              All Products
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className={clsx(
                  'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                  activeCategory === category.slug
                    ? 'border-ocean bg-ocean text-ink'
                    : 'border-ocean/15 text-ink-light hover:border-ocean/40'
                )}
              >
                {category.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background/60 pb-24">
        <div className="container">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-ink-light">
              No products found in this category yet. Contact us — we likely have it in development.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
