# MeaningWood Crafts — B2B Export Website

A production-ready Next.js 14 (App Router) B2B website for MeaningWood Crafts, a manufacturer and exporter of wooden handicrafts and beach decor. Built for international wholesale buyers — importers, distributors, resort gift shops, and corporate gifting agencies.

## Stack

- **Framework:** Next.js 14 (App Router, TypeScript)
- **Styling:** Tailwind CSS (custom coastal design system — see `tailwind.config.ts`)
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Forms:** React Hook Form + Zod validation
- **State:** React Context (Enquiry Basket, persisted to `localStorage`)

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. Run `npm run build` to verify a production build, and `npm run typecheck` for a standalone TypeScript check.

## Project structure

```
app/                      Routes (App Router) — one folder per page
  products/[slug]/        Dynamic product detail pages
  blog/[slug]/            Dynamic blog article pages
components/
  home/                   The 11 homepage sections
  forms/                  React Hook Form components (buyer enquiry, custom order, sample request, catalogue request)
  ui/                     Shared primitives (Button, SectionHeading, AnimatedSection)
  PlaceholderImage.tsx    CSS/gradient placeholder used everywhere real photography will go
context/
  EnquiryContext.tsx      "Enquiry Basket" global state
lib/
  site-config.ts          All brand facts, contact details, nav, export metrics — start here
  products-data.ts        Sample product catalogue (12 SKUs across 6 categories)
  categories-data.ts      The 6 product categories
  blog-data.ts            5 blog post outlines (target keyword + structure)
  schemas.ts              Zod validation schemas for every form
docs/                     Strategic deliverables — sitemap, wireframe, SEO matrix, launch checklist
```

## Before you launch

This is a fully functional, real codebase — but it ships with clearly marked placeholder content everywhere a real business fact, image, or legal review is required (`[Add ...]`, `[Verify ...]`, `[Confirm ...]`). Search the repo for those markers, and work through **`docs/04-launch-checklist.md`** before going live. In short, you'll need to:

1. Fill in real contact details, social links, and export facts in `lib/site-config.ts`.
2. Replace the 12 sample products with your verified catalogue.
3. Replace `PlaceholderImage` usage with real product photography.
4. Wire the four forms to a real backend (email/CRM) — each has an `[Integration point]` comment marking exactly where.
5. Have a lawyer review the three legal pages before publishing them as final.

## Documentation

See the `docs/` folder for the sitemap, homepage wireframe, full SEO metadata matrix, and the complete pre-launch checklist.
