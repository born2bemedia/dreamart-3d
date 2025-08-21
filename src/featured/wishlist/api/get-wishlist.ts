'use client';

import { lsRead } from '@/shared/lib/utils/ls';

import type { Product } from '@/featured/products/model/types';

export const getWishlist = (): Product[] => {
  const lsWs = lsRead('wishlist');

  return !lsWs ? [] : JSON.parse(lsWs);
};
