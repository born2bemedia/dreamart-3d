'use client';

import Image from 'next/image';
import Link from 'next/link';

import type { ReactNode } from 'react';

import { cn } from '@/shared/lib/utils/cn';
import { Btn } from '@/shared/ui/kit/btn';
import { Tag } from '@/shared/ui/kit/tag/Tag';

import st from './SectionInfo.module.scss';

export const SectionInfo = ({
  imgUrl,
  infoMeta,
  buttonMeta,
  reverse = false,
}: {
  imgUrl: string;
  infoMeta: { title: string; text: ReactNode; tag: string };
  buttonMeta: { label: string; href: string };
  reverse?: boolean;
}) => {
  return (
    <div className="_container">
      <section className={cn(st.layout, reverse && st.reverse)}>
        <div className={st.content}>
          <div className={st.info}>
            <h3>{infoMeta.title}</h3>
            <Tag>{infoMeta.tag}</Tag>
          </div>
          <p>{infoMeta.text}</p>
          <Link href={buttonMeta.href} className={st.btn}>
            <Btn>{buttonMeta.label}</Btn>
          </Link>
        </div>
        <Image
          className={st.image}
          src={imgUrl}
          alt="section-info"
          width={500}
          height={500}
          unoptimized
        />
      </section>
    </div>
  );
};
