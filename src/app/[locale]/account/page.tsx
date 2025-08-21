import { AccountContainer } from './components/account-container';
import st from './page.module.scss';

import { Sidebar } from '@/featured/account/ui/sidebar';
import { getUserOrders } from '@/featured/products/api/get-orders';

export default async function AccountPage() {
  const orders = await getUserOrders();

  return (
    <main className={st.layout}>
      <Sidebar />
      <AccountContainer orders={orders} />
    </main>
  );
}
