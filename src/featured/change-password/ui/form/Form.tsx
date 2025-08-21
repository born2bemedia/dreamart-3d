'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { notifySuccess, notifyWarning } from '@/shared/lib/utils/notify';
import { EditIcon } from '@/shared/ui/icons/edit';
import { Btn } from '@/shared/ui/kit/btn';
import { TextField } from '@/shared/ui/kit/text-field';

import { changePassword } from '../../api/change-password';
import { changePasswordSchema } from '../../model/change-password.schema';
import st from './Form.module.scss';

import { useUserStore } from '@/core/user/model/user.store';

export const ChangePasswordForm = () => {
  const [isEditing, setIsEditing] = useState(false);

  const { user } = useUserStore();

  const {
    handleSubmit,
    register,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      currentPassword: '',
      retypeCurrentPassword: '',
      newPassword: '',
    },
    resolver: zodResolver(changePasswordSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await changePassword({
      ...data,
      userId: user?.id ?? -1,
    });

    if (res.message === 'Updated successfully.') {
      notifySuccess('Password changed successfully');
      reset();
      setIsEditing(false);
    } else {
      console.error(res);
      notifyWarning('Password change failed. Please try again later.');
    }
  });

  return (
    <form onSubmit={onSubmit} className={st.layout}>
      <header className={st.header}>
        <h3>Account Access</h3>
        {!isEditing ? (
          <Btn
            variant="secondary"
            type="button"
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              setIsEditing(true);
            }}
          >
            <EditIcon />
            Edit
          </Btn>
        ) : (
          <Btn variant="primary" type="submit" size="sm" disabled={isSubmitting}>
            {isSubmitting ? 'Saving...' : 'Save'}
          </Btn>
        )}
      </header>
      <section className={st.fields}>
        <TextField
          label="Password"
          hint={errors.currentPassword?.message}
          disabled={!isEditing}
          {...register('currentPassword')}
        />
        <TextField
          label="Repeat password"
          hint={errors.retypeCurrentPassword?.message}
          disabled={!isEditing}
          {...register('retypeCurrentPassword')}
        />
        <TextField
          label="New password"
          hint={errors.newPassword?.message}
          disabled={!isEditing}
          {...register('newPassword')}
        />
      </section>
    </form>
  );
};
