import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions governing use of the MeaningWood Crafts website and wholesale ordering process.',
  alternates: { canonical: '/terms-and-conditions' },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="[Add publish date]">
      <p>
        These Terms &amp; Conditions (&quot;Terms&quot;) govern your use of {siteConfig.domain} (the
        &quot;Website&quot;) operated by {siteConfig.legalName} (&quot;MeaningWood Crafts&quot;,
        &quot;we&quot;, &quot;us&quot;). By using this Website or submitting an enquiry, you agree to
        these Terms.
      </p>

      <h2>1. Nature of This Website</h2>
      <p>
        This Website is a business-to-business (B2B) information and lead-generation platform for
        wholesale buyers, importers, distributors, and retailers. It is not a consumer e-commerce
        store. Prices, availability, and specifications shown are indicative and subject to
        confirmation via a formal quotation.
      </p>

      <h2>2. Enquiries and Quotations</h2>
      <ul>
        <li>Submitting an enquiry, sample request, or Enquiry Basket does not constitute a binding order.</li>
        <li>All orders are confirmed only upon written quotation, agreed terms, and (where applicable) receipt of deposit/payment as outlined in a formal proforma invoice.</li>
        <li>Minimum Order Quantities (MOQ), lead times, and pricing are confirmed per product and may vary based on customisation, volume, and market conditions.</li>
      </ul>

      <h2>3. Samples</h2>
      <p>
        Sample availability, cost, and shipping timelines are confirmed by our team following a
        sample request. See our{' '}
        <a href="/shipping-sample-policy">Shipping &amp; Sample Policy</a> for further detail.
      </p>

      <h2>4. Pricing and Payment Terms</h2>
      <p>
        Wholesale pricing is shared directly with verified business enquiries and is not published on
        the Website. Payment terms (e.g., advance deposit, balance before shipment, or agreed credit
        terms) are confirmed per order and detailed in the proforma invoice. [Add standard payment
        terms, accepted currencies, and payment methods]
      </p>

      <h2>5. Shipping, Delivery, and Risk</h2>
      <p>
        Shipping terms (Incoterms such as EXW, FOB, CIF, or DDP) are agreed per order. Title and risk
        of loss transfer in accordance with the agreed Incoterm. Estimated lead times are provided in
        good faith but are not guaranteed delivery dates and may be affected by factors outside our
        control (customs delays, carrier schedules, force majeure events).
      </p>

      <h2>6. Customisation and Private Label Orders</h2>
      <p>
        Custom and private label orders are subject to a separate design/feasibility review, sample
        approval, and — where applicable — a tooling or design development cost, communicated before
        production begins. Intellectual property in buyer-supplied logos, artwork, and designs remains
        with the buyer; buyers warrant that they hold the necessary rights to any artwork or branding
        submitted to us for production.
      </p>

      <h2>7. Quality and Claims</h2>
      <p>
        Products are manufactured to the specification confirmed in the approved sample. Buyers are
        responsible for inspecting goods upon arrival and must notify us of any quality claim in
        writing within [Add claim notification window, e.g. 7 days] of receipt, accompanied by
        supporting evidence (photos/videos).
      </p>

      <h2>8. Intellectual Property</h2>
      <p>
        All designs, product photography, and content on this Website that are not buyer-supplied
        remain the intellectual property of MeaningWood Crafts and may not be reproduced or used for
        competing commercial purposes without written permission.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, MeaningWood Crafts&apos; liability in connection with
        any order is limited to the value of the relevant purchase order. We are not liable for
        indirect, incidental, or consequential losses. [Have this clause reviewed against your
        jurisdiction&apos;s consumer/commercial law]
      </p>

      <h2>10. Governing Law</h2>
      <p>
        These Terms are governed by the laws of India. [Confirm jurisdiction and dispute resolution
        forum with legal counsel]
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these Terms can be sent to{' '}
        <a href={`mailto:${siteConfig.email.general}`}>{siteConfig.email.general}</a>.
      </p>
    </LegalLayout>
  );
}
