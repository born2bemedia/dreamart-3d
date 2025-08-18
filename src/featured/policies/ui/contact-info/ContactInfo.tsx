'use client';

import { useTranslations } from 'next-intl';

import { LinkIcon } from '@/shared/ui/icons/link';
import { MessageIcon } from '@/shared/ui/icons/message';
import { PhoneIcon } from '@/shared/ui/icons/phone';

import st from './ContactInfo.module.scss';

export const ContactInfo = ({ description, title }: { title: string; description?: string }) => {
  const t = useTranslations('contactInfoPolicy');

  return (
    <section className={st.layout}>
      <h3 className={st.title}>{title}</h3>
      {description && <p className={st.description}>{description}</p>}
      <span className={st.item}>
        <MessageIcon />
        <p>{t('email', { fallback: 'Email' })}: [Insert Email]</p>
      </span>
      <span className={st.item}>
        <PhoneIcon />
        <p>{t('phone', { fallback: 'Phone' })}: [Insert Phone]</p>
      </span>
      <span className={st.item}>
        <LinkIcon />
        <p>
          {t('website', { fallback: 'Website' })}:{' '}
          <a href="https://dreamart3d.com/contacts">www.dreamart3d.com/contacts</a>
        </p>
      </span>
    </section>
  );
};
