'use client';

import type { ReactNode } from 'react';

import st from './Layout.module.css';

export const Layout = ({ children }: { children: ReactNode }) => (
  <main className={st.layout}>{children}</main>
);
