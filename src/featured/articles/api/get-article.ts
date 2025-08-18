'use server';

import { SERVER_URL } from '@/shared/config/env';

export const getArticle = async ({ slug, locale = 'en' }: { slug: string; locale: string }) => {
  const res = await fetch(`${SERVER_URL}/api/trends?where[slug][in]=${slug}&locale=${locale}`);
  const data = await res.json();
  return data.docs[0];
};
