import st from './page.module.scss';

import { RegistrationForm } from '@/core/ui/registration-form';

export default function RegistrationPage() {
  return (
    <main className={st.layout}>
      <RegistrationForm />
    </main>
  );
}
