'use client';

import type { TextareaHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import st from './TextArea.module.scss';

export const TextArea = ({
  hint,
  className,
  placeholder,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & { hint?: string; placeholder?: string }) => (
  <div className={st.layout}>
    {hint && <p className={st.hint}>{hint}</p>}
    <textarea
      className={cn(hint ? st.dangerIntent : st.defaultIntent, className)}
      placeholder={placeholder}
      {...props}
    />
  </div>
);
