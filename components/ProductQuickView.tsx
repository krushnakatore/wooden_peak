'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, ClipboardPlus, Sparkles } from 'lucide-react';
import { Product } from '@/lib/types';
import ProductMedia from '@/components/ProductMedia';
import { useEnquiry } from '@/context/EnquiryContext';

interface ProductQuickViewProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductQuickView({ product, isOpen, onClose }: ProductQuickViewProps) {
  const { addItem, isInBasket } = useEnquiry();
  const inBasket = isInBasket(product.slug);
  const [mounted, setMounted] = useState(false);

  // Rendered via a portal: ProductCard is wheelHover-animated, and a transformed
  // ancestor would otherwise turn this modal's `fixed` positioning into a local one.
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-ocean-dark/50 backdrop-blur-md"
          />
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4" onClick={onClose}>
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="grid max-h-[90vh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-xl2 bg-white shadow-lift sm:grid-cols-2"
            >
              <div className="relative aspect-[4/3] sm:aspect-auto">
                <ProductMedia
                  src={product.images[0]}
                  label={product.name}
                  className="h-full w-full"
                />
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
              </div>

              <div className="flex flex-col p-6 sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
                      SKU: {product.sku}
                    </p>
                    <h3 className="mt-1 font-serif text-2xl leading-snug text-ink">{product.name}</h3>
                  </div>
                  <button
                    onClick={onClose}
                    aria-label="Close quick view"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink-muted hover:bg-ocean/5"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-ink-light">{product.shortDescription}</p>

                <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 rounded-xl2 border border-ocean/10 bg-background p-4 text-xs">
                  <div>
                    <dt className="text-ink-muted">Material</dt>
                    <dd className="mt-0.5 font-medium text-ink">
                      {product.material.split(',')[0].split('(')[0].trim()}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-ink-muted">MOQ</dt>
                    <dd className="mt-0.5 font-medium text-ink">{product.moq.split('(')[0].trim()}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-muted">Weight</dt>
                    <dd className="mt-0.5 font-medium text-ink">{product.weightRange}</dd>
                  </div>
                  <div>
                    <dt className="text-ink-muted">Lead Time</dt>
                    <dd className="mt-0.5 font-medium text-ink">{product.leadTime}</dd>
                  </div>
                </dl>

                <p className="mt-5 text-sm font-semibold text-wood">Contact us for wholesale pricing</p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() =>
                      addItem({
                        slug: product.slug,
                        sku: product.sku,
                        name: product.name,
                        image: product.images[0],
                      })
                    }
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-ocean px-4 py-2.5 text-sm font-semibold text-ocean-dark transition-colors hover:bg-ocean hover:text-ink"
                  >
                    {inBasket ? <CheckCircle2 className="h-4 w-4" /> : <ClipboardPlus className="h-4 w-4" />}
                    {inBasket ? 'Added to Basket' : 'Add to Sample Basket'}
                  </button>
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-ocean px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ocean-dark hover:text-white"
                  >
                    Full Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
