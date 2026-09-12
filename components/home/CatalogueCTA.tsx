'use client';

import { useState } from 'react';
import { Download, FileCheck2 } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import PhotoBackdrop from '@/components/ui/PhotoBackdrop';
import CatalogueRequestModal from '@/components/forms/CatalogueRequestModal';

export default function CatalogueCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-white/60 py-20 sm:py-28">
      <div className="container">
        <AnimatedSection className="relative overflow-hidden rounded-xl2 px-6 py-14 text-center sm:px-12">
          <PhotoBackdrop
            image="/photos/lifestyle/mauritius-stall-family.jpg"
            overlayClassName="absolute inset-0 bg-wood/85"
          />
          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-wood-dark shadow-soft">
              <FileCheck2 className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">
              Get Our Full Wholesale Product Catalogue
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              Download our complete catalogue with product specifications, MOQs, and customisation
              options across all six categories — sent directly to your business email.
            </p>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold tracking-wide text-ink shadow-soft transition-all duration-200 hover:bg-background sm:text-lg"
              >
                Request Catalogue
                <Download className="h-5 w-5 text-wood-dark" />
              </button>
            </div>
            <p className="mt-4 text-xs text-white/70">
              Free for verified business enquiries. No spam — just product information.
            </p>
          </div>
        </AnimatedSection>
      </div>

      <CatalogueRequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
