'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  ClipboardPlus,
  PackageCheck,
  Ruler,
  Weight,
  Layers,
  Boxes,
  Clock,
  Package,
  Sparkles,
} from 'lucide-react';
import { Product } from '@/lib/types';
import ProductMedia from '@/components/ProductMedia';
import Button from '@/components/ui/Button';
import SampleRequestModal from '@/components/forms/SampleRequestModal';
import { useEnquiry } from '@/context/EnquiryContext';

const specRows = (product: Product) => [
  { icon: Layers, label: 'Material', value: product.material },
  { icon: Weight, label: 'Weight', value: product.weightRange },
  { icon: Ruler, label: 'Dimensions', value: product.dimensions },
  { icon: Sparkles, label: 'Finish', value: product.finish },
  { icon: Boxes, label: 'MOQ', value: product.moq },
  { icon: Clock, label: 'Lead Time', value: product.leadTime },
  { icon: Package, label: 'Packaging', value: product.packagingType },
];

export default function ProductDetailClient({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const { addItem, isInBasket } = useEnquiry();
  const inBasket = isInBasket(product.slug);

  return (
    <div className="bg-white/60 py-12 sm:py-16">
    <div className="container">
      <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-xs font-medium text-ink-light">
        <Link href="/" className="hover:text-ocean-dark">Home</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-ocean-dark">Products</Link>
        <span>/</span>
        <Link href={`/products?category=${product.categorySlug}`} className="hover:text-ocean-dark">
          {product.categorySlug.replace(/-/g, ' ')}
        </Link>
        <span>/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="aspect-square overflow-hidden rounded-xl2 shadow-card">
            <ProductMedia
              src={product.images[activeImage]}
              label={`${product.name} — image ${activeImage + 1}`}
              priority
            />
          </div>
          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`h-20 w-20 overflow-hidden rounded-lg border-2 transition-colors ${
                    activeImage === index ? 'border-seagreen' : 'border-transparent opacity-70'
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <ProductMedia src={img} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-2">
            {product.isBestseller && (
              <span className="flex items-center gap-1 rounded-full bg-wood px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                <Sparkles className="h-3 w-3" /> Bestseller
              </span>
            )}
            {product.customizable && (
              <span className="rounded-full bg-seagreen px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                Customisable
              </span>
            )}
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink-light">
            SKU: {product.sku}
          </p>
          <h1 className="mt-1 font-serif text-3xl leading-tight text-ink sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-light">{product.description}</p>

          <p className="mt-6 rounded-lg bg-sand-50 px-4 py-3 text-sm font-semibold text-wood">
            Contact us for wholesale pricing — tiered by order volume and customisation.
          </p>

          <dl className="mt-6 divide-y divide-ocean/10 rounded-xl2 border border-ocean/10">
            {specRows(product).map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 px-5 py-3.5">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-wood" strokeWidth={1.5} />
                <dt className="w-28 shrink-0 text-sm font-medium text-ink-light">{label}</dt>
                <dd className="text-sm text-ink">{value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={() =>
                addItem({
                  slug: product.slug,
                  sku: product.sku,
                  name: product.name,
                  image: product.images[0],
                })
              }
              variant="outline"
              size="lg"
              className="flex-1"
              icon={inBasket ? <CheckCircle2 className="h-5 w-5" /> : <ClipboardPlus className="h-5 w-5" />}
            >
              {inBasket ? 'Added to Basket' : 'Add to Enquiry Basket'}
            </Button>
            <Button
              onClick={() => setIsSampleModalOpen(true)}
              variant="secondary"
              size="lg"
              className="flex-1"
              icon={<PackageCheck className="h-5 w-5" />}
            >
              Request a Sample
            </Button>
          </div>
          <Button href="/contact" variant="primary" size="lg" className="mt-3 w-full">
            Send Enquiry for This Product
          </Button>
        </div>
      </div>

      <SampleRequestModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        productName={product.name}
        productSku={product.sku}
      />
    </div>
    </div>
  );
}
