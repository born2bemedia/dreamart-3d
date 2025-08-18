import { SERVER_URL } from '@/shared/config/env';

import type { Product, ProductCategory } from '../model/types';

console.log('SERVER_URL', SERVER_URL);

export const getCategoryBySlug = async (slug: string): Promise<ProductCategory | null> => {
  const url = `${SERVER_URL}/api/categories?where[slug][in]=${slug}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.docs[0] || null;
};

export const getProductCategories = async (): Promise<ProductCategory[]> => {
  try {
    const url = `${SERVER_URL}/api/categories?where[id][not_in]=6`;
    console.log('Fetching categories from:', url);

    const res = await fetch(url);

    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log('Categories response:', data);

    const categories = data.docs.reverse();

    return categories.map(
      (item: {
        id: string;
        title: string;
        description: string;
        slug: string;
        subtitle: string;
        seo_title: string;
        seo_description: string;
        image: { url: string } | null;
      }) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        slug: item.slug,
        subtitle: item.subtitle,
        seo_title: item.seo_title,
        seo_description: item.seo_description,
        image: { url: item.image ? `${SERVER_URL}${item.image.url}` : '' },
      })
    );
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const getProducts = async (categoryId: string): Promise<Product[]> => {
  try {
    const url = `${SERVER_URL}/api/products?populate=*&where[category.id][in]=${categoryId}`;
    console.log('Fetching products from:', url);

    const res = await fetch(url);

    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log('Products response:', data);

    return data.docs.map(
      (item: {
        id: string;
        title: string;
        excerpt: string;
        slug: string;
        category: { id: string; title: string; slug: string };
        image: { url: string } | null;
        price: number;
      }) => ({
        id: item.id,
        title: item.title,
        excerpt: item.excerpt,
        slug: item.slug,
        category: item.category,
        image: { url: item.image ? `${SERVER_URL}${item.image.url}` : '' },
        price: item.price,
      })
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};
