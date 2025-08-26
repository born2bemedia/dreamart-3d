'use client';

import { useTranslations } from 'next-intl';

import { Tag } from '@/shared/ui/kit/tag';

import { DesignFlow } from '../DesignFlow/DesignFlow';
import { ReadyTo } from '../ReadyTo/ReadyTo';
import st from './Services.module.scss';

const get3DModelingServices = (t: ReturnType<typeof useTranslations>) => [
  t('services.0', { fallback: 'Website Design' }),
  t('services.1', { fallback: 'Mobile App Design' }),
  t('services.2', { fallback: 'User Flow & Wireframing' }),
  t('services.3', { fallback: 'Interactive Prototypes' }),
  t('services.4', { fallback: 'Usability Testing' }),
  t('services.5', { fallback: 'UI Kit Design' }),
  t('services.6', { fallback: 'Landing Page Design' }),
  t('services.7', { fallback: 'Responsive Web Design' }),
  t('services.8', { fallback: 'E-commerce UI Design' }),
  t('services.9', { fallback: 'Custom Icon Design' }),
  t('services.10', { fallback: 'App Interface Design' }),
  t('services.11', { fallback: 'Dashboard Design' }),
  t('services.12', { fallback: 'Brand Guidelines' }),
  t('services.13', { fallback: 'User Journey Mapping' }),
  t('services.14', { fallback: 'Interactive UI Elements' }),
  t('services.15', { fallback: 'Motion Design for UI' }),
  t('services.16', { fallback: 'User Interface Development' }),
  t('services.17', { fallback: 'User Engagement Strategy' }),
  t('services.18', { fallback: 'Information Architecture' }),
  t('services.19', { fallback: 'Multilingual Interface Design' }),
];

export const Design = () => {
  const t = useTranslations('services.design');

  return (
    <div id="ui-ux-design" className={st.serviceLayout}>
      <section className={st.design}>
        <div className={st.serviceHero__header}>
          <h2 className={st.serviceHero__title}>{t('title', { fallback: 'UI/UX Design' })}</h2>
          <Tag className={st.serviceHero__tag} variant="solid">
            {t('tag', { fallback: 'Designs So Smooth, Users Will Want to Hang Around' })}
          </Tag>
        </div>
        <p className={st.serviceHero__desc}>
          {t('description', {
            fallback:
              'We don’t just design websites and apps — we set up experiences that keep users coming back. We create sleek, intuitive, and fun designs that make navigation feel like a breeze. We blend beauty and functionality so your users have a seamless adventure.',
          })}
        </p>
        <div className={st.filter} />
      </section>
      <section className={st.weOffer}>
        <h2 className={st.weOffer__title}>
          {t('servicesWeOffer', { fallback: 'Services We Offer' })}
        </h2>
        <div className={st.weOffer__list}>
          {get3DModelingServices(t).map((item) => (
            <span key={item} className={st.weOffer__tag}>
              {item}
            </span>
          ))}
        </div>
      </section>
      <DesignFlow />
      <ReadyTo
        title={
          <>
            {t('readyToTitle.0', { fallback: 'Have a totally' })}
            <br />
            {t('readyToTitle.1', { fallback: 'one-of-a-kind vision?' })}
          </>
        }
        text={t('readyToText', { fallback: 'Let’s design it for you!' })}
        metaButton={{
          label: t('readyToButton', { fallback: 'Request Your Quote' }),
          href: '/quote-request-form',
        }}
      />
    </div>
  );
};
