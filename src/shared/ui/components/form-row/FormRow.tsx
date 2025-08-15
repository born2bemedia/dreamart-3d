'use client';

import type { ReactNode } from 'react';

import st from './FormRow.module.css';

export const FormRow = ({ children }: { children: ReactNode }) => (
  <div className={st.layout}>{children}</div>
);
