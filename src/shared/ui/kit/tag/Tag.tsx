'use client';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import st from './Tag.module.css';

export const Tag = ({
  children,
  className,
  variant = 'default',
}: {
  children: ReactNode;
  variant?: 'default' | 'solid';
  className?: string;
}) => <span className={cn(st.tag, st[variant], className)}>{children}</span>;
