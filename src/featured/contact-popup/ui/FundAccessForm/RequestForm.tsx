'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { ButtonArrow } from '@/shared/ui/icons';

import { submitFundRequestForm } from '../../api/submitRequestForm';
import { type RequestFormValues, requestSchema } from '../../schema/requestSchema';
import { useRequestStore } from '../../store/requestStore';
import { PhoneInputField } from '../FormFields/PhoneInputField';
import styles from './FundAccessForm.module.scss';

export const FundAccessForm = () => {
  const { setIsSuccess } = useRequestStore();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<RequestFormValues>({
    resolver: zodResolver(requestSchema),
  });

  const onSubmit = (data: RequestFormValues) => {
    try {
      setIsLoading(true);
      submitFundRequestForm(data);
      setTimeout(() => {
        setIsSuccess(true);
        reset();
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputWrapper}>
        {errors.firstName && <p className={styles.error}>{errors.firstName.message}</p>}
        <input {...register('firstName')} placeholder="Nombre" />
      </div>
      <div className={styles.inputWrapper}>
        {errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}
        <input {...register('lastName')} placeholder="Apellido" />
      </div>
      <div className={styles.inputWrapper}>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        <input {...register('email')} placeholder="Correo electrónico" />
      </div>
      <div className={styles.inputWrapper}>
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
        <PhoneInputField control={control} name="phone" />
      </div>
      <div className={styles.inputWrapper}>
        {errors.message && <p className={styles.error}>{errors.message.message}</p>}
        <textarea {...register('message')} placeholder="Mensaje" />
      </div>
      <button type="submit" className={styles.submitButton} disabled={isLoading}>
        {isLoading ? 'Enviando...' : 'Enviar Solicitud'}
        <ButtonArrow />
      </button>
    </form>
  );
};
