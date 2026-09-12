import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How MeaningWood Crafts collects, uses, and protects information submitted through this website.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="[Add publish date]">
      <p>
        {siteConfig.legalName} (&quot;MeaningWood Crafts&quot;, &quot;we&quot;, &quot;us&quot;, or
        &quot;our&quot;) respects the privacy of visitors to {siteConfig.domain} (the
        &quot;Website&quot;) and the businesses who submit enquiries to us. This Privacy Policy
        explains what information we collect, how we use it, and the choices you have.
      </p>

      <h2>1. Information We Collect</h2>
      <p>When you interact with this Website, we may collect the following categories of information:</p>
      <ul>
        <li>
          <strong>Enquiry and form data:</strong> name, company name, business email, phone/WhatsApp
          number, country, business type, product interests, order quantities, target markets, and
          any message content you submit through our enquiry, custom order, sample request, or
          catalogue request forms.
        </li>
        <li>
          <strong>Uploaded files:</strong> logo files or reference images you upload through our
          Custom &amp; Private Label enquiry form.
        </li>
        <li>
          <strong>Usage data:</strong> pages visited, browser type, device type, and general location
          (country/city level), collected automatically through standard analytics tools. [Name
          specific analytics tools used, e.g. Google Analytics, once integrated]
        </li>
        <li>
          <strong>Cookies and similar technologies:</strong> used to remember your Enquiry Basket
          contents and improve site functionality. [Add cookie policy detail once analytics/marketing
          cookies are finalised]
        </li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To respond to your wholesale, sample, custom order, or catalogue enquiries.</li>
        <li>To prepare quotations, proforma invoices, and export documentation.</li>
        <li>To communicate with you regarding your order, sample, or ongoing business relationship.</li>
        <li>To improve our Website, product range, and customer communication.</li>
        <li>To send occasional product or market updates, where you have opted in via our newsletter.</li>
      </ul>
      <p>We do not sell or rent your personal or business information to third parties.</p>

      <h2>3. How We Share Information</h2>
      <p>We may share information with:</p>
      <ul>
        <li>Logistics, freight-forwarding, and customs partners strictly to fulfil your order or sample request.</li>
        <li>Email delivery, form-processing, or CRM service providers who help us manage enquiries. [Name specific service providers once integrated]</li>
        <li>Authorities, where required by law.</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        We retain enquiry and order-related information for as long as necessary to service your
        enquiry, maintain business records, and comply with applicable tax, export, and accounting
        obligations. [Add specific retention periods once confirmed with your compliance advisor]
      </p>

      <h2>5. Your Rights</h2>
      <p>
        Depending on your jurisdiction, you may have rights to access, correct, or request deletion of
        your personal information. To exercise these rights, contact us at{' '}
        <a href={`mailto:${siteConfig.email.general}`}>{siteConfig.email.general}</a>.
      </p>

      <h2>6. Data Security</h2>
      <p>
        We apply reasonable technical and organisational measures to protect the information you
        submit to us. However, no method of transmission over the internet is completely secure, and
        we cannot guarantee absolute security.
      </p>

      <h2>7. International Data Transfers</h2>
      <p>
        As an India-based exporter serving international buyers, information you submit may be
        processed in India and in the countries where our service providers operate. [Add specific
        cross-border transfer safeguards once service providers are finalised]
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &quot;Last updated&quot; date at the
        top of this page reflects the most recent revision.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        For questions about this Privacy Policy, contact us at{' '}
        <a href={`mailto:${siteConfig.email.general}`}>{siteConfig.email.general}</a> or{' '}
        {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.country}.
        [Verify registered address]
      </p>
    </LegalLayout>
  );
}
