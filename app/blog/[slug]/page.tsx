import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CalendarClock, ArrowLeft, Target } from 'lucide-react';
import { blogOutlines, getBlogOutlineBySlug } from '@/lib/blog-data';
import JsonLd from '@/components/JsonLd';
import Button from '@/components/ui/Button';
import PhotoBackdrop from '@/components/ui/PhotoBackdrop';
import { siteConfig } from '@/lib/site-config';

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return blogOutlines.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getBlogOutlineBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogOutlineBySlug(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    publisher: { '@type': 'Organization', name: siteConfig.name },
    mainEntityOfPage: `${siteConfig.domain}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <article className="container max-w-3xl py-16 sm:py-20">
        <Link href="/blog" className="mb-8 flex items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-ocean-dark">
          <ArrowLeft className="h-4 w-4" /> Back to all articles
        </Link>

        <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-seagreen/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-seagreen">
          <CalendarClock className="h-3 w-3" /> Publishing Soon — Editorial Outline
        </span>

        <h1 className="font-serif text-3xl leading-tight text-ink sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-ink-light">{post.summary}</p>

        <div className="mt-6 flex items-center gap-2 rounded-lg bg-sand-50 px-4 py-3 text-xs font-medium text-wood">
          <Target className="h-4 w-4 shrink-0" />
          Target keyword: {post.targetKeyword}
        </div>

        <div className="mt-10 rounded-xl2 border border-dashed border-ocean/20 p-6 sm:p-8">
          <h2 className="mb-5 font-serif text-xl text-ink">Planned Article Outline</h2>
          <ol className="space-y-3">
            {post.headings.map((heading, index) => (
              <li key={heading} className="flex gap-3 text-sm text-ink-light">
                <span className="font-serif text-ocean/40">{String(index + 1).padStart(2, '0')}</span>
                {heading}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-ink-muted">
            [This article is in production. Full long-form copy will replace this outline before
            publishing.]
          </p>
        </div>

        <div className="relative mt-12 flex flex-col items-center gap-4 overflow-hidden rounded-xl2 px-6 py-10 text-center">
          <PhotoBackdrop image="/photos/stock/woven-umbrella-shoreline.jpg" overlayClassName="absolute inset-0 bg-ink/75" />
          <p className="relative max-w-md text-sm text-white/90">
            Have a sourcing question this article should cover? Ask our export team directly.
          </p>
          <Button href="/contact" variant="accent" className="relative">
            Talk to Our Export Team
          </Button>
        </div>
      </article>
    </>
  );
}
