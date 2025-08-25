'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';

import { notifyWarning } from '@/shared/lib/utils/notify';
import { Dropdzone } from '@/shared/ui/components/dropzone';
import { Btn } from '@/shared/ui/kit/btn';
import { CheckboxGroup } from '@/shared/ui/kit/checkbox';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';

import { applyToJob } from '../../api/apply-to-job';
import { careerSchema } from '../../model/schema';
import st from './Form.module.scss';

import { useThanksPopupStore } from '@/featured/thanks-popup/store/store';

export const CareerForm = () => {
  const { setIsOpen } = useThanksPopupStore();

  const t = useTranslations('careerForm');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
  } = useForm({
    resolver: zodResolver(careerSchema),
    defaultValues: {
      fullName: '',
      email: '',
      resume: [],
      coverLetter: [],
      position: '',
      message: '',
    },
    mode: 'onSubmit',
  });

  const onSubmit = handleSubmit(async (data) => {
    const res = await applyToJob(data);
    if (res.success) {
      reset();
      setIsOpen(true);
    } else {
      notifyWarning(
        t('failed', { fallback: 'Failed to send email. Please refresh and try again.' })
      );
    }
  });

  return (
    <form onSubmit={onSubmit} className={st.layout}>
      <section className={st.form}>
        <TextField
          label={t('fullName', { fallback: 'Full Name*' })}
          placeholder={t('fullNamePlaceholder', { fallback: 'Enter your first and last name' })}
          hint={errors.fullName?.message}
          labelColor="white"
          {...register('fullName')}
        />
        <TextField
          label={t('email', { fallback: 'Email Address*' })}
          placeholder={t('emailPlaceholder', { fallback: 'Your primary contact email' })}
          hint={errors.email?.message}
          labelColor="white"
          {...register('email')}
        />
        <Controller
          name="resume"
          control={control}
          render={({ field }) => (
            <Dropdzone
              name="resume"
              fileFormats={['pdf']}
              label={t('resume', { fallback: 'Resume (PDF only)*' })}
              placeholder={t('resumePlaceholder', { fallback: 'Upload your up-to-date resume' })}
              onDrop={field.onChange}
              value={field.value}
            />
          )}
        />
        <Controller
          name="coverLetter"
          control={control}
          render={({ field }) => (
            <Dropdzone
              name="coverLetter"
              fileFormats={['pdf', 'doc', 'docx']}
              label={t('coverLetter', { fallback: 'Cover Letter (PDF, DOC/DOCX)' })}
              placeholder={t('coverLetterPlaceholder', {
                fallback: "Attach a short note about why you're a good fit",
              })}
              onDrop={field.onChange}
              value={field.value}
            />
          )}
        />
        <TextArea
          label={t('message', { fallback: 'Message' })}
          placeholder={t('messagePlaceholder', {
            fallback: 'Add any additional info you want to share',
          })}
          labelColor="white"
          hint={errors.message?.message}
          {...register('message')}
        />
        <div className={st.positionContainer}>
          <p className={st.positionLabel}>
            {t('positionApplyingFor', { fallback: 'Position Applying For' })}
          </p>
          <Controller
            control={control}
            name="position"
            render={({ field }) => (
              <CheckboxGroup
                options={[
                  {
                    label: t('positions.0', { fallback: '3D Modelling Wizard' }),
                    value: '3D Modelling Wizard',
                  },
                  {
                    label: t('positions.1', { fallback: 'Animation Ninja' }),
                    value: 'Animation Ninja',
                  },
                  {
                    label: t('positions.2', { fallback: 'UI/UX Design Guru' }),
                    value: 'UI/UX Design Guru',
                  },
                  {
                    label: t('positions.3', { fallback: 'Video Production Hero' }),
                    value: 'Video Production Hero',
                  },
                ]}
                value={field.value}
                onChange={field.onChange}
                multiple={false}
                intent={errors.position ? 'danger' : 'default'}
              />
            )}
          />
        </div>
      </section>
      <span className={st.divider} />
      <Btn type="submit" fullWidth disabled={isSubmitting}>
        {isSubmitting
          ? t('submitting', { fallback: 'Submitting...' })
          : t('submit', { fallback: 'Start the Project Today' })}
      </Btn>
    </form>
  );
};
