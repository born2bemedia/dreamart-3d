'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './Hero.module.scss';

export const Hero = () => {
  const t = useTranslations('careers.hero');

  return (
    <section className={styles.hero}>
      <video
        src="/videos/careers/hero.mp4"
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
            {t('title.0', { fallback: 'Join Our Dream Team:' })} <br />
            {t('title.1', { fallback: 'Where Creativity Meets Fun' })}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t('description', {
              fallback:
                'We’re not your typical agency — we’re a creative powerhouse that thrives on innovation, collaboration, and a little bit of chaos (in the best way possible). If you love pushing the boundaries of what’s possible in the world of 3D modelling, animation, UI/UX design, and video production, then we want YOU on our team!',
            })}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
