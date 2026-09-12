export interface ProductCategory {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  productCount: string;
}

export interface Product {
  slug: string;
  sku: string;
  name: string;
  categorySlug: string;
  shortDescription: string;
  description: string;
  images: string[];
  material: string;
  weightRange: string;
  dimensions: string;
  finish: string;
  moq: string;
  leadTime: string;
  packagingType: string;
  customizable: boolean;
  isBestseller?: boolean;
  tags: string[];
}

export interface EnquiryBasketItem {
  slug: string;
  sku: string;
  name: string;
  image: string;
  quantity: number;
}

export interface BlogOutline {
  slug: string;
  title: string;
  targetKeyword: string;
  metaDescription: string;
  headings: string[];
  summary: string;
}
