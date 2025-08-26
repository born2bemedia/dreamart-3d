'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button, Text } from '@/shared/ui/kit';

import styles from './ReadyTo.module.scss';

export const ReadyTo = ({
  title,
  text,
  metaButton,
}: {
  title: ReactNode;
  text: string;
  metaButton: { label: string; href: string };
}) => {
  return (
    <section className={styles.readyToStart}>
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
        <h2 className={styles.title}>{title}</h2>
        <Text text={text} />
        <Button text={metaButton.label} type="link" href={metaButton.href} />
      </motion.div>
    </section>
  );
};
