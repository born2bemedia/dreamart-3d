'use client';

import Link from 'next/link';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import st from './Url.module.scss';

export const Url = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) => (
  <Link href={href} className={cn(st.link, className)} target="_blank">
    {children}
  </Link>
);
