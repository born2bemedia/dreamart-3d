'use client';

import { useTranslations } from 'next-intl';

import st from './ApplyForm.module.scss';

import { CareerForm } from '@/featured/careers/ui/form';

export const ApplyForm = () => {
  const t = useTranslations('careers.applyForm');

  return (
    <div className="_container">
      <section className={st.layout} id="form">
        <div className={st.content}>
          <h2>{t('title', { fallback: 'Ready to Join the Fun?' })}</h2>
          <p>
            {t('description', {
              fallback:
                'If you’re ready to bring your creativity, skills, and good vibes to Moddle 3D, we want to hear from you! Fill out the form below and show us what makes you extraordinary. Let’s create, collaborate, and have some fun along the way. The adventure starts now!',
            })}
          </p>
        </div>
        <CareerForm />
      </section>
    </div>
  );
};
