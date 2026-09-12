import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CalendarClock } from 'lucide-react';
import { blogOutlines } from '@/lib/blog-data';
import PageHero from '@/components/ui/PageHero';
import JsonLd from '@/components/JsonLd';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Export & Sourcing Insights Blog',
  description:
    'Practical sourcing, export, and wholesale insights for importers, distributors, and resort buyers working with wooden handicrafts and beach decor suppliers.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.domain },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteConfig.domain}/blog` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <PageHero
        eyebrow="Insights"
        title="Export & Sourcing Insights"
        description="Practical, buyer-focused guidance on sourcing wooden handicrafts and beach decor — written for importers, distributors, and resort buyers."
        image="/photos/stock/aerial-pastel-shoreline.jpg"
        align="left"
      />

      <section className="bg-background/60 py-16 sm:py-20">
        <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogOutlines.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-xl2 border border-ocean/10 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
            >
              <span className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full bg-seagreen/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-seagreen">
                <CalendarClock className="h-3 w-3" /> Publishing Soon
              </span>
              <h2 className="font-serif text-xl leading-snug text-ink transition-colors group-hover:text-seagreen">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-light">{post.summary}</p>
              <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-ocean-dark">
                Read Outline
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
