'use client';

import Link from 'next/link';

import { Btn } from '@/shared/ui/kit/btn';

import st from './CallToAction.module.scss';

export const CallToAction = ({
  title,
  btn,
  href,
}: {
  title: string;
  btn: string;
  href: string;
}) => {
  return (
    <section className={st.layout}>
      <div className={st.content}>
        <h3>{title}</h3>
        <Link href={href}>
          <Btn fullWidth>{btn}</Btn>
        </Link>
      </div>
      <video src="/videos/trends/cta.mp4" autoPlay muted loop />
    </section>
  );
};
