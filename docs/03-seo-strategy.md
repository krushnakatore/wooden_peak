# SEO Strategy & Metadata Matrix

All titles/descriptions below are implemented as the Next.js Metadata API export on each route (see the `metadata` const in each `page.tsx`). This document is the reference table plus the strategy notes that don't live in code.

## 1. Metadata matrix

| Page | URL Slug | Title Tag | Meta Description | H1 |
|---|---|---|---|---|
| Home | `/` | Wooden Handicrafts & Beach Decor Exporter from India \| MeaningWood Crafts | MeaningWood Crafts manufactures and exports wooden beach decor, souvenirs, table decor, and custom gifts to importers and resorts in Mauritius, USA, Australia, Europe, UAE, and Canada. MOQ from 500 pieces. | Wooden Décor & Souvenirs, Crafted for Wholesale. |
| About | `/about` | About Us — Wooden Handicrafts Manufacturer & Exporter | MeaningWood Crafts is an India-based manufacturer and exporter of wooden handicrafts and beach decor, built to serve importers, resorts, and retailers with reliable production and export support. | Wooden Décor and Souvenirs, Manufactured for the World |
| Products (all) | `/products` | Wholesale Wooden Handicrafts & Decor Catalogue | Browse our full wholesale range of beach theme decor, wooden souvenirs, table decor, home decor, and honeymoon souvenirs. MOQ from 500 pieces per SKU, private label available. | Our Wholesale Product Range |
| Product detail | `/products/[slug]` | {Product Name} \| Wholesale {Category} | {Short description}. SKU: {sku}. MOQ: {moq}. Material: {material}. Request wholesale pricing and samples. | {Product Name} |
| Custom & Private Label | `/custom-private-label` | Custom & Private Label Wooden Gifts | Build a private label wooden decor or souvenir collection — logo engraving, destination branding, custom packaging, and full custom design programmes. MOQ from 500 pieces. | Create a Custom Collection Built Entirely Around Your Brand |
| Export Capabilities | `/export-capabilities` | Export Capabilities, Quality Control & Packaging Standards | Production capacity, MOQ, shipping terms, quality control workflow, and export packaging standards for a wooden handicrafts manufacturer and exporter from India. | Fact-Based Production, Quality, and Shipping Capabilities |
| Catalogue | `/catalogue` | Request Our Wholesale Product Catalogue | Request the full MeaningWood Crafts wholesale catalogue — product specifications, MOQs, materials, and customisation options across all six categories. | Get the Full MeaningWood Crafts Wholesale Catalogue |
| Blog index | `/blog` | Export & Sourcing Insights Blog | Practical sourcing, export, and wholesale insights for importers, distributors, and resort buyers working with wooden handicrafts and beach decor suppliers. | Export & Sourcing Insights |
| Blog post | `/blog/[slug]` | {Article title} | {Meta description — see `lib/blog-data.ts`} | {Article title} |
| Contact | `/contact` | Contact Us — Get a Wholesale Quote | Contact MeaningWood Crafts for wholesale pricing, samples, or export documentation. Our team responds to international buyer enquiries within 1–2 business days. | Let's Talk About Your Order |
| Privacy Policy | `/privacy-policy` | Privacy Policy | How MeaningWood Crafts collects, uses, and protects information submitted through this website. | Privacy Policy |
| Terms & Conditions | `/terms-and-conditions` | Terms & Conditions | Terms and conditions governing use of the MeaningWood Crafts website and wholesale ordering process. | Terms & Conditions |
| Shipping & Sample Policy | `/shipping-sample-policy` | Shipping & Sample Policy | How MeaningWood Crafts handles sample requests, sample costs, bulk shipping terms, and export documentation. | Shipping & Sample Policy |

**Title tag pattern:** `%s | MeaningWood Crafts` (set as a template in `app/layout.tsx`), so every page title is automatically brand-suffixed except the homepage, which uses the full default title.

## 2. H2 hierarchy (representative — Home & Product Detail)

**Home:** H1 (hero) → H2 per section eyebrow+heading (Product Categories, Featured Products, Why Buyers Choose Us, Perfect for Your Business, Customisation & Private Label, How It Works, Export Capabilities, Get Our Catalogue, Buyer Confidence, Final CTA).

