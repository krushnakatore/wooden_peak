'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ClipboardPlus, ArrowRight, Sparkles, Eye } from 'lucide-react';
import { Product } from '@/lib/types';
import ProductMedia from '@/components/ProductMedia';
import { useEnquiry } from '@/context/EnquiryContext';
import ProductQuickView from '@/components/ProductQuickView';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem, isInBasket } = useEnquiry();
  const inBasket = isInBasket(product.slug);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-ocean/10 bg-white shadow-soft transition-shadow duration-300 hover:shadow-glow-teal"
    >
      <div className="relative block aspect-[4/3] overflow-hidden">
        <Link href={`/products/${product.slug}`} className="block h-full w-full">
          <ProductMedia
            src={product.images[0]}
            label={product.name}
            className="transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {product.isBestseller && (
            <span className="flex items-center gap-1 rounded-full bg-wood px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              <Sparkles className="h-3 w-3" /> Bestseller
            </span>
          )}
          {product.customizable && (
            <span className="rounded-full bg-seagreen px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
              Customisable
            </span>
          )}
        </div>

        <button
          onClick={() => setIsQuickViewOpen(true)}
          className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-1.5 bg-ocean-dark/80 py-2.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0"
        >
          <Eye className="h-3.5 w-3.5" /> Quick View
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
          SKU: {product.sku}
        </p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="mt-1 font-serif text-lg leading-snug text-ink transition-colors group-hover:text-seagreen">
            {product.name}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 text-sm text-ink-light">{product.shortDescription}</p>

        <dl className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-ocean/10 pt-4 text-xs">
          <div>
            <dt className="text-ink-muted">Material</dt>
            <dd className="font-medium text-ink">{product.material.split(',')[0].split('(')[0].trim()}</dd>
          </div>
          <div>
            <dt className="text-ink-muted">MOQ</dt>
            <dd className="font-medium text-ink">{product.moq.split('(')[0].trim()}</dd>
          </div>
        </dl>

        <p className="mt-4 text-sm font-semibold text-wood">Contact us for wholesale pricing</p>

        <div className="mt-4 flex gap-2">
          <button
            onClick={() =>
              addItem({
                slug: product.slug,
                sku: product.sku,
                name: product.name,
                image: product.images[0],
              })
            }
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-ocean px-3 py-2.5 text-xs font-semibold text-ocean-dark transition-colors hover:bg-ocean hover:text-ink"
          >
            {inBasket ? <CheckCircle2 className="h-4 w-4" /> : <ClipboardPlus className="h-4 w-4" />}
            {inBasket ? 'Added' : 'Add to Sample Basket'}
          </button>
          <Link
            href={`/products/${product.slug}`}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ocean px-3 py-2.5 text-xs font-semibold text-ink transition-colors hover:bg-ocean-dark hover:text-white"
          >
            Send Enquiry <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      <ProductQuickView
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </motion.div>
  );
}
