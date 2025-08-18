export type DealImage = {
  url: string;
};

export type DealCategory = {
  id: number;
  title: string;
  image: string | null;
  slug: string;
  subtitle: string | null;
  description: string | null;
  seo_title: string | null;
  seo_description: string | null;
  updatedAt: string;
  createdAt: string;
};

export type DealInclude = {
  model: string;
  id: string;
};

export type Deal = {
  id: number;
  title: string;
  slug: string;
  image: DealImage;
  price: number;
  category: DealCategory;
  preview: string | null;
  excerpt: string;
  content: string | null;
  filesurl: string[];
  deal_title: string;
  deal_discount: number;
  deal_old_price: number;
  includes: DealInclude[];
  button_text: string;
  updatedAt: string;
  createdAt: string;
};