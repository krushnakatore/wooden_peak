import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import EnquiryBasketDrawer from '@/components/EnquiryBasketDrawer';
import JsonLd from '@/components/JsonLd';
import { EnquiryProvider } from '@/context/EnquiryContext';
import { siteConfig } from '@/lib/site-config';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: 'MeaningWood Crafts | Wooden Handicrafts & Beach Decor Exporter from India',
    template: '%s | MeaningWood Crafts',
  },
  description: siteConfig.description,
  keywords: [
    'wooden handicrafts exporter from India',
    'wholesale beach decor supplier',
    'wooden souvenirs manufacturer India',
    'private label wooden gifts',
    'wooden decor exporter Mauritius',
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: 'website',
    url: siteConfig.domain,
    siteName: siteConfig.name,
    title: 'MeaningWood Crafts | Wooden Handicrafts & Beach Decor Exporter from India',
    description: siteConfig.description,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MeaningWood Crafts | Wooden Handicrafts & Beach Decor Exporter from India',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.domain,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.domain,
    logo: `${siteConfig.domain}/logo.png`,
    description: siteConfig.description,
    email: siteConfig.email.sales,
    telephone: siteConfig.phone.e164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.line2,
      addressCountry: siteConfig.address.country,
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.youtube,
    ],
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={organizationJsonLd} />
        <EnquiryProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
          <EnquiryBasketDrawer />
        </EnquiryProvider>
      </body>
    </html>
  );
}
