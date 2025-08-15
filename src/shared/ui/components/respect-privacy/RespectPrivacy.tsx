'use client';

import { ShieldIcon } from '../../icons/shield';
import st from './RespectPrivacy.module.scss';

export const RespectPrivacy = () => {
  return (
    <section className={st.layout}>
      <ShieldIcon />
      <p>
        We respect your privacy. <br />
        Your information will never be shared.
      </p>
    </section>
  );
};
