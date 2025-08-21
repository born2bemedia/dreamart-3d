'use client';

import { lsWrite } from '@/shared/lib/utils/ls';

import { getWishlist } from './get-wishlist';

export const removeFromWishlist = (id: string) => {
  const wishlist = getWishlist();

  const newWishlist = wishlist.filter((item) => item.id !== id);
  lsWrite('wishlist', JSON.stringify(newWishlist));

  return { success: true, newWishlist };
};
