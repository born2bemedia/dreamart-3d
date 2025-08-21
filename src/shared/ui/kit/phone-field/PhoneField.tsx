'use client';

import { useEffect, useRef } from 'react';

import { useLenis } from 'lenis/react';
import { defaultCountries, PhoneInput, type PhoneInputProps } from 'react-international-phone';

import { excludedCountries } from '@/shared/lib/countries';
import { cn } from '@/shared/lib/utils/cn';

import st from './PhoneField.module.scss';

import 'react-international-phone/style.css';

export const PhoneField = ({
  country,
  hint,
  size = 'sm',
  ...args
}: PhoneInputProps & {
  country?: string;
  hint?: string;
  size?: 'sm' | 'md';
}) => {
  const lenis = useLenis();
  const ref = useRef<HTMLDivElement>(null);
  const isLenisStopped = useRef(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        // Click outside the component
        if (isLenisStopped.current) {
          lenis?.start();
          isLenisStopped.current = false;
        }
      }
    };

    const handleClickInside = () => {
      // Toggle lenis on click inside
      if (isLenisStopped.current) {
        lenis?.start();
        isLenisStopped.current = false;
      } else {
        lenis?.stop();
        isLenisStopped.current = true;
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('click', handleClickInside);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      if (element) {
        element.removeEventListener('click', handleClickInside);
      }
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [lenis]);

  return (
    <div ref={ref}>
      <label className={st.layout}>
        {hint && <p className={st.hint}>{hint}</p>}
        <PhoneInput
          defaultCountry={
            defaultCountries.some(
              ([, iso2]) => iso2 === country && !excludedCountries.includes(iso2)
            )
              ? country
              : 'us'
          }
          className={cn(st.container, st[`${size}Container`])}
          inputClassName={cn(st.phoneField, hint && st.dangerIntent)}
          countries={defaultCountries.filter(([, iso2]) => !excludedCountries.includes(iso2))}
          countrySelectorStyleProps={{
            buttonClassName: cn(st.dropdown, hint && st.dropdownDangerIntent),
            dropdownStyleProps: {
              className: st.dropdownList,
              listItemClassName: st.option,
            },
            dropdownArrowClassName: st.arrow,
          }}
          {...args}
        />
      </label>
    </div>
  );
};
