'use client';

import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

import { notifySuccess, notifyWarning } from '@/shared/lib/utils/notify';
import { CountryAutocomplete } from '@/shared/ui/components/country-autocomplete';
import { EditIcon } from '@/shared/ui/icons/edit';
import { Btn } from '@/shared/ui/kit/btn';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { TextField } from '@/shared/ui/kit/text-field';

import { editUserInfoSchema } from '../../model/edit-user-info.schema';
import st from './EditUserForm.module.scss';

import { editUser } from '@/core/user/api/edit-user';
import { useUserStore } from '@/core/user/model/user.store';

export const EditUserForm = () => {
  const [isEditing, setIsEditing] = useState(false);

  const { user, setUser } = useUserStore();

  console.log('user', user?.country);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: user?.firstName ?? '',
      lastName: user?.lastName ?? '',
      email: user?.email ?? '',
      phone: user?.phone ?? '',
      address1: user?.address1 ?? '',
      address2: user?.address2 ?? '',
      country: user?.country ?? '',
      zip: user?.zip ?? '',
      city: user?.city ?? '',
    },
    mode: 'onChange',
    resolver: zodResolver(editUserInfoSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);

    const res = await editUser({ ...data, id: user?.id ?? -1 });
    setUser(res.doc);

    if (res.message) {
      notifySuccess('User updated successfully');
      setIsEditing(false);
    } else {
      notifyWarning(
        'Something went wrong — please refresh and try again, or email us directly at info@trendelladigital.com.'
      );
    }
  });

  return (
    <form className={st.layout} onSubmit={onSubmit}>
      <header className={st.header}>
        <h3>Personal Information</h3>
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
          label="First Name"
          hint={errors.firstName?.message}
          disabled={!isEditing}
          {...register('firstName')}
        />
        <TextField
          label="Last Name"
          hint={errors.lastName?.message}
          disabled={!isEditing}
          {...register('lastName')}
        />
        <TextField
          label="Email"
          hint={errors.email?.message}
          disabled={!isEditing}
          {...register('email')}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <PhoneField
              label="Phone Number"
              hint={errors.phone?.message}
              disabled={!isEditing}
              {...field}
            />
          )}
        />
        <TextField
          label="Street Address"
          hint={errors.address1?.message}
          disabled={!isEditing}
          {...register('address1')}
        />
        <TextField
          label="Apartment/Suite"
          hint={errors.address2?.message}
          disabled={!isEditing}
          {...register('address2')}
        />
        <TextField
          label="City"
          hint={errors.city?.message}
          disabled={!isEditing}
          {...register('city')}
        />
        <Controller
          control={control}
          name="country"
          render={({ field }) => (
            <CountryAutocomplete
              {...field}
              label="Country"
              hint={errors.country?.message}
              initialValue={user?.country}
              disabled={!isEditing}
            />
          )}
        />
        <TextField
          label="Zip Code"
          hint={errors.zip?.message}
          type="number"
          disabled={!isEditing}
          {...register('zip')}
        />
      </section>
    </form>
  );
};
