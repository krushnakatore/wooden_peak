import { BlogOutline } from './types';

export const blogOutlines: BlogOutline[] = [
  {
    slug: 'wooden-handicrafts-exporter-from-india-guide',
    title: 'How to Choose a Reliable Wooden Handicrafts Exporter from India: A Buyer’s Checklist',
    targetKeyword: 'wooden handicrafts exporter from India',
    metaDescription:
      'A practical checklist for importers and wholesalers vetting a wooden handicrafts exporter from India — production capacity, MOQ, quality control, and shipping terms explained.',
    summary:
      'A trust-building, top-of-funnel guide aimed at international buyers researching Indian suppliers for the first time. Positions MeaningWood Crafts as a knowledgeable, transparent partner without being overtly salesy.',
    headings: [
      'Why India remains a leading source for wooden handicrafts and decor',
      'Production capacity and MOQ: what to ask before you commit',
      'Quality control: what a proper pre-shipment inspection should cover',
      'Understanding Incoterms: EXW vs FOB vs CIF for first-time importers',
      'Lead times and seasonal capacity planning for peak retail seasons',
      'Red flags to watch for when vetting a new exporter',
      'A short checklist you can use in your next supplier call',
    ],
  },
  {
    slug: 'wholesale-beach-decor-supplier-mauritius',
    title: 'Sourcing Wholesale Beach Decor for Mauritius: What Resort and Gift Shop Buyers Should Know',
    targetKeyword: 'wholesale beach decor supplier Mauritius',
    metaDescription:
      'A sourcing guide for Mauritius-based resort gift shops and souvenir retailers looking for a wholesale beach decor supplier — product trends, shipping routes, and customisation options.',
    summary:
      'A geo-targeted guide for the primary market (Mauritius), covering practical sourcing considerations specific to island retailers and resort buyers, reinforcing MeaningWood as a specialist in this corridor.',
    headings: [
      'Why beach-theme wooden decor continues to outperform in resort retail',
      'Shipping to Mauritius: sea freight timelines and consolidation options from India',
      'Best-selling categories for resort gift shops: what sells at checkout counters',
      'Customising a collection for a Mauritian audience (multilingual engraving, local motifs)',
      'Sample-to-shelf timeline: what to plan for ahead of peak tourist season',
      'Working with a single supplier vs multiple: consolidating your beach decor sourcing',
    ],
  },
  {
    slug: 'private-label-wooden-souvenirs-resort-brands',
    title: 'Private Label Wooden Souvenirs: A Practical Guide for Resort and Hospitality Brands',
    targetKeyword: 'private label wooden souvenirs',
    metaDescription:
      'How resort and hospitality brands can launch a private label wooden souvenir line — logo engraving, custom packaging, MOQ, and timelines explained.',
    summary:
      'A mid-funnel guide targeting resort chains and hospitality brands considering a branded souvenir or amenity line, funneling directly into the Custom & Private Label page.',
    headings: [
      'Why branded souvenirs outperform generic stock for guest retention',
      'What "private label" actually includes: logo engraving vs full custom tooling',
      'Minimum order quantities and typical private label investment ranges',
      'Packaging and unboxing: how retail-ready presentation affects perceived value',
      'A realistic private label timeline: design, sample, approval, production, delivery',
      'Case-style walkthrough: from resort brief to shelf-ready product', // [Add real case study once available]
    ],
  },
  {
    slug: 'honeymoon-souvenir-trends-2026',
    title: 'Honeymoon & Couple Souvenir Trends Retailers Should Stock in 2026',
    targetKeyword: 'honeymoon souvenir wholesale supplier',
    metaDescription:
      'Emerging honeymoon and couple souvenir trends for 2026 — personalisation, sustainable materials, and keepsake formats wholesale buyers should be stocking now.',
    summary:
      'A trend-led content piece for gift shop and hotel buyers, designed to rank for seasonal and trend-based search intent while showcasing the couple/honeymoon product category.',
    headings: [
      'Why personalisation is now a baseline expectation, not a premium add-on',
      'Top 5 honeymoon souvenir formats trending with destination-wedding retailers',
      'Sustainable and natural-material gifting: what buyers are asking suppliers for',
      'Merchandising honeymoon souvenirs for maximum counter conversion',
      'How to test a new couple-souvenir SKU with a small sample order before committing to bulk',
    ],
  },
  {
    slug: 'export-packaging-standards-wooden-decor',
    title: 'Export Packaging Standards for Wooden Decor: What Importers Should Require',
    targetKeyword: 'export packaging wooden decor supplier',
    metaDescription:
      'What proper export packaging for wooden decor and handicrafts should include — carton specifications, cushioning, fumigation certificates, and damage-in-transit prevention.',
    summary:
      'A technical, trust-building article for procurement and logistics contacts within a buying organisation, reinforcing operational credibility around export capabilities.',
    headings: [
      'Why packaging is the most overlooked cause of wholesale order disputes',
      'Carton specifications: ply strength, cushioning, and stacking standards',
      'Fumigation and wood packaging material (WPM) compliance for international shipping',
      'How fragile items (mirrors, glass inlay) should be packed for ocean freight',
      'What to request in a pre-shipment packaging inspection report',
      'A short packaging specification checklist for your next purchase order',
    ],
  },
];

export function getBlogOutlineBySlug(slug: string) {
  return blogOutlines.find((b) => b.slug === slug);
}
