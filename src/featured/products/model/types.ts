export type ProductCategory = {
  id: string;
  title: string;
  description: string;
  slug: string;
  subtitle: string;
  seo_title: string;
  seo_description: string;
  image: { url: string };
};

export type Product = {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  category: ProductCategory;
  image: { url: string };
  price: number;
};
