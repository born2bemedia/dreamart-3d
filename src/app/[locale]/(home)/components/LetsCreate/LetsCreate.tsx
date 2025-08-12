'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Text, Title } from '@/shared/ui/kit';

import styles from './LetsCreate.module.scss';

import { RequestForm } from '@/featured/request-form/ui/RequestForm';

export const LetsCreate = () => {
  const t = useTranslations('letsCreate');

  return (
    <section className={styles.letsCreate}>
      <div className={'_container'}>
        <div className={styles.letsCreate__content}>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.left}
          >
            <Title
              title={t('title', {
                fallback: 'Let’s Create Something Epic Together',
              })}
              className={'alignLeft'}
            />
            <Text
              text={t('description', {
                fallback:
                  'Starting a new project or looking to elevate an existing one, we’re here to help. Let’s turn your vision into a masterpiece.',
              })}
              className={'alignLeft'}
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.right}
          >
            <RequestForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
