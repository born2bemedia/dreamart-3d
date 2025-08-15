'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import { FormRow } from '@/shared/ui/components/form-row';
import { TextField } from '@/shared/ui/components/text-field';
import { CheckboxGroup } from '@/shared/ui/kit/checkbox';
import { PhoneField } from '@/shared/ui/kit/phone-field';

import { quoteRequestFormSchema } from '../../model/schema';
import st from './Form.module.scss';

export const Form = () => {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      contactMethod: '',
      service: '',
      projectType: '',
      budget: '',
      projectDeadline: '',
      urgencyLevel: '',
      fileFormat: '',
      revision: '',
      wouldCall: '',
      isAgree: false,
    },
    resolver: zodResolver(quoteRequestFormSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className={st.layout} onSubmit={onSubmit}>
      <section className={st.section}>
        <h2>Your Info</h2>
        <p className={st.text}>Don’t Worry, We’ll Keep It Private</p>
      </section>
      <section className={st.formFlex}>
        <FormRow>
          <TextField placeholder="First Name" {...register('firstName')} />
          <TextField placeholder="Last Name" {...register('lastName')} />
        </FormRow>
        <FormRow>
          <TextField placeholder="Email" {...register('email')} />
          <Controller
            control={control}
            name="phone"
            render={({ field }) => <PhoneField placeholder="Phone" {...field} />}
          />
        </FormRow>
      </section>
      <section className={st.formFlex}>
        <h2>Preferred Contact Method</h2>
        <Controller
          control={control}
          name="contactMethod"
          render={({ field }) => (
            <CheckboxGroup
              options={[
                { label: 'Email', value: 'email' },
                { label: 'Phone', value: 'phone' },
                { label: 'WhatsApp', value: 'whatsapp' },
              ]}
              value={field.value}
              onChange={field.onChange}
              multiple={false}
            />
          )}
        />
      </section>
    </form>
  );
};
