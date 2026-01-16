'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './PricesHero.module.scss';

export const PricesHero = () => {
  const t = useTranslations('pricesHero');

  return (
    <section className={styles.hero}>
      <video
        src="/videos/prices/prices.mp4"
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
                fallback: 'Our Pricing: Choose Your <br/>Perfect Package',
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
                  'At Moddle 3D, we offer flexible packages designed to fit your <br/>needs and budget. Whether you’re looking for animation, UI/UX <br/>design, or video production, we’ve got something for you. Here’s <br/>everything you get with each package!',
              }),
            }}
          />
        </div>
      </div>
    </section>
  );
};
