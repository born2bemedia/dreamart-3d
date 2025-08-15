'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Btn } from '@/shared/ui/kit/btn';
import { Tag } from '@/shared/ui/kit/tag';

import st from './AboutDreamart.module.scss';

const getCards = () => [
  {
    imgUrl: '/images/impact/3d-magic.svg',
    title: 'The 3D Magician',
    text: 'The one who can turn any sketch into a 3D model that’s print-ready.',
  },
  {
    imgUrl: '/images/impact/anim-ninja.svg',
    title: 'The Animator Ninja',
    text: 'Fast, precise, and always ready to bring life to your ideas, frame by frame.',
  },
  {
    imgUrl: '/images/impact/design.svg',
    title: 'The Design Genius',
    text: 'They’ve got an eye for aesthetics and an obsession with functionality — perfect for UI/UX that’s both beautiful and intuitive.',
  },
  {
    imgUrl: '/images/impact/story.svg',
    title: 'The Storyteller',
    text: 'The mastermind behind those unforgettable videos that capture hearts and minds.',
  },
];

export const AboutDreamart = () => {
  return (
    <div className="_container">
      <section className={st.container}>
        <section className={st.layout}>
          <div className={st.titleLayout}>
            <div className={st.title}>
              <Tag>aka the Digital Avengers</Tag>
              <h2>About Dreamart</h2>
            </div>
            <p>
              We’re a quirky team of 3D artists, animators, designers, and tech enthusiasts who
              believe that creativity has no limits.
            </p>
          </div>
          <section className={st.cards}>
            {getCards().map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </section>
        </section>
        <Link href="/services" className={st.btnLink}>
          <Btn>Want to Join the Fun?</Btn>
        </Link>
      </section>
    </div>
  );
};

const Card = ({ imgUrl, text, title }: { imgUrl: string; title: string; text: string }) => {
  return (
    <section className={st.card}>
      <Image className={st.img} src={imgUrl} alt={title} width={491} height={491} />
      <div className={st.titleLayout}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </section>
  );
};
