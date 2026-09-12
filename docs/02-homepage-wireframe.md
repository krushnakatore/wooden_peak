# Homepage UX Wireframe — Structural Breakdown

Implemented in `app/page.tsx` via `components/home/*.tsx`. ASCII layout below reflects the desktop breakpoint; all sections collapse to single-column stacks on mobile.

```
┌──────────────────────────────────────────────────────────────────────────┐
│ TOP BAR: "Manufacturer & Exporter — India"  |  "MOQ from 500 pieces/SKU" │
├──────────────────────────────────────────────────────────────────────────┤
│ LOGO   Home About Products Custom ExportCap Catalogue Blog Contact  [🧺] │
│                                             [Request Catalogue][Get Quote]│
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  S1 · HERO (full-bleed coastal image + gradient overlay)                 │
│  ┌────────────────────────────┐                                          │
│  │ "FROM INDIA TO THE WORLD"  │                                          │
│  │ H1: Wooden Décor &         │                                          │
│  │     Souvenirs, Crafted     │                                          │
│  │     for Wholesale.         │                                          │
│  │ Sub-copy (2-3 lines)       │                                          │
│  │ [Get Wholesale Quote →]  [Request Full Catalogue]                     │
│  │ [Made in India][Export-Ready][Wholesale Orders][Custom Designs]       │
│  └────────────────────────────┘                                          │
│                                                                            │
│  S2 · PRODUCT CATEGORIES GRID (3-col → 1-col mobile)                     │
│  [Beach Theme] [Souvenirs] [Table Decor]                                  │
│  [Home Decor]  [Couple/Honeymoon] [Custom Gifts]                          │
│  each: image, name, description, "Explore Category →"                    │
│                                                                            │
│  S3 · FEATURED PRODUCTS (4-col → 2-col → 1-col)                          │
│  header + "View All Products →"                                          │
│  [Card: badge, SKU, name, material/MOQ, "Contact for pricing",           │
│         Add to Basket | Send Enquiry] × 4                                │
│                                                                            │
│  S4 · WHY BUYERS CHOOSE US (4-col grid, 8 items, icon+title+copy)         │
│                                                                            │
│  S5 · PERFECT FOR YOUR BUSINESS (dark section, 4-col segment cards)       │
│  [Resorts] [Souvenir Shops] [Distributors] [Corporate Buyers]             │
│  each: icon, description, 3 bullet "best fits"                           │
│                                                                            │
│  S6 · CUSTOMISATION SHOWCASE (2-col: image | copy+options+CTA)           │
│  "Create a Custom Collection →"                                          │
│                                                                            │
│  S7 · 4-STEP ORDER PROCESS (4-col, numbered, connected by a rule)         │
│  01 Select → 02 Request Quote → 03 Approve Sample → 04 Production/Dispatch│
│                                                                            │
│  S8 · EXPORT CAPABILITIES METRICS (dark, 3-col grid, 6 metric tiles)      │
│  Capacity | MOQ | Port | Shipping Terms | Lead Time | Markets            │
│  "View Full Export Capabilities →"                                       │
│                                                                            │
│  S9 · CATALOGUE DOWNLOAD CTA (wood-brown banner, centered)                │
│  "Get Our Full Wholesale Product Catalogue" [Request Catalogue]           │
│                                                                            │
│  S10 · BUYER REVIEWS (placeholder state)                                  │
│  ★★★★★  "Verified Buyer Reviews Coming Soon"                             │
│                                                                            │
│  S11 · FINAL CTA (full-bleed gradient, centered)                         │
│  "Ready to Bring MeaningWood Crafts Into Your Retail Assortment?"        │
│  [Get Wholesale Quote] [Chat on WhatsApp]                                 │
│                                                                            │
├──────────────────────────────────────────────────────────────────────────┤
│ FOOTER: Brand+badge | Company links | Product links | Contact+Newsletter │
│ Compliance links · © MeaningWood Crafts                                  │
└──────────────────────────────────────────────────────────────────────────┘
                                                        [💬 WhatsApp - floating]
```

## Layout principles applied

- **F-pattern hero**: headline + CTA pair top-left, trust badges bottom, image fills the frame — optimised for a buyer scanning in under 5 seconds.
- **Progressive trust-building**: category → product proof → why-us → segment fit → customisation → process → hard numbers → lead magnet → social proof placeholder → final ask. Each section answers the next objection a wholesale buyer would raise.
- **Repeated conversion points**: a CTA appears roughly every 1.5 scroll-lengths (hero, S3 cards, S6, S9, S11) rather than only at the top and bottom.
- **No price on any card** — every commercial surface reads "Contact us for wholesale pricing" per the B2B brief.
