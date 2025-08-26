'use client';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { notifySuccess, notifyWarning } from '@/shared/lib/utils/notify';
import { Btn } from '@/shared/ui/kit/btn';
import { TextField } from '@/shared/ui/kit/text-field';

import { changePassword } from '../../api/change-password';
import { changePasswordSchema } from '../../model/forgot-pass.schema';
import st from './ChangePasswordForm.module.scss';

export const ChangePasswordForm = ({ token }: { token: string }) => {
  const router = useRouter();

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
      notifySuccess('Password changed successfully');
      reset();
      router.push('/login');
    } else {
      notifyWarning(`${res.errors.map((e: { message: string }) => e.message).join(' ')}`);
    }
  });

  return (
    <form onSubmit={onSubmit} className={st.layout}>
      <section className={st.content}>
        <h1>Change Your Password</h1>
        <p>Enter your new password below to change your password.</p>
      </section>
      <TextField
        placeholder="New Password"
        hint={errors.newPassword?.message}
        {...register('newPassword')}
      />
      <Btn type="submit" fullWidth disabled={isSubmitting}>
        {isSubmitting ? 'Changing...' : 'Change Password'}
      </Btn>
    </form>
  );
};
