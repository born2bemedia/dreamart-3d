'use client';

import { useTranslations } from 'next-intl';

import { GearIcon } from '@/shared/ui/icons/gear';
import { HeartIcon } from '@/shared/ui/icons/heart';
import { HistoryIcon } from '@/shared/ui/icons/history';
import { OpenDoorsIcon } from '@/shared/ui/icons/open-doors';

import { useTabsStore } from '../../model/tabs.store';
import type { Tabs } from '../../model/types';
import st from './Sidebar.module.scss';

const getTabs = (
  t: ReturnType<typeof useTranslations>
): { label: string; value: Tabs; icon: React.ElementType }[] => [
  { label: t('history', { fallback: 'History' }), value: 'history', icon: HistoryIcon },
  { label: t('settings', { fallback: 'Settings' }), value: 'settings', icon: GearIcon },
  { label: t('wishlist', { fallback: 'Wishlist' }), value: 'wishlist', icon: HeartIcon },
];

export const Sidebar = () => {
  const { activeTab, setActiveTab } = useTabsStore();

  const t = useTranslations('sidebar');

  return (
    <section className={st.layout}>
      <section className={st.mainTabs}>
        {getTabs(t).map(({ label, value, icon: Icon }) => (
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
        <p>{t('logout', { fallback: 'Logout' })}</p>
      </button>
    </section>
  );
};
