import { ArrowRight, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import PhotoBackdrop from '@/components/ui/PhotoBackdrop';
import { siteConfig } from '@/lib/site-config';

export default function FinalCTA() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(
    siteConfig.whatsapp.defaultMessage
  )}`;

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <PhotoBackdrop
        image="/photos/stock/sunset-shoreline-glow.jpg"
        overlayClassName="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/60 to-ink/40"
      />
      <div className="container relative text-center">
        <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sand">
          Let&apos;s Build Your Next Order
        </span>
        <h2 className="mx-auto max-w-2xl font-serif text-3xl leading-tight text-white sm:text-4xl">
          Ready to Bring MeaningWood Crafts Into Your Retail Assortment?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
          Tell us your market, your volumes, and your customisation needs — our export team will
          respond with pricing and a sample plan within 1–2 business days.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" variant="accent" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
            Get Wholesale Quote
          </Button>
          <Button
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
            className="border-white/40 text-white hover:bg-white hover:text-ocean-dark"
            icon={<MessageCircle className="h-5 w-5" />}
          >
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
