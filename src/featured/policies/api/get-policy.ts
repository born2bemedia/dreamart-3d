'use server';

import { SERVER_URL } from '@/shared/config/env';

export const getPolicy = async ({ id, locale = 'en' }: { id: string; locale?: string }) => {
  const res = await fetch(`${SERVER_URL}/api/policies/${id}?locale=${locale}`);
  const data = await res.json();
  return data;
};
