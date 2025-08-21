import { AccountContainer } from './components/account-container';
import st from './page.module.css';

import { Sidebar } from '@/featured/account/ui/sidebar';

export default function AccountPage() {
  return (
    <main className={st.layout}>
      <Sidebar />
      <AccountContainer />
    </main>
  );
}
