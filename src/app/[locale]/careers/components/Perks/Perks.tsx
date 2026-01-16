'use client';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

import st from './Perks.module.scss';

const getPerks = (t: ReturnType<typeof useTranslations>) => [
  {
    number: 1,
    title: t('perk.0.title', { fallback: 'Creative freedom' }),
    text: t('perk.0.text', {
      fallback: 'We believe in letting your creativity flow without limits.',
    }),
  },
  {
    number: 2,
    title: t('perk.1.title', { fallback: 'Collaborative environment' }),
    text: t('perk.1.text', { fallback: 'Work with a team that supports and challenges you.' }),
  },
  {
    number: 3,
    title: t('perk.2.title', { fallback: 'Growth opportunities' }),
    text: t('perk.2.text', {
      fallback: 'The more you learn, the more you grow — both personally and professionally.',
    }),
  },
  {
    number: 4,
    title: t('perk.3.title', { fallback: 'Great Vibes' }),
    text: t('perk.3.text', {
      fallback:
        'We work hard, but we also know how to keep it light — no matter where you are! Virtual game nights, online challenges, and plenty of laughs.',
    }),
  },
];

export const Perks = () => {
  const t = useTranslations('careers.perks');

  return (
    <div className="_container">
      <section className={st.layout}>
        <h2>
          {t('title.0', { fallback: 'Perks of Being on the' })} <br />{' '}
          {t('title.1', { fallback: 'Moddle 3D Team' })}
        </h2>
        <section className={st.content}>
          <section className={st.content__list}>
            {getPerks(t).map((perk) => (
              <Card key={perk.number} {...perk} />
            ))}
          </section>
          <Image
            className={st.content__image}
            src="/images/careers/perks.png"
            alt="perks"
            width={561}
            height={561}
            unoptimized
          />
        </section>
      </section>
    </div>
  );
};

export const Card = ({ number, text, title }: { number: number; title: string; text: string }) => (
  <article className={st.card}>
    <span className={st.card__number}>{number}</span>
    <div className={st.card__content}>
      <h3 className={st.card__title}>{title}</h3>
      <p className={st.card__text}>{text}</p>
    </div>
  </article>
);
