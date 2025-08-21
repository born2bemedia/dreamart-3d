'use client';

import { cn } from '@/shared/lib/utils/cn';

import st from './OrderStatus.module.scss';

export const OrderStatus = ({ value }: { value: string }) => {
  const status = value === 'completed' ? 'Completed' : value === 'failed' ? 'Failed' : 'Pending';

  return <p className={cn(st.text, st[`${value}Status`])}>{status}</p>;
};
