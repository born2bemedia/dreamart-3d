'use client';

import { zodResolver } from '@hookform/resolvers/zod';
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
        <h2>Your Info</h2>
        <p className={st.text}>Don’t Worry, We’ll Keep It Private</p>
      </section>
      <section className={st.formFlex}>
        <FormRow>
          <TextField
            placeholder="First Name"
            hint={errors.firstName?.message}
            {...register('firstName')}
          />
          <TextField
            placeholder="Last Name"
            hint={errors.lastName?.message}
            {...register('lastName')}
          />
        </FormRow>
        <FormRow>
          <TextField placeholder="Email" hint={errors.email?.message} {...register('email')} />
          <Controller
            control={control}
            name="phone"
            render={({ field }) => (
              <PhoneField placeholder="Phone" hint={errors.phone?.message} {...field} />
            )}
          />
        </FormRow>
      </section>
      <section className={st.formFlex}>
        <h3>Preferred Contact Method</h3>
        <Controller
          control={control}
          name="contactMethod"
          render={({ field }) => (
            <CheckboxGroup
              options={[
                { label: 'Email', value: 'email' },
                { label: 'Phone', value: 'phone' },
                { label: 'WhatsApp', value: 'whatsapp' },
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
        <h2>Project Details</h2>
        <p className={st.text}>We’re All Ears</p>
      </section>
      <section className={st.formFlex}>
        <h3>What Service Do You Need?</h3>
        <Controller
          control={control}
          name="service"
          render={({ field }) => (
            <CheckboxGroup
              options={[
                { label: '3D modelling', value: '3D-modelling' },
                { label: 'Animation', value: 'animation' },
                { label: 'Video Production', value: 'video-production' },
                { label: 'UI/UX Design', value: 'ui-ux-design' },
                { label: 'Other', value: 'other' },
              ]}
              value={field.value}
              onChange={field.onChange}
              multiple={false}
              intent={errors.service ? 'danger' : 'default'}
            />
          )}
        />
        {serviceValue === 'other' && (
          <TextField placeholder="Please specify" {...register('otherService')} />
        )}
      </section>
      <section className={st.formFlex}>
        <h3>Project Type</h3>
        <Controller
          control={control}
          name="projectType"
          render={({ field }) => (
            <CheckboxGroup
              options={[
                { label: 'New Project', value: 'new-project' },
                { label: 'Ongoing Project', value: 'ongoing-project' },
                { label: 'Consultation Only', value: 'consultation-only' },
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
        <h3>Do You Have a Reference or Mood Board?</h3>
        <Controller
          name="files"
          control={control}
          render={({ field }) => (
            <Dropdzone name="files" onDrop={field.onChange} value={field.value} />
          )}
        />
      </section>
      <section className={st.formFlex}>
        <h3>Describe Your Project</h3>
        <TextArea
          placeholder="Description"
          hint={errors.description?.message}
          {...register('description')}
        />
      </section>
      <Divider />
      <section className={st.section}>
        <h2>Budget & Timeline</h2>
        <p className={st.text}>Let’s Make It Work!</p>
      </section>
      <section className={st.formFlex}>
        <h3>Estimated Budget</h3>
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
                { label: 'Flexible', value: 'Flexible' },
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
        <h3>Urgency Level</h3>
        <Controller
          control={control}
          name="urgencyLevel"
          render={({ field }) => (
            <CheckboxGroup
              options={[
                { label: 'Standard', value: 'standard' },
                { label: 'Rush', value: 'rush' },
                { label: 'ASAP', value: 'asap' },
                { label: 'Just Exploring+', value: 'just-exploring' },
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
        <h3>Project Deadline</h3>
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
        <h3>Preferred File Format for Delivery</h3>
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
                { label: 'Other', value: 'other' },
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
        <h2>Anything Else?</h2>
        <p className={st.text}>We Love Preferences</p>
      </section>
      <section className={st.formFlex}>
        <h3>Anything Else?</h3>
        <Controller
          control={control}
          name="revision"
          render={({ field }) => (
            <CheckboxGroup
              options={[
                { label: 'Open to Suggestions', value: 'open-to-suggestions' },
                { label: 'Strict Guidelines', value: 'strict-guidelines' },
                { label: 'Collaboration-Based', value: 'collaboration-based' },
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
        <h3>Would You Like a Free Consultation Call?</h3>
        <Controller
          control={control}
          name="wouldCall"
          render={({ field }) => (
            <CheckboxGroup
              options={[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
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
                I agree to the <Url href="/terms-of-use">Terms of Use</Url> and{' '}
                <Url href="/privacy-policy">Privacy Policy</Url>.
              </>
            }
            checked={field.value}
            onCheckedChange={field.onChange}
            intent={errors.isAgree ? 'danger' : 'default'}
          />
        )}
      />
      <Btn type="submit" fullWidth>
        Start the Project Today
      </Btn>
    </form>
  );
};
