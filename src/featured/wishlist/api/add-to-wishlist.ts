'use client';

import { lsWrite } from '@/shared/lib/utils/ls';

import { getWishlist } from './get-wishlist';

import type { Product } from '@/featured/products/model/types';

export const addToWishlist = (item: Product) => {
  const wishlist = getWishlist();

  const newWishlist = [...wishlist, item];
  lsWrite('wishlist', JSON.stringify(newWishlist));

  return { success: true, newWishlist };
};
