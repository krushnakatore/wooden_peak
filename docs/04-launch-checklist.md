# Website Launch Checklist

## Content & data (must-do before going live)

- [ ] Replace every `[Add ...]` / `[Verify ...]` / `[Confirm ...]` placeholder in `lib/site-config.ts` (phone, WhatsApp number, email addresses, registered address, social URLs, legal entity name).
- [ ] Replace all 12 sample products in `lib/products-data.ts` with verified real SKUs, specifications, and pricing-adjacent facts (MOQ, lead time, packaging).
- [ ] Replace `components/PlaceholderImage.tsx` usage with real product photography across the site (hero, categories, products, about, custom page).
- [ ] Have `/privacy-policy`, `/terms-and-conditions`, and `/shipping-sample-policy` reviewed by a qualified legal professional in your operating jurisdiction — they currently ship as structured drafts with placeholders.
- [ ] Fill in About Us placeholders (founding year, team size, facility details) with verified facts.
- [ ] Confirm and publish real buyer testimonials once collected — do not fabricate reviews (Section 10 currently ships as an honest "Coming Soon" placeholder by design).
- [ ] Write full long-form copy for the 5 blog posts currently shipped as structured outlines (`lib/blog-data.ts` + `/blog/[slug]`).
- [ ] Produce and link the actual downloadable PDF catalogue referenced by the Catalogue page lead magnet.

## Forms & integrations

- [ ] Wire `BuyerEnquiryForm`, `CustomPrivateLabelForm`, `CatalogueRequestForm`, and `SampleRequestModal` to a real backend (API route + email/CRM service — e.g., Resend, SendGrid, HubSpot). Integration points are marked with `[Integration point]` comments in each form component.
- [ ] Add server-side validation and rate limiting to whatever API route receives form submissions (the current honeypot field is a basic spam deterrent only, not a substitute for server-side checks).
- [ ] Connect the footer newsletter form to an email marketing provider (Mailchimp, Brevo, etc.) — see `components/Footer.tsx`.
- [ ] Decide on and implement file storage for the Custom & Private Label logo/reference image upload (S3, Cloudinary, or your CRM's attachment API).
- [ ] Add a real analytics tool (GA4, Plausible, etc.) and cookie consent banner if required for your target markets (EU/UK visitors trigger GDPR consent requirements).

## SEO

- [ ] Confirm production domain matches `siteConfig.domain` in `lib/site-config.ts` (used for canonical URLs and JSON-LD).
- [ ] Add a real `logo.png` to `/public` for the Organization JSON-LD.
- [ ] Submit `/sitemap.xml` to Google Search Console and Bing Webmaster Tools.
- [ ] Verify all meta titles/descriptions render correctly via social share debuggers (Facebook Sharing Debugger, Twitter Card Validator).
- [ ] See `docs/03-seo-strategy.md` for the full metadata matrix and pre-launch SEO items.

## Performance

- [ ] Run Lighthouse / PageSpeed Insights on the production build and address any flagged issues (image sizes especially, once real photography replaces placeholders).
- [ ] Confirm real product images are served in modern formats (WebP/AVIF) and appropriately sized — use `next/image` once real image URLs/files are available (current build uses CSS placeholders, so no `next/image` optimisation is active yet).
- [ ] Verify font loading strategy (`next/font/google` with `display: 'swap'` is already configured in `app/layout.tsx`).

## Security

- [ ] `npm audit` currently reports high-severity advisories against Next.js 14.2.x that are only fixed in Next.js 16 (a breaking major-version upgrade) — evaluate and plan that upgrade before or shortly after launch; do not treat 14.2.35 (the latest 14.x patch) as a permanent stopping point.
- [ ] Set proper `Content-Security-Policy` and security headers at the hosting layer (Vercel/Netlify config or a custom `next.config.mjs` `headers()` function) before launch.
- [ ] Ensure all environment variables/secrets (email API keys, CRM tokens) are stored server-side only, never exposed via `NEXT_PUBLIC_*` unless genuinely safe for the client.
- [ ] Add CAPTCHA or a managed spam-protection service (e.g., Cloudflare Turnstile) to public forms if spam becomes an issue beyond the honeypot field.

## Accessibility & QA

- [ ] Run an automated accessibility audit (axe DevTools or Lighthouse accessibility score) across all page templates.
- [ ] Manually test keyboard navigation through the header, mobile menu, Enquiry Basket drawer, and all forms.
- [ ] Cross-browser test (Chrome, Safari, Firefox, Edge) and cross-device test (iOS Safari, Android Chrome) — this build was smoke-tested with headless Chromium at 390px, 1240px, 1366px, 1440px, 1536px, and 1920px widths with no horizontal overflow.
- [ ] Proofread all copy one final time after placeholder replacement (search the repo for `[Add`, `[Verify`, `[Confirm`, and `[Name` to find every remaining placeholder).

## Pre-launch technical checklist

- [ ] `npm run build` completes with no errors (verified during development — re-verify after content changes).
- [ ] `npm run typecheck` passes with no errors.
- [ ] Set up production hosting (Vercel is the natural fit for Next.js App Router) with the correct environment variables.
- [ ] Configure a custom domain, SSL, and www/non-www redirect strategy.
- [ ] Set up uptime monitoring and error tracking (e.g., Sentry) for the production deployment.
