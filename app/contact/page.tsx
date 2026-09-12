import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Clock, MessageCircle, ClipboardList } from 'lucide-react';
import BuyerEnquiryForm from '@/components/forms/BuyerEnquiryForm';
import PageHero from '@/components/ui/PageHero';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Contact Us — Get a Wholesale Quote',
  description:
    'Contact MeaningWood Crafts for wholesale pricing, samples, or export documentation. Our team responds to international buyer enquiries within 1–2 business days.',
  alternates: { canonical: '/contact' },
};

interface ContactPageProps {
  searchParams: { intent?: string };
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const isConsolidatedQuote = searchParams.intent === 'consolidated-quote';

  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact MeaningWood Crafts',
    url: `${siteConfig.domain}/contact`,
  };

  return (
    <>
      <JsonLd data={contactJsonLd} />
      <PageHero
        eyebrow="Contact Us"
        title="Let's Talk About Your Order"
        description="Whether you need wholesale pricing, a sample, or export documentation guidance, our team responds to every enquiry personally within 1–2 business days."
        image="/photos/stock/boardwalk-to-the-sea.jpg"
        align="left"
      />

      <section className="bg-background/60 py-16 sm:py-20">
        <div className="container grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr]">
          <div className="space-y-6">
            <div className="rounded-xl2 border border-ocean/10 bg-white p-6 shadow-soft">
              <h2 className="mb-5 font-serif text-xl text-ink">Reach Us Directly</h2>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-wood" />
                  <span className="text-ink-light">
                    {siteConfig.address.line1}
                    <br />
                    {siteConfig.address.line2}, {siteConfig.address.country}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-wood" />
                  <a href={`mailto:${siteConfig.email.sales}`} className="text-ink-light hover:text-ocean-dark">
                    {siteConfig.email.sales}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-wood" />
                  <a href={`tel:${siteConfig.phone.e164}`} className="text-ink-light hover:text-ocean-dark">
                    {siteConfig.phone.display}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-wood" />
                  <span className="text-ink-light">Mon–Sat, 9:30 AM – 6:30 PM IST</span>
                </li>
              </ul>

              <a
                href={`https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(siteConfig.whatsapp.defaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>

            <div className="rounded-xl2 border border-dashed border-ocean/20 p-6 text-sm text-ink-light">
              <p className="font-medium text-ink">What happens after you submit?</p>
              <ol className="mt-3 space-y-2">
                <li>1. Our export team reviews your enquiry within 1–2 business days.</li>
                <li>2. We respond with indicative pricing, MOQ, and a recommended next step.</li>
                <li>3. If it&apos;s a fit, we move to sample approval and production planning.</li>
              </ol>
            </div>
          </div>

          <div className="rounded-xl2 border border-ocean/10 bg-white p-6 shadow-soft sm:p-10">
            {isConsolidatedQuote && (
              <div className="mb-6 flex items-start gap-3 rounded-lg bg-seagreen/10 px-4 py-3 text-sm text-ocean-dark">
                <ClipboardList className="mt-0.5 h-5 w-5 shrink-0 text-seagreen" />
                <span>
                  Your Enquiry Basket items are ready to be included in this submission — complete the
                  form below to request a consolidated quote.
                </span>
              </div>
            )}
            <h2 className="mb-6 font-serif text-2xl text-ink">International Buyer Enquiry Form</h2>
            <BuyerEnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
