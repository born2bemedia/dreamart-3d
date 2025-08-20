'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Label, Text, Title } from '@/shared/ui/kit';

import styles from './WorkPreview.module.scss';

export const WorkPreview = ({
  title,
  label,
  description,
  type,
  previews,
}: {
  title: string;
  label: string;
  description: string;
  type: 'images' | 'videos';
  previews: { src: string }[];
}) => {
  return (
    <section className={styles.workPreview}>
      <div className={'_container'}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.workPreview__top}
        >
          <Title title={title} tag="h2" />
          <Label text={label} />
          <Text text={description} />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.workPreview__content}
        >
          {type === 'images' ? (
            <div className={styles.workPreview__images}>
              {previews.map((preview) => (
                <Image key={preview.src} src={preview.src} alt="preview" width={253} height={253} />
              ))}
            </div>
          ) : (
            <div className={styles.workPreview__videos}>
              {previews.map((preview) => (
                <video
                  key={preview.src}
                  src={preview.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className={styles.workPreview__video}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
