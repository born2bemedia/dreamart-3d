'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './HomeHero.module.scss';

export const Hero = () => {
  const t = useTranslations('trends.hero');

  return (
    <section className={styles.hero}>
      <video
        src="/videos/trends/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={styles.hero__video}
      />
      <div className={styles.hero__overlay} />
      <div className={'_container'}>
        <div className={styles.hero__content}>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t('hero.title', { fallback: 'The Future of 3D Creativity' })}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t('hero.description', {
              fallback:
                'At Dreamart 3D, we’re all about staying ahead of the curve. This is where we talk trends, share insights, and keep you updated on everything exciting in the world of 3D modelling, animation, UI/UX design, and video production. Explore the latest innovations and see how they’re shaping the future of digital creativity.',
            })}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
