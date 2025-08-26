'use client';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { notifySuccess, notifyWarning } from '@/shared/lib/utils/notify';
import { Btn } from '@/shared/ui/kit/btn';
import { TextField } from '@/shared/ui/kit/text-field';

import { changePassword } from '../../api/change-password';
import { changePasswordSchema } from '../../model/forgot-pass.schema';
import st from './ChangePasswordForm.module.scss';

export const ChangePasswordForm = ({ token }: { token: string }) => {
  const router = useRouter();

  const t = useTranslations('changePassword');

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      newPassword: '',
    },
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await changePassword(token, data.newPassword);

    if (res.token) {
      notifySuccess(t('success', { fallback: 'Password changed successfully' }));
      reset();
      router.push('/login');
    } else {
      notifyWarning(`${res.errors.map((e: { message: string }) => e.message).join(' ')}`);
    }
  });

  return (
    <form onSubmit={onSubmit} className={st.layout}>
      <section className={st.content}>
        <h1>{t('title', { fallback: 'Change Your Password' })}</h1>
        <p>
          {t('description', { fallback: 'Enter your new password below to change your password.' })}
        </p>
      </section>
      <TextField
        placeholder={t('newPassword', { fallback: 'New Password' })}
        hint={errors.newPassword?.message}
        {...register('newPassword')}
      />
      <Btn type="submit" fullWidth disabled={isSubmitting}>
        {isSubmitting
          ? t('changing', { fallback: 'Changing...' })
          : t('changePassword', { fallback: 'Change Password' })}
      </Btn>
    </form>
  );
};
