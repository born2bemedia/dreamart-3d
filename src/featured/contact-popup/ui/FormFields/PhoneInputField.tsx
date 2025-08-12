import { type Control, Controller } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';

import { excludedCountries } from '@/shared/lib/helpers/excludedCountries';

import { type RequestFormValues } from '../../schema/requestSchema';
import styles from '../RequestForm/RequestForm.module.scss';

import 'react-phone-input-2/lib/style.css';

type PhoneInputFieldProps = {
  control: Control<RequestFormValues>;
  name: keyof RequestFormValues;
  error?: string;
};

export const PhoneInputField = ({ control, name, error }: PhoneInputFieldProps) => (
  <Controller
    control={control}
    name={name}
    render={({ field }) => (
      <PhoneInput
        {...field}
        value={field.value as string}
        country="us"
        placeholder="Teléfono"
        inputClass={`${styles.phoneInput} ${error ? styles.error : ''}`}
        excludeCountries={excludedCountries}
        defaultErrorMessage={error}
      />
    )}
  />
);
