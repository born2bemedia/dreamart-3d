'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button } from '@/shared/ui/kit/button/Button';

import styles from './HomeHero.module.scss';

export const HomeHero = () => {
  const t = useTranslations('homeHero');

  return (
    <section className={styles.hero}>
      <video
        src="/videos/video-3d.mp4"
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
            dangerouslySetInnerHTML={{
              __html: t('title1', {
                fallback: 'Welcome to the 3D <br/>Wonderland',
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
                  'Where pixels meet possibilities, from 3D models to mind-blowing <br/>animations and sleek UI/UX designs, we’re here to bring your <br/>ideas to life. The dream begins here.',
              }),
            }}
          />
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button
              text={t('button', {
                fallback: 'Unleash the Magic',
              })}
              type="link"
              href="/quote-request-form"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
