import st from './page.module.scss';

import { ChangePasswordForm } from '@/featured/forgot-password/ui/change-password';
import { ForgotPasswordForm } from '@/featured/forgot-password/ui/form';

export default async function ForgotPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  return (
    <main className={st.layout}>
      {token ? <ChangePasswordForm token={token} /> : <ForgotPasswordForm />}
    </main>
  );
}
