import st from './page.module.scss';

import { LoginForm } from '@/core/user/ui/login-form';

export default function LoginPage() {
  return (
    <main className={st.layout}>
      <LoginForm />
    </main>
  );
}
