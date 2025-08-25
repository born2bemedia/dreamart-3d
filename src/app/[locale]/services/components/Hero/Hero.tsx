'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './Hero.module.scss';

export const Hero = () => {
  const t = useTranslations('servicesHero');

  return (
    <section className={styles.hero}>
      <video
        src="/videos/services/hero.mp4"
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
            {t('title', {
              fallback: 'Turning ‘What Ifs’ Into ‘Wow’',
            })}
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.hero__description}
          >
            {t('description.0', {
              fallback:
                'We don’t just offer services — we create experiences. From 3D models that bring your designs to life to animations that steal the show, we’re all about turning your creative dreams into reality.',
            })}
            <br />
            <br />
            {t('description.1', {
              fallback:
                'Need a stunning website, a jaw-dropping animation, or a game-changing 3D model? We’ve got the skills, creativity, and tech to make it happen. Let’s dive into the world of limitless possibilities together — your imagination is the only limit!',
            })}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
