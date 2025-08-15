'use server';

import { SERVER_URL } from '@/shared/config/env';

import type { TrendPreview } from '../model/types';

export const getTrendsPreview = async (): Promise<TrendPreview[]> => {
  const res = await fetch(`${SERVER_URL}/api/trends`);
  const data = await res.json();

  return data.docs
    ? data.docs.map(
        (item: {
          id: string;
          title: string;
          excerpt: string;
          image: { url: string };
          slug: string;
        }) => ({
          id: item.id,
          title: item.title,
          description: item.excerpt,
          image: `${SERVER_URL}${item.image.url}`,
          slug: item.slug,
        })
      )
    : [];
};
