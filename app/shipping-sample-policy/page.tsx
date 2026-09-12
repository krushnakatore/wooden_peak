import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Shipping & Sample Policy',
  description: 'How MeaningWood Crafts handles sample requests, sample costs, bulk shipping terms, and export documentation.',
  alternates: { canonical: '/shipping-sample-policy' },
  robots: { index: true, follow: true },
};

export default function ShippingSamplePolicyPage() {
  return (
    <LegalLayout title="Shipping & Sample Policy" lastUpdated="[Add publish date]">
      <h2>1. Sample Requests</h2>
      <ul>
        <li>Samples can be requested from any product page or through our Custom &amp; Private Label enquiry form.</li>
        <li>Standard samples are produced and dispatched within {siteConfig.export.sampleLeadTime} of a confirmed specification.</li>
        <li>Custom or new-design samples may require additional development time, confirmed at enquiry stage.</li>
        <li>One round of sample revision is included; further revisions are quoted individually based on complexity.</li>
      </ul>

      <h2>2. Sample Costs</h2>
      <p>
        Sample product cost and courier charges are communicated to you in writing before dispatch.
        [Add specific sample pricing policy, e.g. free samples above a certain enquiry value, or
        standard sample + courier fee structure]. Sample costs are typically adjustable against your
        first confirmed bulk order, where applicable.
      </p>

      <h2>3. Sample Shipping</h2>
      <p>
        Samples are shipped via international courier (e.g., DHL, FedEx) to the address provided in
        your sample request. Delivery timelines vary by destination country and are provided at the
        time of dispatch. Import duties or taxes on sample shipments, where applicable, are the
        responsibility of the recipient. [Confirm courier partners and duty policy]
      </p>

      <h2>4. Bulk Order Shipping Terms</h2>
      <p>We offer the following Incoterms for bulk wholesale orders, confirmed per purchase order:</p>
      <ul>
        {siteConfig.export.incoterms.map((term) => (
          <li key={term}>{term}</li>
        ))}
      </ul>
      <p>
        Our primary export port is {siteConfig.export.port}; air freight is available via{' '}
        {siteConfig.export.airport} for smaller or time-sensitive shipments.
      </p>

      <h2>5. Lead Times</h2>
      <p>
        Standard bulk production lead time is {siteConfig.export.bulkLeadTime}, counted from sample
        approval and receipt of any agreed advance payment. Lead times may vary based on order volume,
        customisation complexity, and seasonal demand, and will be confirmed in your order
        confirmation.
      </p>

      <h2>6. Export Packaging</h2>
      <p>
        All bulk orders are packed in export-grade cartons (3-ply or 5-ply corrugated board) with
        appropriate internal cushioning for the product type. Wood packaging materials, where used,
        follow ISPM 15 fumigation requirements for international shipping. [Confirm current
        fumigation/WPM certificate details before shipment]
      </p>

      <h2>7. Export Documentation</h2>
      <p>
        Standard export documentation (commercial invoice, packing list, certificate of origin, and
        bill of lading/airway bill) is provided with every bulk shipment. Additional documentation
        (e.g., fumigation certificate, inspection certificate) can be arranged on request and may
        incur additional cost. [Add any country-specific documentation your primary markets require]
      </p>

      <h2>8. Delays and Force Majeure</h2>
      <p>
        While we plan production and shipping schedules carefully, delays may occur due to customs
        processing, carrier schedules, weather, or other events outside our reasonable control. We
        will communicate any known delays as early as possible.
      </p>

      <h2>9. Contact</h2>
      <p>
        For sample or shipping questions, contact our export team at{' '}
        <a href={`mailto:${siteConfig.email.sales}`}>{siteConfig.email.sales}</a>.
      </p>
    </LegalLayout>
  );
}
