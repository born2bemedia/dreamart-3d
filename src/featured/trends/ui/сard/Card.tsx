'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import type { TrendPreview } from '../../model/types';
import st from './Card.module.scss';

export const TrendPreviewCard = ({ description, image, slug, title }: TrendPreview) => {
  const t = useTranslations('trends');

  return (
    <article className={st.layout}>
      <Image className={st.img} src={image} alt={title} width={338} height={200} />
      <div className={st.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link href={`/trends/${slug}`}>
        {t('readMore', { fallback: 'Read more' })} <ArrowRight />
      </Link>
    </article>
  );
};

export const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path
      d="M3.66536 11L18.332 11M18.332 11L12.832 16.5M18.332 11L12.832 5.5"
      stroke="#2583FF"
      strokeWidth="1.375"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
