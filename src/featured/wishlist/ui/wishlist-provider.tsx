'use client';

import { type PropsWithChildren, useEffect } from 'react';

import { getWishlist } from '../api/get-wishlist';
import { useWishlistStore } from '../model/wishlist.store';

export const WishlistProvider = ({ children }: PropsWithChildren) => {
  const { setWishlist } = useWishlistStore();

  useEffect(() => {
    const wishlist = getWishlist();
    setWishlist(wishlist);
  }, [setWishlist]);

  return <>{children}</>;
};
