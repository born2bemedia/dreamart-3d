'use client';

import { useRouter } from 'next/navigation';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Btn } from '@/shared/ui/kit/btn';
import { Checkbox } from '@/shared/ui/kit/checkbox';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { TextField } from '@/shared/ui/kit/text-field';
import { Url } from '@/shared/ui/kit/url';

import { registrationSchema } from '../../model/registration.schema';
import st from './RegistrationForm.module.scss';

import { registerUser } from '@/core/user/api/register-user';

export const RegistrationForm = () => {
  const router = useRouter();

  const t = useTranslations('registrationForm');

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    const { success } = await registerUser(data);

    if (success) {
      toast(
        t('success', { fallback: 'You have successfully registered. Please login to continue.' })
      );
      router.push('/login');
    } else {
      toast(t('error', { fallback: 'Something went wrong. Please try again later.' }));
    }
  });

  return (
    <form onSubmit={onSubmit} className={st.layout}>
      <section className={st.content}>
        <h1>{t('title', { fallback: 'Join the Dreamart 3D Family!' })}</h1>
        <p>
          {t('description', {
            fallback:
              'Ready to unlock the full potential of your creativity? Sign up today and get exclusive updates, fresh new features, and sweet deals that’ll take your design projects to the next level. Let’s make some 3D magic happen!',
          })}
        </p>
      </section>
      <section className={st.fields}>
        <TextField
          placeholder={t('firstName', { fallback: 'First Name' })}
          hint={errors.firstName?.message}
          {...register('firstName')}
        />
        <TextField
          placeholder={t('lastName', { fallback: 'Last Name' })}
          hint={errors.lastName?.message}
          {...register('lastName')}
        />
        <TextField
          placeholder={t('username', { fallback: 'Username' })}
          hint={errors.username?.message}
          {...register('username')}
        />
        <TextField
          placeholder={t('email', { fallback: 'Email' })}
          hint={errors.email?.message}
          {...register('email')}
        />
        <Controller
          control={control}
          name="phone"
          render={({ field }) => (
            <PhoneField
              size="md"
              placeholder={t('phone', { fallback: 'Phone' })}
              hint={errors.phone?.message}
              {...field}
            />
          )}
        />
        <TextField
          type="password"
          placeholder={t('password', { fallback: 'Password' })}
          hint={errors.password?.message}
          {...register('password')}
        />
        <TextField
          type="password"
          placeholder={t('confirmPassword', { fallback: 'Confirm Password' })}
          hint={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />
      </section>
      <Controller
        control={control}
        name="isAgree"
        render={({ field }) => (
          <Checkbox
            label={
              <>
                {t('isAgree.0', {
                  fallback:
                    'By signing up, you confirm that you are over 18 years old and agree to our',
                })}{' '}
                <Url href="/terms-of-use">
                  {t('isAgree.1', { fallback: 'Terms and Conditions' })}
                </Url>{' '}
                {t('isAgree.2', { fallback: 'and' })}{' '}
                <Url href="/privacy-policy">{t('isAgree.3', { fallback: 'Privacy Policy' })}</Url>.
              </>
            }
            checked={field.value}
            onCheckedChange={field.onChange}
            intent={errors.isAgree ? 'danger' : 'default'}
          />
        )}
      />
      <Btn type="submit" fullWidth disabled={isSubmitting}>
        {isSubmitting
          ? t('creating', { fallback: 'Creating...' })
          : t('createAccount', { fallback: 'Create Account' })}
      </Btn>
    </form>
  );
};
