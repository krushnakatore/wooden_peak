'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X, Minus, Plus, Trash2, ClipboardList, Weight, Clock3 } from 'lucide-react';
import { useEnquiry } from '@/context/EnquiryContext';
import Button from '@/components/ui/Button';
import ProductMedia from '@/components/ProductMedia';
import { products } from '@/lib/products-data';
import { siteConfig } from '@/lib/site-config';

const FALLBACK_ITEM_GRAMS = 400;

function parseWeightToGrams(weightRange: string): number {
  const matches = [...weightRange.matchAll(/(\d+(?:\.\d+)?)\s*(kg|g)\b/gi)];
  if (matches.length === 0) return FALLBACK_ITEM_GRAMS;
  const grams = matches.map(([, amount, unit]) => {
    const parsed = parseFloat(amount);
    return unit.toLowerCase() === 'kg' ? parsed * 1000 : parsed;
  });
  return grams.reduce((sum, g) => sum + g, 0) / grams.length;
}

export default function EnquiryBasketDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQuantity, itemCount } = useEnquiry();

  const totalWeightGrams = items.reduce((sum, item) => {
    const product = products.find((p) => p.slug === item.slug);
    const perUnitGrams = product ? parseWeightToGrams(product.weightRange) : FALLBACK_ITEM_GRAMS;
    return sum + perUnitGrams * item.quantity;
  }, 0);

  const weightDisplay =
    totalWeightGrams >= 1000
      ? `${(totalWeightGrams / 1000).toFixed(totalWeightGrams >= 10000 ? 0 : 1)} kg`
      : `${Math.round(totalWeightGrams)} g`;

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <>
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDrawer}
            className="fixed inset-0 z-[60] bg-ocean-dark/50 backdrop-blur-sm"
          />
          <motion.aside
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-lift"
          >
            <div className="flex items-center justify-between border-b border-ocean/10 px-6 py-5">
              <div className="flex items-center gap-2.5">
                <ClipboardList className="h-5 w-5 text-ocean-dark" />
                <h2 className="font-serif text-xl text-ink">Your Enquiry Basket</h2>
              </div>
              <button
                onClick={closeDrawer}
                aria-label="Close enquiry basket"
                className="flex h-9 w-9 items-center justify-center rounded-full text-ink-light hover:bg-ocean/5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
                <ClipboardList className="mb-4 h-10 w-10 text-ink-muted/40" strokeWidth={1.25} />
                <p className="font-medium text-ink">Your enquiry basket is empty</p>
                <p className="mt-1 text-sm text-ink-muted">
                  Browse our products and add items to request a consolidated wholesale quote.
                </p>
                <Button href="/products" variant="primary" size="sm" className="mt-6">
                  Browse Products
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <li key={item.slug} className="flex gap-3 rounded-xl2 border border-ocean/10 p-3">
                        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                          <ProductMedia src={item.image} />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <p className="text-sm font-semibold leading-tight text-ink">{item.name}</p>
                            <p className="text-xs text-ink-muted">SKU: {item.sku}</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 rounded-full border border-ocean/15 px-1">
                              <button
                                onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                                className="flex h-6 w-6 items-center justify-center text-ink-light hover:text-ocean-dark"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-3.5 w-3.5" />
                              </button>
                              <span className="w-6 text-center text-xs font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                                className="flex h-6 w-6 items-center justify-center text-ink-light hover:text-ocean-dark"
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-3.5 w-3.5" />
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.slug)}
                              aria-label="Remove item"
                              className="flex h-7 w-7 items-center justify-center rounded-full text-ink-muted hover:bg-red-50 hover:text-red-500"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-ocean/10 px-6 py-5">
                  <div className="mb-4 grid grid-cols-2 gap-3 rounded-xl2 border border-ocean/10 bg-background px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-wood/10 text-wood">
                        <Weight className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-tight text-ink">{weightDisplay}</p>
                        <p className="text-[11px] text-ink-muted">Est. sample weight</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-seagreen/10 text-seagreen">
                        <Clock3 className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-tight text-ink">
                          {siteConfig.export.sampleLeadTime}
                        </p>
                        <p className="text-[11px] text-ink-muted">Dispatch time</p>
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 text-xs text-ink-muted">
                    {itemCount} unit{itemCount === 1 ? '' : 's'} across {items.length} SKU
                    {items.length === 1 ? '' : 's'}. Final pricing is confirmed after review of your
                    target markets, quantities, and customisation needs.
                  </p>
                  <Button
                    href="/contact?intent=consolidated-quote"
                    variant="primary"
                    className="w-full"
                    onClick={closeDrawer}
                  >
                    Request Consolidated Quote
                  </Button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
