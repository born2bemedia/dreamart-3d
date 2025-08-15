'use client';

import { Tag } from '@/shared/ui/kit/tag';

import st from './ByTheNumbers.module.scss';

const getStats = () => [
  {
    stat: '500+',
    title: '3D Models Created',
    text: 'From prototypes to art, we’ve designed models for various industries.',
  },
  {
    stat: '300+',
    title: 'Successful Animations',
    text: 'From prototypes to art, we’ve designed models for various industries.',
  },
  {
    stat: '200+',
    title: 'UI/UX Designs',
    text: 'Crafting intuitive, visually stunning designs for websites and apps.',
  },
  {
    stat: '150+',
    title: 'Video Productions',
    text: 'Creating high-impact videos that drive results and tell powerful stories.',
  },
  {
    stat: '50+',
    title: 'Happy Clients',
    text: 'Artists, creators, and businesses who trust us to bring their ideas to life.',
  },
];

export const ByTheNumbers = () => {
  const stats = getStats();

  return (
    <div className="_container">
      <section className={st.layout}>
        <section className={st.titleLayout}>
          <h3>By the Numbers</h3>
          <Tag>Here’s a Quick Glimpse of What We’ve Achieved</Tag>
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
