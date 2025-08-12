'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { ButtonArrow } from '@/shared/ui/icons';

import { submitFundRequestForm } from '../../api/submitRequestForm';
import { type RequestFormValues, requestSchema } from '../../schema/requestSchema';
import { useRequestStore } from '../../store/requestStore';
import { PhoneInputField } from '../FormFields/PhoneInputField';
import styles from './RequestForm.module.scss';

export const RequestForm = () => {
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
      console.log(data);
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
        <input
          {...register('firstName')}
          placeholder="Nombre"
          className={`${errors.firstName ? styles.error : ''}`}
        />
      </div>
      <div className={styles.inputWrapper}>
        {errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}
        <input
          {...register('lastName')}
          placeholder="Apellido"
          className={`${errors.lastName ? styles.error : ''}`}
        />
      </div>
      <div className={styles.inputWrapper}>
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        <input
          {...register('email')}
          placeholder="Correo electrónico"
          className={`${errors.email ? styles.error : ''}`}
        />
      </div>
      <div className={styles.inputWrapper}>
        {errors.phone && <p className={styles.error}>El número de teléfono es obligatorio.</p>}
        <PhoneInputField control={control} name="phone" error={errors.phone?.message} />
      </div>
      <div className={`${styles.inputWrapper} ${styles.fullWidth}`}>
        {errors.message && <p className={styles.error}>{errors.message.message}</p>}
        <input
          {...register('message')}
          placeholder="Mensaje"
          className={`${errors.message ? styles.error : ''}`}
        />
      </div>
      <button type="submit" className={'button'} disabled={isLoading}>
        {isLoading ? 'Enviando...' : 'Enviar Solicitud'}
        <ButtonArrow />
      </button>
    </form>
  );
};
