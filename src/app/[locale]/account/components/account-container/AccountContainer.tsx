'use client';

import { useTranslations } from 'next-intl';

import st from './AccountContainer.module.scss';

import { useTabsStore } from '@/featured/account/model/tabs.store';
import { EditUserForm } from '@/featured/account/ui/edit-user-info';
import { ChangePasswordForm } from '@/featured/change-password/ui/form';

export const AccountContainer = () => {
  const { activeTab } = useTabsStore();

  const t = useTranslations('accountContainer');

  return (
    <section className={st.layout}>
      {activeTab === 'settings' && (
        <section className={st.settings}>
          <h2 className={st.heading}>{t('title', { fallback: 'Account Settings' })}</h2>
          <div className={st.divider} />
          <div className={st.forms}>
            <EditUserForm />
            <ChangePasswordForm />
          </div>
        </section>
      )}
    </section>
  );
};