**Product Detail:** H1 = product name. No H2s needed on this page — spec table and CTAs are the primary content; related products section on the same route uses an H2 ("Related Products").

## 3. Schema.org / JSON-LD markup implemented

| Schema type | Where | Purpose |
|---|---|---|
| `Organization` | Root layout (every page) | Brand identity, logo, sameAs social profiles, contact point |
| `BreadcrumbList` | Products, Product Detail, Custom & Private Label, Export Capabilities, Catalogue, Blog, About | Rich snippet breadcrumbs in SERPs |
| `Product` | Product Detail | Name, SKU, material, brand, offer availability (price omitted — B2B "contact for pricing" model) |
| `Article` | Blog Post | Headline, description, publisher |
| `ContactPage` | Contact | Entity typing for the contact page |

All implemented via the shared `components/JsonLd.tsx` helper — see `app/layout.tsx`, `app/products/[slug]/page.tsx`, etc.

## 4. Image alt text convention

Since this build ships with placeholder imagery (see `components/PlaceholderImage.tsx`), every placeholder carries an `aria-label`/`label` describing what the real photograph will show (e.g., "Engraved Wooden Beach Compass Wall Decor — image 1"). **Before launch**, replace each placeholder with a real photograph and carry the same descriptive, keyword-natural alt text pattern:

```
{Product Name} — {angle/context}, e.g.:
"Engraved wooden beach compass wall decor — lifestyle shot on driftwood shelf"
"Mango wood serving tray with brass handles — top-down product shot"
```

Avoid keyword-stuffed alt text ("wooden handicraft exporter India cheap wholesale") — search engines and screen readers both penalise/ignore it.

## 5. Target keyword map

| Keyword | Primary page | Supporting content |
|---|---|---|
| wooden handicrafts exporter from India | Home, About | Blog: "How to Choose a Reliable Wooden Handicrafts Exporter from India" |
| wholesale beach decor supplier Mauritius | Home, Products (Beach Theme category) | Blog: "Sourcing Wholesale Beach Decor for Mauritius" |
| private label wooden souvenirs | Custom & Private Label | Blog: "Private Label Wooden Souvenirs" |
| honeymoon souvenir wholesale supplier | Products (Couple & Honeymoon category) | Blog: "Honeymoon & Couple Souvenir Trends 2026" |
| export packaging wooden decor supplier | Export Capabilities | Blog: "Export Packaging Standards for Wooden Decor" |

## 6. Five blog topic outlines

Full outlines (target keyword, meta description, H2 structure) live in `lib/blog-data.ts` and render live at `/blog` and `/blog/[slug]`:

1. **How to Choose a Reliable Wooden Handicrafts Exporter from India: A Buyer's Checklist** — `wooden handicrafts exporter from India`
2. **Sourcing Wholesale Beach Decor for Mauritius: What Resort and Gift Shop Buyers Should Know** — `wholesale beach decor supplier Mauritius`
3. **Private Label Wooden Souvenirs: A Practical Guide for Resort and Hospitality Brands** — `private label wooden souvenirs`
4. **Honeymoon & Couple Souvenir Trends Retailers Should Stock in 2026** — `honeymoon souvenir wholesale supplier`
5. **Export Packaging Standards for Wooden Decor: What Importers Should Require** — `export packaging wooden decor supplier`

## 7. Technical SEO already implemented

- `app/sitemap.ts` — auto-generated XML sitemap covering all static routes, products, and blog posts.
- `app/robots.ts` — allows all crawling, points to the sitemap.
- Canonical URLs (`alternates.canonical`) set on every page.
- OpenGraph + Twitter card metadata on the root layout.
- Semantic heading hierarchy (one H1 per page, no skipped levels).

## 8. Pre-launch SEO to-dos

- [ ] Replace `siteConfig.domain` placeholder assumptions with the final production domain if it differs.
- [ ] Add real Organization `logo` file at `/public/logo.png` (referenced in the JSON-LD).
- [ ] Verify/replace social profile URLs in `lib/site-config.ts`.
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools post-launch.
- [ ] Replace placeholder product photography and carry over the alt-text convention above.
