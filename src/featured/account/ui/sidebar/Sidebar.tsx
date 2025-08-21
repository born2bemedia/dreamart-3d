'use client';

import { GearIcon } from '@/shared/ui/icons/gear';
import { HeartIcon } from '@/shared/ui/icons/heart';
import { HistoryIcon } from '@/shared/ui/icons/history';
import { OpenDoorsIcon } from '@/shared/ui/icons/open-doors';

import { useTabsStore } from '../../model/tabs.store';
import type { Tabs } from '../../model/types';
import st from './Sidebar.module.scss';

const getTabs = (): { label: string; value: Tabs; icon: React.ElementType }[] => [
  { label: 'History', value: 'history', icon: HistoryIcon },
  { label: 'Settings', value: 'settings', icon: GearIcon },
  { label: 'Wishlist', value: 'wishlist', icon: HeartIcon },
];

export const Sidebar = () => {
  const { activeTab, setActiveTab } = useTabsStore();

  return (
    <section className={st.layout}>
      <section className={st.mainTabs}>
        {getTabs().map(({ label, value, icon: Icon }) => (
          <button
            key={value}
            className={activeTab === value ? st.activeTab : st.defaultTab}
            onClick={() => setActiveTab(value)}
            type="button"
          >
            <Icon />
            <p>{label}</p>
          </button>
        ))}
      </section>
      <button className={st.defaultTab}>
        <OpenDoorsIcon />
        <p>Logout</p>
      </button>
    </section>
  );
};
