'use client';

import type { PropsWithChildren } from 'react';

import st from './Layout.module.scss';

export const Layout = ({ children }: PropsWithChildren) => (
  <article className={st.layout}>{children}</article>
);
