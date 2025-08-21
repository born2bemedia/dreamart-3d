'use client';

import Link from 'next/link';

import { ChevronRight } from '@/shared/ui/icons/chevron-right/chevron-right';

import st from './UserBadge.module.css';

export const UserBadge = ({ firstName }: { firstName: string }) => {
  return (
    <Link href="/account" className={st.userBadge}>
      {firstName} <ChevronRight />
    </Link>
  );
};
