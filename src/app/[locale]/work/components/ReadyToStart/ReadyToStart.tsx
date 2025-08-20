'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button, Text, Title } from '@/shared/ui/kit';

import styles from './ReadyToStart.module.scss';

export const ReadyToStart = () => {
  const t = useTranslations('readyToStart');

  return (
    <section className={styles.readyToStart}>
      <div className={'_container'}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.readyToStart__content}
        >
          <video
            src="/videos/prices/priceList.mp4"
            autoPlay
            muted
            loop
            playsInline
            className={styles.readyToStart__video}
          />
          <div className={styles.readyToStart__overlay} />
          <Title
            title={t('title', {
              fallback: 'Ready to Start?',
            })}
          />
          <Text
            text={t('description', {
              fallback:
                'At Dreamart 3D, we turn creative concepts into reality with solutions that drive impact. Looking to captivate your audience with stunning visuals or improve user experiences, we’re here to make it happen. Let’s take your project to the next level.',
            })}
          />
          <Button
            text={t('button', {
              fallback: 'Let’s Make It Happen',
            })}
            type="link"
            href="#"
          />
        </motion.div>
      </div>
    </section>
  );
};
