'use client';

import st from './AccountContainer.module.scss';

import { useTabsStore } from '@/featured/account/model/tabs.store';
import { EditUserForm } from '@/featured/account/ui/edit-user-info';

export const AccountContainer = () => {
  const { activeTab } = useTabsStore();

  return (
    <section className={st.layout}>
      {activeTab === 'settings' && (
        <section className={st.settings}>
          <h2 className={st.heading}>Account Settings</h2>
          <div className={st.divider} />
          <EditUserForm />
        </section>
      )}
    </section>
  );
};
