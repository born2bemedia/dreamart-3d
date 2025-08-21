'use client';

import { useRouter } from 'next/navigation';

import { useTranslations } from 'next-intl';

import { notifyWarning } from '@/shared/lib/utils/notify';
import { GearIcon } from '@/shared/ui/icons/gear';
import { HeartIcon } from '@/shared/ui/icons/heart';
import { HistoryIcon } from '@/shared/ui/icons/history';
import { OpenDoorsIcon } from '@/shared/ui/icons/open-doors';

import { useTabsStore } from '../../model/tabs.store';
import type { Tabs } from '../../model/types';
import st from './Sidebar.module.scss';

import { logout } from '@/core/user/api/logout';
import { useUserStore } from '@/core/user/model/user.store';

const getTabs = (
  t: ReturnType<typeof useTranslations>
): { label: string; value: Tabs; icon: React.ElementType }[] => [
  { label: t('history', { fallback: 'History' }), value: 'history', icon: HistoryIcon },
  { label: t('settings', { fallback: 'Settings' }), value: 'settings', icon: GearIcon },
  { label: t('wishlist', { fallback: 'Wishlist' }), value: 'wishlist', icon: HeartIcon },
];

export const Sidebar = () => {
  const router = useRouter();

  const { activeTab, setActiveTab } = useTabsStore();
  const { setUser } = useUserStore();

  const t = useTranslations('sidebar');

  const logoutHandle = async () => {
    const res = await logout();

    if (res.success) {
      setUser(null);
      router.push('/');
    } else {
      notifyWarning('Something went wrong — please refresh and try again.');
    }
  };

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
      <button className={st.defaultTab} onClick={logoutHandle}>
        <OpenDoorsIcon />
        <p>{t('logout', { fallback: 'Logout' })}</p>
      </button>
    </section>
  );
};
