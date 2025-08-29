'use server';

import { SERVER_URL } from '@/shared/config/env';

import type { Deal } from '../model/types';

export const getDeals = async (locale: string): Promise<Deal[]> => {
  const res = await fetch(
    `${SERVER_URL}/api/products?populate=*&where[category.id][in]=6&locale=${locale}`
  );
  const data = await res.json();

  const items = data.docs.reverse();

  return items.map(
    (item: {
      id: string;
      title: string;
      excerpt: string;
      slug: string;
      price: number;
      image: { url: string };
      deal_title: string;
      deal_discount: number;
      deal_old_price: number;
      includes: {
        model: string;
        id: string;
      }[];
      button_text: string;
    }) => ({
      id: item.id,
      title: item.title,
      excerpt: item.excerpt,
      slug: item.slug,
      price: item.price,
      image: { url: `${SERVER_URL}${item.image.url}` },
      deal_title: item.deal_title,
      deal_discount: item.deal_discount,
      deal_old_price: item.deal_old_price,
      includes: item.includes,
      button_text: item.button_text,
    })
  );
};
