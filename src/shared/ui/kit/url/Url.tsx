'use client';

import Link from 'next/link';

import type { ReactNode } from 'react';

import st from './Url.module.scss';

export const Url = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link href={href} className={st.link}>
    {children}
  </Link>
);
