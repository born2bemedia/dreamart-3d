'use client';

import { defaultCountries, PhoneInput, type PhoneInputProps } from 'react-international-phone';

import { excludedCountries } from '@/shared/lib/countries';

import st from './phone-field.module.scss';

import 'react-international-phone/style.css';

export const PhoneField = ({
  country,
  hint,
  ...args
}: PhoneInputProps & {
  country?: string;
  hint?: string;
}) => {
  return (
    <label className={st.layout}>
      <PhoneInput
        defaultCountry={
          defaultCountries.some(([, iso2]) => iso2 === country && !excludedCountries.includes(iso2))
            ? country
            : 'us'
        }
        className={st.container}
        inputClassName={st.phoneField}
        countries={defaultCountries.filter(([, iso2]) => !excludedCountries.includes(iso2))}
        countrySelectorStyleProps={{
          buttonClassName: st.dropdown,
          dropdownStyleProps: {
            className: st.dropdownList,
          },
          dropdownArrowClassName: st.arrow,
        }}
        {...args}
      />
      {hint && <p className={st.hint}>{hint}</p>}
    </label>
  );
};
