export const siteConfig = {
  name: 'MeaningWood Crafts',
  legalName: 'MeaningWood Crafts Pvt. Ltd.', // [Add legal entity name for verification]
  tagline: 'From India to the World',
  domain: 'https://www.meaningwood.com',
  description:
    'MeaningWood Crafts is a manufacturer and exporter of wooden handicrafts, beach-theme decor, and custom souvenirs, supplying importers, wholesalers, and resort retailers across Mauritius, the USA, Australia, Europe, UAE, and Canada.',
  email: {
    sales: 'export@meaningwood.com', // [Add verified export sales email]
    general: 'hello@meaningwood.com', // [Add verified general email]
  },
  phone: {
    display: '+91 8788442429', // [Add verified phone number]
    e164: '+918788442429', // [Add verified phone number in E.164 format]
  },
  whatsapp: {
    number: '918788442429', // [Add verified WhatsApp Business number, digits only, country code first]
    defaultMessage: "Hello MeaningWood Crafts, I'd like to enquire about wholesale wooden handicrafts.",
  },
  address: {
    line1: '[Add factory / registered office address line 1]',
    line2: '[Add city, state, PIN code]',
    country: 'India',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/meaningwood-crafts', // [Verify URL]
    instagram: 'https://www.instagram.com/meaningwoodcrafts', // [Verify URL]
    facebook: 'https://www.facebook.com/meaningwoodcrafts', // [Verify URL]
    youtube: 'https://www.youtube.com/@meaningwoodcrafts', // [Verify URL]
  },
  export: {
    port: 'Nhava Sheva (JNPT), India',
    airport: 'Mumbai (BOM) / Delhi (DEL)',
    incoterms: ['EXW', 'FOB', 'CIF', 'DDP (on request)'],
    monthlyCapacityUnits: '10,000+ pieces / month',
    standardMOQUnits: '500 pieces per SKU (mixed-SKU MOQ available)',
    standardMOQShort: '500 pieces per SKU',
    sampleLeadTime: '7–10 working days',
    bulkLeadTime: '25–40 days after sample approval, depending on order volume',
    primaryMarkets: ['Mauritius', 'USA', 'Australia', 'UAE', 'Europe (EU + UK)', 'Canada'],
  },
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Custom & Private Label', href: '/custom-private-label' },
    { label: 'Export Capabilities', href: '/export-capabilities' },
    { label: 'Catalogue', href: '/catalogue' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' },
  ],
  footerLinks: {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Export Capabilities', href: '/export-capabilities' },
      { label: 'Custom & Private Label', href: '/custom-private-label' },
      { label: 'Blog', href: '/blog' },
    ],
    products: [
      { label: 'Beach Theme Decor', href: '/products?category=beach-theme-decor' },
      { label: 'Wooden Souvenirs', href: '/products?category=wooden-souvenirs' },
      { label: 'Table Decor', href: '/products?category=table-decor' },
      { label: 'Home Decor', href: '/products?category=home-decor' },
      { label: 'Couple & Honeymoon Souvenirs', href: '/products?category=couple-honeymoon-souvenirs' },
      { label: 'Custom Wooden Gifts', href: '/products?category=custom-wooden-gifts' },
    ],
    compliance: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions' },
      { label: 'Shipping & Sample Policy', href: '/shipping-sample-policy' },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
