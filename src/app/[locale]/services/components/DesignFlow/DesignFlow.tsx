'use client';

import Link from 'next/link';

import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';

import { Btn } from '@/shared/ui/kit/btn';
import { Tag } from '@/shared/ui/kit/tag';

import st from './DesignFlow.module.scss';

const getCard = (t: ReturnType<typeof useTranslations>) => [
  {
    number: 1,
    title: t('cards.0.title', { fallback: 'Discovery & Research' }),
    tag: (
      <>
        {t('cards.0.tag.0', { fallback: 'Understanding Your Needs' })}
        <br />({t('cards.0.tag.1', { fallback: 'And Your Users’ Needs Too' })})
      </>
    ),
    desc: t('cards.0.desc', {
      fallback:
        'We start by diving deep into your brand and understanding your audience. It’s not just about designing for today — it’s about predicting what users need and how they think. We get to know your goals, your users, and the big picture before we even start sketching.',
    }),
  },
  {
    number: 2,
    title: t('cards.1.title', { fallback: 'Wireframing & Prototyping' }),
    tag: t('cards.1.tag', { fallback: 'Where the Fun Begins' }),
    desc: t('cards.1.desc', {
      fallback:
        'Time to make the first move! We map out wireframes and create interactive prototypes to show you the layout and flow. Think of it as the skeleton of your future digital masterpiece — no clothes yet, but it’s already looking pretty good!',
    }),
  },
  {
    number: 3,
    title: t('cards.2.title', { fallback: 'Visual Design' }),
    tag: t('cards.2.tag', { fallback: 'Making It Shine' }),
    desc: t('cards.2.desc', {
      fallback:
        'Now, we add the fun stuff — colors, typography, icons, and all the visual elements that make your design pop! This is where we take the wireframe and turn it into something beautiful. It’s all about balance — functionality meets aesthetics to create a design that’s as smooth as it is stylish.',
    }),
  },
  {
    number: 4,
    title: t('cards.3.title', { fallback: 'User Testing' }),
    tag: t('cards.3.tag', { fallback: 'Feedback = Improvement' }),
    desc: t('cards.3.desc', {
      fallback:
        'Time to put our design to the test! We engage real users with the prototype, gather their feedback, and identify any friction points. The goal? To perfect the user journey and ensure a seamless experience for all users.',
    }),
  },
  {
    number: 5,
    title: t('cards.4.title', { fallback: 'Development Handoff' }),
    tag: t('cards.4.tag', { fallback: 'The Final Push' }),
    desc: t('cards.4.desc', {
      fallback:
        'Once everything’s polished, we pass it on to the dev team, ensuring every pixel is in place and the design flows seamlessly into development. Our collaboration ensures that the final product not only looks great but also works flawlessly.',
    }),
  },
  {
    number: 6,
    title: t('cards.5.title', { fallback: 'Launch & Iteration' }),
    tag: t('cards.5.tag', { fallback: 'We Don’t Stop After Launch' }),
    desc: t('cards.5.desc', {
      fallback:
        'We believe that a design is never truly finished. After launch, we continue to monitor, gather user feedback, and iterate to improve. The digital world is ever-changing, and we stay ahead by constantly fine-tuning and enhancing our services.',
    }),
  },
];

export const DesignFlow = () => {
  const t = useTranslations('services.design.flow');

  return (
    <section className={st.layout}>
      <header className={st.header}>
        <div className={st.header__content}>
          <h2 className={st.header__title}>{t('title', { fallback: 'Our UI/UX Design Flow' })}</h2>
          <Tag>{t('tag', { fallback: 'Creating Flawless Journeys from Start to Finish' })}</Tag>
        </div>
        <p className={st.header__desc}>
          {t('desc', {
            fallback:
              'At Dreamart 3D, our UI/UX design flow is all about making your users’ journey smooth, intuitive, and downright delightful. From brainstorming to final clicks, we ensure every step is a piece of the puzzle, creating a cohesive and unforgettable experience. Here’s how we do it:',
          })}
        </p>
      </header>
      <section className={st.cards}>
        {getCard(t).map((card) => (
          <Card key={card.number} {...card} />
        ))}
      </section>
      <Link href="/prices" className={st.btn}>
        <Btn>{t('btn', { fallback: 'See Our Packages & Prices' })}</Btn>
      </Link>
    </section>
  );
};

const Card = ({
  desc,
  number,
  tag,
  title,
}: {
  number: number;
  title: string;
  desc: string;
  tag: ReactNode;
}) => {
  return (
    <article className={st.card}>
      <header className={st.cardHeader}>
        <span className={st.cardHeader__number}>{number}</span>
        <h3>{title}</h3>
      </header>
      <Tag>{tag}</Tag>
      <p>{desc}</p>
    </article>
  );
};
