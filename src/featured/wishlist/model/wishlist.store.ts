import { create } from 'zustand';

import type { Product } from '@/featured/products/model/types';

export const useWishlistStore = create<{
  wishlist: Product[];
  setWishlist: (wishlist: Product[]) => void;
}>((set) => ({
  wishlist: [],
  setWishlist: (wishlist: Product[]) => set({ wishlist }),
}));
