'use client';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Label, Text, Title } from '@/shared/ui/kit';

import styles from './WhatWeDo.module.scss';

export const WhatWeDo = () => {
  const t = useTranslations('whatWeDo');

  return (
    <section className={styles.whatWeDo}>
      <div className={'_container'}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.whatWeDo__content}
        >
          <Title
            title={t('title', {
              fallback: 'What We Do',
            })}
          />
          <Label
            text={t('label', {
              fallback: 'We Turn Your Ideas Into 3D Realities... (No, Seriously)',
            })}
          />
          <Text
            text={t('description', {
              fallback:
                'At Moddle 3D, we’re not just designers — we’re magicians. We craft everything from detailed 3D models to animations that make you say “WOW.” Need a digital experience that users won’t forget? We’ve got you covered with stunning UI/UX design. Think of us as the fairy godmothers of digital content, only way cooler.',
            })}
          />
        </motion.div>
        <div className={styles.whatWeDo__cards}>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image src="/images/home/whatWeDo1.png" alt="card1" width={300} height={300} />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image src="/images/home/whatWeDo2.png" alt="card2" width={300} height={300} />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image src="/images/home/whatWeDo3.png" alt="card3" width={300} height={300} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
