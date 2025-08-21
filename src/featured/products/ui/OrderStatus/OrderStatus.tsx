'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';

import st from './OrderStatus.module.scss';

export const OrderStatus = ({ value }: { value: string }) => {
  const t = useTranslations('orderHistory');

  const status =
    value === 'completed'
      ? t('completed', { fallback: 'Completed' })
      : value === 'failed'
        ? t('failed', { fallback: 'Failed' })
        : t('pending', { fallback: 'Pending' });

  return <p className={cn(st.text, st[`${value}Status`])}>{status}</p>;
};
