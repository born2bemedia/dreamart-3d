'use client';

import type { TextareaHTMLAttributes } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import st from './TextArea.module.scss';

export const TextArea = ({
  hint,
  className,
  placeholder,
  label,
  labelColor = 'grey',
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  hint?: string;
  placeholder?: string;
  label?: string;
  labelColor?: 'white' | 'grey';
}) => (
  <div className={st.layout}>
    {hint && !label ? <p className={cn(st.hint, st.absoluteHint)}>{hint}</p> : null}
    {label ? (
      hint ? (
        <p className={st.hint}>{hint}</p>
      ) : (
        <p className={cn(st.label, labelColor === 'white' ? st.whiteLabel : st.greyLabel)}>
          {label}
        </p>
      )
    ) : null}
    <textarea
      className={cn(hint ? st.dangerIntent : st.defaultIntent, className)}
      placeholder={placeholder}
      {...props}
    />
  </div>
);
