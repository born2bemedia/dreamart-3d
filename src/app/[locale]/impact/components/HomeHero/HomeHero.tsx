'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './HomeHero.module.scss';

export const Hero = () => {
  const t = useTranslations('impact.hero');

  return (
    <section className={styles.hero}>
      <video
        src="/videos/impact/hero.mp4"
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
            {t('title.0', { fallback: 'Making an Impact,' })}
            <br />
            {t('title.1', { fallback: 'One Pixel at a Time' })}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t('description', {
              fallback:
                'Welcome to Moddle 3D — the place where ideas turn into tangible reality, imagination is our superpower, and creativity is our secret weapon. We don’t just create 3D models, animations, and designs — we craft experiences that make your brand unforgettable.',
            })}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
