'use client';

import type { HTMLAttributes } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import st from './TextField.module.scss';

export const TextField = ({
  hint,
  className,
  placeholder,
  ...props
}: HTMLAttributes<HTMLInputElement> & { hint?: string; placeholder?: string }) => (
  <div className={st.layout}>
    {hint && <p className={st.hint}>{hint}</p>}
    <input
      className={cn(hint ? st.dangerIntent : st.defaultIntent, className)}
      placeholder={placeholder}
      {...props}
    />
  </div>
);
