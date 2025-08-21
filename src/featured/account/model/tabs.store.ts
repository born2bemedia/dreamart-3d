import { create } from 'zustand';

import type { Tabs } from './types';

export const useTabsStore = create<{
  activeTab: Tabs;
  setActiveTab: (tab: Tabs) => void;
}>((set) => ({
  activeTab: 'history',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
