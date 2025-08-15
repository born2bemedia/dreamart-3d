'use client';

import type { ReactNode } from 'react';

import st from './Tag.module.css';

export const Tag = ({ children }: { children: ReactNode }) => (
  <span className={st.tag}>{children}</span>
);
