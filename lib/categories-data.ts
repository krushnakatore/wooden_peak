import { ProductCategory } from './types';

export const categories: ProductCategory[] = [
  {
    slug: 'beach-theme-decor',
    name: 'Beach Theme Wooden Decor',
    shortName: 'Beach Theme Decor',
    description:
      'Anchors, compasses, lighthouses, and coastal wall art carved to bring the shoreline indoors — designed for resort gift shops and beachside retailers.',
    image: '/photos/products/palm-wave-coastal-accent-1.jpg',
    productCount: '40+ designs',
  },
  {
    slug: 'wooden-souvenirs',
    name: 'Wooden Souvenirs',
    shortName: 'Souvenirs',
    description:
      'Fridge magnets, keychains, and destination mementos engraved to order — high-margin, fast-moving stock for tourist and airport retail.',
    image: 'souvenir',
    productCount: '60+ designs',
  },
  {
    slug: 'table-decor',
    name: 'Wooden Table Decor',
    shortName: 'Table Decor',
    description:
      'Serving trays, coaster sets, and tabletop accents in mango and sheesham wood, finished for daily hospitality and retail use.',
    image: 'table',
    productCount: '35+ designs',
  },
  {
    slug: 'home-decor',
    name: 'Wooden Home Decor',
    shortName: 'Home Decor',
    description:
      'Wall mirrors, tealight holders, and decorative accents that anchor a premium home-and-living retail assortment.',
    image: '/photos/products/rustic-longhorn-wall-decor-1.jpg',
    productCount: '45+ designs',
  },
  {
    slug: 'couple-honeymoon-souvenirs',
    name: 'Couple & Honeymoon Souvenirs',
    shortName: 'Couple & Honeymoon',
    description:
      'Personalised photo frames, memory boxes, and keepsakes built for the honeymoon and destination-wedding gifting market.',
    image: '/photos/products/honeymoon-palm-wave-plaque-2.jpg',
    productCount: '25+ designs',
  },
  {
    slug: 'custom-wooden-gifts',
    name: 'Custom Wooden Gifts',
    shortName: 'Custom Gifts',
    description:
      'Logo-engraved corporate gifts and private-label collections built to your brand, packaging, and specification.',
    image: 'gift',
    productCount: 'Fully custom',
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}
