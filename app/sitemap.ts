import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { products } from '@/lib/products-data';
import { blogOutlines } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/products',
    '/custom-private-label',
    '/export-capabilities',
    '/catalogue',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/shipping-sample-policy',
  ].map((route) => ({
    url: `${siteConfig.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.7,
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteConfig.domain}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  const blogRoutes = blogOutlines.map((post) => ({
    url: `${siteConfig.domain}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
