'use client';

import { useTranslations } from 'next-intl';

import { Table } from '@/shared/ui/components/table';

import st from './AccountContainer.module.scss';

import { useTabsStore } from '@/featured/account/model/tabs.store';
import { EditUserForm } from '@/featured/account/ui/edit-user-info';
import { ChangePasswordForm } from '@/featured/change-password/ui/form';
import { getOrdersColumns } from '@/featured/products/model/get-orders-columns';
import type { Order } from '@/featured/products/model/types';
import { OrderCard } from '@/featured/products/ui/OrderCard/OrderCard';
import { useWishlistStore } from '@/featured/wishlist/model/wishlist.store';
import { WishlistCard } from '@/featured/wishlist/ui/WishlistCard';

export const AccountContainer = ({ orders }: { orders: Order[] }) => {
  const { activeTab } = useTabsStore();

  const { wishlist } = useWishlistStore();

  const t = useTranslations('accountContainer');
  const tw = useTranslations('wishlist');
  const tt = useTranslations('orderHistory');

  const columns = getOrdersColumns(tt);

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
            <h2>{tw('welcome', { fallback: 'Welcome to Your Dreamart 3D Wishlist!' })}</h2>
            <p>
              {tw('description', {
                fallback:
                  'This is your creative playground — a place to save, organize, and revisit your favorite 3D models and animations anytime you want. It’s like your personal design museum, but cooler.',
              })}
            </p>
          </section>
          <section className={st.wishlist}>
            {wishlist.map((item) => (
              <WishlistCard key={item.id} {...item} />
            ))}
          </section>
        </div>
      )}
      {activeTab === 'history' && (
        <section className={st.orderHistoryLayout}>
          <h2>{tt('title', { fallback: 'Order History' })}</h2>
          <div className={st.table}>
            <Table columns={columns} data={orders} />
          </div>
          <div className={st.cards}>
            {orders.map((order) => (
              <OrderCard key={order.orderId} {...order} />
            ))}
          </div>
        </section>
      )}
    </section>
  );
};
