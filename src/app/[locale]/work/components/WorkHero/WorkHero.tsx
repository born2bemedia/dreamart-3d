'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './WorkHero.module.scss';

export const WorkHero = () => {
  const t = useTranslations('workHero');

  return (
    <section className={styles.hero}>
      <div className={'_container'}>
        <div className={styles.hero__content}>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{
              __html: t('title1', {
                fallback: 'Shaping Ideas into Digital Art',
              }),
            }}
          />
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{
              __html: t('description', {
                fallback:
                  'At Moddle 3D, we don’t just complete projects — we transform concepts into immersive creations. From 3D models to captivating animations, our work is a blend of creativity, precision, and storytelling. Each project we take on is an opportunity to innovate, challenge norms, and exceed expectations.',
              }),
            }}
          />
        </div>
      </div>
      <Image src="/images/work/hero.png" alt="work" width={1440} height={890} />
    </section>
  );
};
