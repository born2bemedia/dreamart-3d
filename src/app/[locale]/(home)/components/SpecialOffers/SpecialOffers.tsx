'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button, Label, Text, Title } from '@/shared/ui/kit';

import styles from './SpecialOffers.module.scss';

export const SpecialOffers = () => {
  const t = useTranslations('specialOffers');

  return (
    <section className={styles.specialOffers}>
      <div className={'_container'}>
        <div className={styles.specialOffers__content}>
          <video
            src="/videos/homeBanner.mp4"
            autoPlay
            muted
            loop
            playsInline
            className={styles.specialOffers__video}
          />
          <div className={styles.specialOffers__overlay} />
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.specialOffers__inner}
          >
            <Title
              title={t('title', {
                fallback: 'Special Offers',
              })}
            />
            <Label
              text={t('label', {
                fallback: 'Limited Time Magic! Don’t Let It Disappear!',
              })}
            />
            <Text
              text={t('text', {
                fallback:
                  'We’re offering exclusive deals to help bring your digital dreams to life. <br/>Don’t wait around — these offers won’t last forever.',
              })}
            />
            <Button
              text={t('button', {
                fallback: 'Grab the Offer Before It Vanishes',
              })}
              type="link"
              href="#"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
