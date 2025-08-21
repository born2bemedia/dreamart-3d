'use client';

import { useTranslations } from 'next-intl';

import st from './AccountContainer.module.scss';

import { useTabsStore } from '@/featured/account/model/tabs.store';
import { EditUserForm } from '@/featured/account/ui/edit-user-info';
import { ChangePasswordForm } from '@/featured/change-password/ui/form';
import { useWishlistStore } from '@/featured/wishlist/model/wishlist.store';
import { WishlistCard } from '@/featured/wishlist/ui/WishlistCard';

export const AccountContainer = () => {
  const { activeTab } = useTabsStore();

  const { wishlist } = useWishlistStore();

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
      {activeTab === 'wishlist' && (
        <div className={st.wishlistLayout}>
          <section className={st.wishlistTitle}>
            <h2>Welcome to Your Dreamart 3D Wishlist!</h2>
            <p>
              This is your creative playground — a place to save, organize, and revisit your
              favorite 3D models and animations anytime you want. It’s like your personal design
              museum, but cooler.
            </p>
          </section>
          <section className={st.wishlist}>
            {wishlist.map((item) => (
              <WishlistCard key={item.id} {...item} />
            ))}
          </section>
        </div>
      )}
    </section>
  );
};
