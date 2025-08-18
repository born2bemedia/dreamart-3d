'use client';

import { useTranslations } from 'next-intl';

import { Tag } from '@/shared/ui/kit/tag';

import st from './ByTheNumbers.module.scss';

const getStats = (t: ReturnType<typeof useTranslations>) => [
  {
    stat: '500+',
    title: t('stat1.title', { fallback: '3D Models Created' }),
    text: t('stat1.text', {
      fallback: 'From prototypes to art, we’ve designed models for various industries.',
    }),
  },
  {
    stat: '300+',
    title: t('stat2.title', { fallback: 'Successful Animations' }),
    text: t('stat2.text', {
      fallback: 'From prototypes to art, we’ve designed models for various industries.',
    }),
  },
  {
    stat: '200+',
    title: t('stat3.title', { fallback: 'UI/UX Designs' }),
    text: t('stat3.text', {
      fallback: 'Crafting intuitive, visually stunning designs for websites and apps.',
    }),
  },
  {
    stat: '150+',
    title: t('stat4.title', { fallback: 'Video Productions' }),
    text: t('stat4.text', {
      fallback: 'Creating high-impact videos that drive results and tell powerful stories.',
    }),
  },
  {
    stat: '50+',
    title: t('stat5.title', { fallback: 'Happy Clients' }),
    text: t('stat5.text', {
      fallback: 'Artists, creators, and businesses who trust us to bring their ideas to life.',
    }),
  },
];

export const ByTheNumbers = () => {
  const t = useTranslations('impact.byTheNumbers');

  const stats = getStats(t);

  return (
    <div className="_container">
      <section className={st.layout}>
        <section className={st.titleLayout}>
          <h3>{t('title', { fallback: 'By the Numbers' })}</h3>
          <Tag>{t('text', { fallback: 'Here’s a Quick Glimpse of What We’ve Achieved' })}</Tag>
        </section>
        <section className={st.cardLayout}>
          <div className={st.cardRow}>
            {stats.slice(0, 3).map((stat) => (
              <Card key={stat.title} {...stat} />
            ))}
          </div>
          <div className={st.cardRow}>
            {stats.slice(3, 5).map((stat) => (
              <Card key={stat.title} {...stat} />
            ))}
          </div>
        </section>
      </section>
    </div>
  );
};

const Card = ({ stat, title, text }: { stat: string; title: string; text: string }) => {
  return (
    <div className={st.card}>
      <div className={st.info}>
        <h5>{stat}</h5>
        <h4>{title}</h4>
      </div>
      <p>{text}</p>
    </div>
  );
};
