import { create } from 'zustand';

type ThanksPopupStore = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useThanksPopupStore = create<ThanksPopupStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));
