'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X, FileCheck2 } from 'lucide-react';
import CatalogueRequestForm from '@/components/forms/CatalogueRequestForm';

interface CatalogueRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CatalogueRequestModal({ isOpen, onClose }: CatalogueRequestModalProps) {
  const [mounted, setMounted] = useState(false);

  // Rendered via a portal: the CTA banner is a motion-animated ancestor, and a
  // transformed ancestor would otherwise turn this modal's `fixed` positioning local.
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
            className="fixed inset-0 z-[80] bg-ocean-dark/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[90] flex items-center justify-center p-4" onClick={onClose}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-xl2 bg-white p-6 shadow-lift sm:p-8"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-wood/10 text-wood">
                    <FileCheck2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ink">Get the Wholesale Catalogue</h3>
                    <p className="text-xs text-ink-muted">Instant access after a quick verification</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  className="rounded-full p-1.5 text-ink-muted hover:bg-ocean/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <CatalogueRequestForm />
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
