export type PricingCategory = {
  id: string;
  title: string;
  description: string;
  slug: string;
  updatedAt: string;
  createdAt: string;
};

export type PricingFeature = {
  id: string;
  feature: string;
};

export type PricingItem = {
  id: number;
  title: string;
  slug: string;
  description: string;
  category: PricingCategory;
  price: number;
  includes: PricingFeature[];
  button_text: string;
  updatedAt: string;
  createdAt: string;
};