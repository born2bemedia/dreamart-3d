'use client';

import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import st from './Btn.module.scss';

export const Btn = ({
  children,
  fullWidth,
  ...props
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  fullWidth?: boolean;
}) => (
  <button className={cn(st.btn, fullWidth && st.fullWidth)} {...props}>
    {children}
  </button>
);
