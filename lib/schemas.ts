import { z } from 'zod';

export const businessTypes = [
  'Importer',
  'Wholesaler',
  'Distributor',
  'Resort / Hotel Gift Shop',
  'Souvenir Retailer',
  'Corporate Gifting Agency',
  'E-commerce Retailer',
  'Other',
] as const;

export const incoterms = ['EXW', 'FOB', 'CIF', 'DDP', 'Not sure yet'] as const;

export const quantityRanges = [
  '500 – 1,000 pieces',
  '1,001 – 5,000 pieces',
  '5,001 – 10,000 pieces',
  '10,000+ pieces',
  'Not sure yet — need guidance',
] as const;

export const customisationTypes = [
  'Logo Engraving',
  'Private Label Packaging',
  'Destination Name Customisation',
  'Colour / Finish Change',
  'Full Custom Design',
] as const;

export const buyerEnquirySchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  companyName: z.string().min(2, 'Please enter your company name'),
  email: z.string().email('Please enter a valid business email'),
  phone: z.string().min(6, 'Please enter a valid phone / WhatsApp number'),
  country: z.string().min(2, 'Please enter your country'),
  businessType: z.enum(businessTypes, { errorMap: () => ({ message: 'Please select your business type' }) }),
  productsOfInterest: z.array(z.string()).min(1, 'Please select at least one product category'),
  estimatedQuantity: z.enum(quantityRanges, {
    errorMap: () => ({ message: 'Please select an estimated order quantity' }),
  }),
  targetMarkets: z.string().min(2, 'Please tell us your target market(s)'),
  incoterm: z.enum(incoterms).optional(),
  message: z.string().min(10, 'Please share a few details about your requirements'),
  website: z.string().optional(), // honeypot field
});

export type BuyerEnquiryFormValues = z.infer<typeof buyerEnquirySchema>;

export const customPrivateLabelSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  companyName: z.string().min(2, 'Please enter your company name'),
  email: z.string().email('Please enter a valid business email'),
  phone: z.string().min(6, 'Please enter a valid phone / WhatsApp number'),
  country: z.string().min(2, 'Please enter your country'),
  productCategory: z.string().min(2, 'Please select a product category'),
  customisationTypes: z.array(z.string()).min(1, 'Please select at least one customisation type'),
  estimatedQuantity: z.enum(quantityRanges, {
    errorMap: () => ({ message: 'Please select an estimated order quantity' }),
  }),
  targetPrice: z.string().optional(),
  requiredDeliveryDate: z.string().optional(),
  additionalRequirements: z.string().min(10, 'Please share your customisation requirements'),
  website: z.string().optional(), // honeypot field
});

export type CustomPrivateLabelFormValues = z.infer<typeof customPrivateLabelSchema>;

export const sampleRequestSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  companyName: z.string().min(2, 'Please enter your company name'),
  email: z.string().email('Please enter a valid business email'),
  phone: z.string().min(6, 'Please enter a valid phone / WhatsApp number'),
  country: z.string().min(2, 'Please enter your country'),
  shippingAddress: z.string().min(10, 'Please provide a full shipping address'),
  message: z.string().optional(),
  website: z.string().optional(), // honeypot field
});

export type SampleRequestFormValues = z.infer<typeof sampleRequestSchema>;

export const catalogueRequestSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  companyName: z.string().min(2, 'Please enter your company name'),
  email: z.string().email('Please enter a valid business email'),
  phone: z.string().min(6, 'Please enter a valid phone / WhatsApp number'),
  country: z.string().min(2, 'Please enter your country'),
  businessType: z.enum(businessTypes, { errorMap: () => ({ message: 'Please select your business type' }) }),
  website: z.string().optional(), // honeypot field
});

export type CatalogueRequestFormValues = z.infer<typeof catalogueRequestSchema>;
