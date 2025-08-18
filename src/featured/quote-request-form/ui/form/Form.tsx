'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Controller, useForm } from 'react-hook-form';

import { DropdownCalendar } from '@/shared/ui/components/dropdown-calendar';
import { Dropdzone } from '@/shared/ui/components/dropzone';
import { FormRow } from '@/shared/ui/components/form-row';
import { RespectPrivacy } from '@/shared/ui/components/respect-privacy';
import { Btn } from '@/shared/ui/kit/btn';
import { Checkbox, CheckboxGroup } from '@/shared/ui/kit/checkbox';
import { Divider } from '@/shared/ui/kit/divider';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Url } from '@/shared/ui/kit/url';

import { quoteRequestFormSchema } from '../../model/schema';
import st from './Form.module.scss';

export const Form = () => {
  const t = useTranslations('quoteRequestForm');

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      description: '',
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
      files: [],
    },
    resolver: zodResolver(quoteRequestFormSchema),
  });

  const serviceValue = watch('service');

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className={st.layout} onSubmit={onSubmit}>
      <section className={st.section}>
        <h2>{t('yourInfo', { fallback: 'Your Info' })}</h2>
        <p className={st.text}>
          {t('dontWorry', { fallback: 'Don’t Worry, We’ll Keep It Private' })}
        </p>
      </section>
      <section className={st.formFlex}>
        <FormRow>
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
        </FormRow>
        <FormRow>
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
                placeholder={t('phone', { fallback: 'Phone' })}
                hint={errors.phone?.message}
                {...field}
              />
            )}
          />
        </FormRow>
      </section>
      <section className={st.formFlex}>
        <h3>{t('preferredContactMethod', { fallback: 'Preferred Contact Method' })}</h3>
        <Controller
          control={control}
          name="contactMethod"
          render={({ field }) => (
            <CheckboxGroup
              options={[
                { label: t('email', { fallback: 'Email' }), value: 'email' },
                { label: t('phone', { fallback: 'Phone' }), value: 'phone' },
                { label: t('whatsapp', { fallback: 'WhatsApp' }), value: 'whatsapp' },
              ]}
              value={field.value}
              onChange={field.onChange}
              multiple={false}
              intent={errors.contactMethod ? 'danger' : 'default'}
            />
          )}
        />
      </section>
      <Divider />
      <section className={st.section}>
        <h2>{t('projectDetails', { fallback: 'Project Details' })}</h2>
        <p className={st.text}>{t('weAreAllEars', { fallback: 'We’re All Ears' })}</p>
      </section>
      <section className={st.formFlex}>
        <h3>{t('whatServiceDoYouNeed', { fallback: 'What Service Do You Need?' })}</h3>
        <Controller
          control={control}
          name="service"
          render={({ field }) => (
            <CheckboxGroup
              options={[
                { label: t('3DModelling', { fallback: '3D Modelling' }), value: '3D-modelling' },
                { label: t('animation', { fallback: 'Animation' }), value: 'animation' },
                {
                  label: t('videoProduction', { fallback: 'Video Production' }),
                  value: 'video-production',
                },
                { label: t('uiuxDesign', { fallback: 'UI/UX Design' }), value: 'ui-ux-design' },
                { label: t('other', { fallback: 'Other' }), value: 'other' },
              ]}
              value={field.value}
              onChange={field.onChange}
              multiple={false}
              intent={errors.service ? 'danger' : 'default'}
            />
          )}
        />
        {serviceValue === 'other' && (
          <TextField
            placeholder={t('pleaseSpecify', { fallback: 'Please Specify' })}
            {...register('otherService')}
          />
        )}
      </section>
      <section className={st.formFlex}>
        <h3>{t('projectType', { fallback: 'Project Type' })}</h3>
        <Controller
          control={control}
          name="projectType"
          render={({ field }) => (
            <CheckboxGroup
              options={[
                { label: t('newProject', { fallback: 'New Project' }), value: 'new-project' },
                {
                  label: t('ongoingProject', { fallback: 'Ongoing Project' }),
                  value: 'ongoing-project',
                },
                {
                  label: t('consultationOnly', { fallback: 'Consultation Only' }),
                  value: 'consultation-only',
                },
              ]}
              value={field.value}
              onChange={field.onChange}
              multiple={false}
              intent={errors.projectType ? 'danger' : 'default'}
            />
          )}
        />
      </section>
      <section className={st.formFlex}>
        <h3>
          {t('doYouHaveAReferenceOrMoodBoard', {
            fallback: 'Do You Have a Reference or Mood Board?',
          })}
        </h3>
        <Controller
          name="files"
          control={control}
          render={({ field }) => (
            <Dropdzone name="files" onDrop={field.onChange} value={field.value} />
          )}
        />
      </section>
      <section className={st.formFlex}>
        <h3>{t('describeYourProject', { fallback: 'Describe Your Project' })}</h3>
        <TextArea
          placeholder={t('description', { fallback: 'Description' })}
          hint={errors.description?.message}
          {...register('description')}
        />
      </section>
      <Divider />
      <section className={st.section}>
        <h2>{t('budgetAndTimeline', { fallback: 'Budget & Timeline' })}</h2>
        <p className={st.text}>{t('letsMakeItWork', { fallback: 'Let’s Make It Work!' })}</p>
      </section>
      <section className={st.formFlex}>
        <h3>{t('estimatedBudget', { fallback: 'Estimated Budget' })}</h3>
        <Controller
          control={control}
          name="budget"
          render={({ field }) => (
            <CheckboxGroup
              options={[
                { label: '<€500', value: '<€500' },
                { label: '€500-€2,000', value: '€500-€2,000' },
                { label: '€2,000-€5,000', value: '€2,000-€5,000' },
                { label: '€5,000+', value: '€5,000+' },
                { label: t('flexible', { fallback: 'Flexible' }), value: 'flexible' },
              ]}
              value={field.value}
              onChange={field.onChange}
              multiple={false}
              intent={errors.budget ? 'danger' : 'default'}
            />
          )}
        />
      </section>
      <section className={st.formFlex}>
        <h3>{t('urgencyLevel', { fallback: 'Urgency Level' })}</h3>
        <Controller
          control={control}
          name="urgencyLevel"
          render={({ field }) => (
            <CheckboxGroup
              options={[
                { label: t('standard', { fallback: 'Standard' }), value: 'standard' },
                { label: t('rush', { fallback: 'Rush' }), value: 'rush' },
                { label: t('asap', { fallback: 'ASAP' }), value: 'asap' },
                {
                  label: t('justExploring', { fallback: 'Just Exploring' }),
                  value: 'just-exploring',
                },
              ]}
              value={field.value}
              onChange={field.onChange}
              multiple={false}
              intent={errors.urgencyLevel ? 'danger' : 'default'}
            />
          )}
        />
      </section>
      <section className={st.formFlex}>
        <h3>{t('projectDeadline', { fallback: 'Project Deadline' })}</h3>
        <Controller
          control={control}
          name="projectDeadline"
          render={({ field }) => (
            <DropdownCalendar
              value={field.value ? new Date(field.value) : undefined}
              onChange={(date) => field.onChange(date.toISOString())}
            />
          )}
        />
      </section>
      <section className={st.formFlex}>
        <h3>
          {t('preferredFileFormatForDelivery', { fallback: 'Preferred File Format for Delivery' })}
        </h3>
        <Controller
          control={control}
          name="urgencyLevel"
          render={({ field }) => (
            <CheckboxGroup
              options={[
                { label: 'PNG', value: 'png' },
                { label: 'MP4', value: 'mp4' },
                { label: 'GIF', value: 'gif' },
                { label: 'OBJ', value: 'obj' },
                { label: 'STL', value: 'stl' },
                { label: 'Figma', value: 'figma' },
                { label: t('other', { fallback: 'Other' }), value: 'other' },
              ]}
              value={field.value}
              onChange={field.onChange}
              multiple={false}
              intent={errors.revision ? 'danger' : 'default'}
            />
          )}
        />
      </section>
      <Divider />
      <section className={st.section}>
        <h2>{t('anythingElse', { fallback: 'Anything Else?' })}</h2>
        <p className={st.text}>{t('weLovePreferences', { fallback: 'We Love Preferences' })}</p>
      </section>
      <section className={st.formFlex}>
        <h3>{t('anythingElse', { fallback: 'Anything Else?' })}</h3>
        <Controller
          control={control}
          name="revision"
          render={({ field }) => (
            <CheckboxGroup
              options={[
                {
                  label: t('openToSuggestions', { fallback: 'Open to Suggestions' }),
                  value: 'open-to-suggestions',
                },
                {
                  label: t('strictGuidelines', { fallback: 'Strict Guidelines' }),
                  value: 'strict-guidelines',
                },
                {
                  label: t('collaborationBased', { fallback: 'Collaboration-Based' }),
                  value: 'collaboration-based',
                },
              ]}
              value={field.value}
              onChange={field.onChange}
              multiple={false}
              intent={errors.revision ? 'danger' : 'default'}
            />
          )}
        />
      </section>
      <section className={st.formFlex}>
        <h3>{t('wouldCall', { fallback: 'Would You Like a Free Consultation Call?' })}</h3>
        <Controller
          control={control}
          name="wouldCall"
          render={({ field }) => (
            <CheckboxGroup
              options={[
                { label: t('yes', { fallback: 'Yes' }), value: 'yes' },
                { label: t('no', { fallback: 'No' }), value: 'no' },
              ]}
              value={field.value}
              onChange={field.onChange}
              multiple={false}
              intent={errors.wouldCall ? 'danger' : 'default'}
            />
          )}
        />
      </section>
      <Divider />
      <RespectPrivacy />
      <Controller
        control={control}
        name="isAgree"
        render={({ field }) => (
          <Checkbox
            label={
              <>
                {t('iAgree.0', { fallback: 'I agree to the' })}{' '}
                <Url href="/terms-of-use">{t('iAgree.1', { fallback: 'Terms of Use' })}</Url>{' '}
                {t('iAgree.2', { fallback: 'and' })}{' '}
                <Url href="/privacy-policy">{t('iAgree.3', { fallback: 'Privacy Policy' })}</Url>.
              </>
            }
            checked={field.value}
            onCheckedChange={field.onChange}
            intent={errors.isAgree ? 'danger' : 'default'}
          />
        )}
      />
      <Btn type="submit" fullWidth>
        {t('startTheProjectToday', { fallback: 'Start the Project Today' })}
      </Btn>
    </form>
  );
};
