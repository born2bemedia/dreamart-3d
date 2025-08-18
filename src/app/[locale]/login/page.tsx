import st from './page.module.scss';

import { LoginForm } from '@/core/ui/login-form';

export default function LoginPage() {
  return (
    <main className={st.layout}>
      <LoginForm />
    </main>
  );
}
