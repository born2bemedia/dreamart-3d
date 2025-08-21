'use client';

import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import st from './Btn.module.scss';

export const Btn = ({
  children,
  fullWidth,
  size = 'md',
  variant = 'primary',
  ...props
}: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  fullWidth?: boolean;
  size?: 'md' | 'sm';
  variant?: 'secondary' | 'primary';
}) => {
  return (
    <button
      className={cn(st.btn, st[`${size}Size`], st[variant], fullWidth && st.fullWidth)}
      {...props}
    >
      {children}
    </button>
  );
};
