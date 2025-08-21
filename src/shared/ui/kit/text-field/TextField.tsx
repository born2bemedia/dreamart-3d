'use client';

import type { InputHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import st from './TextField.module.scss';

export const TextField = ({
  hint,
  className,
  label,
  ...props
}: {
  hint?: string;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>) => (
  <div className={st.layout}>
    {hint && !label ? <p className={cn(st.hint, st.absoluteHint)}>{hint}</p> : null}
    {label ? hint ? <p className={st.hint}>{hint}</p> : <p className={st.label}>{label}</p> : null}
    <input className={cn(hint ? st.dangerIntent : st.defaultIntent, className)} {...props} />
  </div>
);
