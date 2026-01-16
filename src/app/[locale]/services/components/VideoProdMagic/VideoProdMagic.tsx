'use client';

import Link from 'next/link';

import { cn } from '@/shared/lib/utils/cn';
import { Btn } from '@/shared/ui/kit/btn';

import st from './VideoProdMagix.module.scss';

const getCards = () => [
  {
    title: 'A Vision, a Script, and a Camera',
    text: 'Every masterpiece starts with a concept. We work closely with you to turn your wild ideas into a storyboard that is uniquely yours.',
  },
  {
    title: 'Engage, Don’t Just Inform',
    text: 'Sure, we can tell a story, but we do it with style. We don’t just “explain”; we captivate your audience through visual storytelling that excites and entertains.',
  },
  {
    title: 'Seamless Editing, Perfect Flow',
    text: 'We believe great editing is an art. From pacing to rhythm, we make sure your video flows effortlessly, keeping viewers glued to the screen.',
  },
  {
    title: 'Tailored to Your Brand’s Vibe',
    text: 'Every brand has a unique voice. We’re here to make sure your video isn’t just another clip — it’s a perfectly aligned reflection of who you are.',
  },
  {
    title: 'Watch It Go Viral',
    text: 'Whether you’re going for a cinematic masterpiece or a snappy social media video, we aim to create content that’s impossible to ignore.',
  },
];

export const VideoProdMagic = () => {
  return (
    <section className={st.layout}>
      <h2 className={st.title}>The Moddle 3D Video Production Magic</h2>
      <section className={st.cards}>
        <div className={st.cards__row}>
          {getCards()
            .slice(0, 2)
            .map((card) => (
              <Card key={card.title} {...card} />
            ))}
        </div>
        <div className={st.cards__row}>
          {getCards()
            .slice(2, 4)
            .map((card) => (
              <Card key={card.title} {...card} />
            ))}
        </div>
        {getCards()
          .slice(4, 5)
          .map((card) => (
            <Card key={card.title} center {...card} />
          ))}
      </section>
      <Link href="/work" className={st.btn}>
        <Btn>Take a Peek at Our Projects</Btn>
      </Link>
    </section>
  );
};

const Card = ({
  text,
  title,
  center = false,
}: {
  title: string;
  text: string;
  center?: boolean;
}) => {
  return (
    <article className={cn(st.card, center && st.cardCenter)}>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
};
