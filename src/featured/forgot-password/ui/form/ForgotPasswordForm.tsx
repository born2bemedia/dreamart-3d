'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { notifySuccess, notifyWarning } from '@/shared/lib/utils/notify';
import { Btn } from '@/shared/ui/kit/btn';
import { TextField } from '@/shared/ui/kit/text-field';

import { sendForgotRequest } from '../../api/forgot-password';
import { forgotPasswordSchema } from '../../model/forgot-pass.schema';
import st from './ForgotPasswordForm.module.scss';

export const ForgotPasswordForm = () => {
  const t = useTranslations('forgotPassword');

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await sendForgotRequest(data.email);

    if (res.message === 'Success') {
      notifySuccess(t('success', { fallback: 'Password reset link sent' }));
      reset();
    } else {
      notifyWarning(`${res.errors.map((e: { message: string }) => e.message).join(' ')}`);
    }
  });

  return (
    <form onSubmit={onSubmit} className={st.layout}>
      <section className={st.content}>
        <h1>{t('title', { fallback: 'Oops, Forgot Your Password?' })}</h1>
        <p>
          {t('description', {
            fallback:
              'No problem! Just enter your username or email below, and we’ll send you a link to reset it faster than a 3D model loads!',
          })}
        </p>
      </section>
      <TextField
        placeholder={t('email', { fallback: 'Email' })}
        hint={errors.email?.message}
        {...register('email')}
      />
      <Btn type="submit" fullWidth disabled={isSubmitting}>
        {isSubmitting
          ? t('sending', { fallback: 'Sending...' })
          : t('resetPassword', { fallback: 'Reset Your Password' })}
      </Btn>
    </form>
  );
};
