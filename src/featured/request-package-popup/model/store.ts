import { create } from 'zustand';

type RequestPackagePopupStore = {
  isOpen: boolean;
  package: string;
  setIsPopupOpen: (isOpen: boolean) => void;
  setPackage: (packageName: string) => void;
};

export const useRequestPackagePopupStore = create<RequestPackagePopupStore>((set) => ({
  isOpen: false,
  package: '',
  setIsPopupOpen: (isOpen: boolean) => set({ isOpen }),
  setPackage: (packageName: string) => set({ package: packageName }),
}));
