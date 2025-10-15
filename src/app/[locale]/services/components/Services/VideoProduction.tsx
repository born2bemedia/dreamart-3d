'use client';

import { useTranslations } from 'next-intl';

import { Tag } from '@/shared/ui/kit/tag';

import { OurShowreel } from '../OurShowreel/OurShowreel';
import { ReadyTo } from '../ReadyTo/ReadyTo';
import { VideoProdMagic } from '../VideoProdMagic/VideoProdMagic';
import st from './Services.module.scss';

const getVideoProduction = (t: ReturnType<typeof useTranslations>) => [
  t('services.0', { fallback: 'Corporate Videos' }),
  t('services.1', { fallback: 'Product Promo Videos' }),
  t('services.2', { fallback: 'Brand Storytelling Videos' }),
  t('services.3', { fallback: 'Commercials' }),
  t('services.4', { fallback: 'Explainer Videos' }),
  t('services.5', { fallback: 'Event Coverage Videos' }),
  t('services.6', { fallback: 'YouTube Content Creation' }),
  t('services.7', { fallback: 'Training & Tutorial Videos' }),
  t('services.8', { fallback: 'Social Media Videos' }),
  t('services.9', { fallback: 'Testimonial Videos' }),
  t('services.10', { fallback: 'Animated Video Ads' }),
  t('services.11', { fallback: 'Behind-the-Scenes Videos' }),
  t('services.12', { fallback: 'TV Spots' }),
  t('services.13', { fallback: '3D Product Videos' }),
  t('services.14', { fallback: 'Educational Videos' }),
  t('services.15', { fallback: 'Drone Footage Videos' }),
  t('services.16', { fallback: '360° Videos' }),
  t('services.17', { fallback: 'Music Videos' }),
  t('services.18', { fallback: 'Interactive Videos' }),
  t('services.19', { fallback: 'Video Editing Services' }),
];

export const VideoProduction = () => {
  const t = useTranslations('services.videoProduction');

  return (
    <div id="video-production" className={st.serviceLayout}>
      <section className={st.videoProduction}>
        <div className={st.serviceHero__header}>
          <h2 className={st.serviceHero__title}>{t('title', { fallback: 'Video Production' })}</h2>
          <Tag className={st.serviceHero__tag} variant="solid">
            {t('tag', { fallback: 'Where Your Story Gets the Star Treatment' })}
          </Tag>
        </div>
        <p className={st.serviceHero__desc}>
          {t('description', {
            fallback:
              'Let’s make your journey unforgettable. Whether it’s a commercial, a social media ad, or a heartfelt brand story, we create videos that get people talking. From script to screen, we bring creativity, fun, and flair into every frame. Ready for your close-up?',
          })}
        </p>
        <div className={st.filter} />
      </section>
      <section className={st.weOffer}>
        <h2 className={st.weOffer__title}>
          {t('servicesWeOffer', { fallback: 'Services We Offer' })}
        </h2>
        <div className={st.weOffer__list}>
          {getVideoProduction(t).map((item) => (
            <span key={item} className={st.weOffer__tag}>
              {item}
            </span>
          ))}
        </div>
      </section>
      <OurShowreel />
      <VideoProdMagic />
      <ReadyTo
        title={
          <>
            {t('readyToTitle.0', { fallback: 'Got a video idea' })}
            <br />
            {t('readyToTitle.1', { fallback: 'that’s a little wild?' })}
          </>
        }
        text={t('readyToText', { fallback: 'that’s a little wild?' })}
        metaButton={{
          label: t('readyToButton', { fallback: 'Get Pricing Now' }),
          href: '/quote-request-form',
        }}
      />
    </div>
  );
};
