import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductBySlug, getRelatedProducts, products } from '@/lib/products-data';
import { getCategoryBySlug } from '@/lib/categories-data';
import ProductDetailClient from '@/components/ProductDetailClient';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/ui/SectionHeading';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/lib/site-config';

interface ProductPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  const category = getCategoryBySlug(product.categorySlug);

  return {
    title: `${product.name} | Wholesale ${category?.shortName ?? ''}`,
    description: `${product.shortDescription} SKU: ${product.sku}. MOQ: ${product.moq}. Material: ${product.material}. Request wholesale pricing and samples from MeaningWood Crafts.`,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: product.name,
      description: product.shortDescription,
    },
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.categorySlug);
  const related = getRelatedProducts(product);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    sku: product.sku,
    description: product.description,
    category: category?.name,
    material: product.material,
    brand: { '@type': 'Brand', name: siteConfig.name },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      priceSpecification: 'Wholesale pricing available on enquiry',
      url: `${siteConfig.domain}/products/${product.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteConfig.domain}/products` },
      {
        '@type': 'ListItem',
        position: 3,
        name: category?.name ?? product.categorySlug,
        item: `${siteConfig.domain}/products?category=${product.categorySlug}`,
      },
      { '@type': 'ListItem', position: 4, name: product.name, item: `${siteConfig.domain}/products/${product.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <ProductDetailClient product={product} />

      {related.length > 0 && (
        <section className="bg-sand-50/60 py-20">
          <div className="container">
            <SectionHeading
              eyebrow="You May Also Need"
              title="Related Products"
              align="left"
              className="mx-0 text-left"
            />
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
