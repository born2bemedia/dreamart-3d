'use client';


import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';

import styles from './DealsHero.module.scss';

export const DealsHero = () => {
  const t = useTranslations('dealsHero');

  return (
    <section className={styles.hero}>
      <div className={styles.hero__overlay} />
      <div className={'_container'}>
        <div className={styles.hero__content}>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Hot Deals, Cool Models!',
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
                  'Why pay full price when you can get the best 3D models at a discounted rate? Our limited-time offers are too good to miss! Whether you’re looking for stunning decor, custom keychains, or unique jewelry pieces, we’ve got you covered with amazing deals on high-quality, print-ready models. But hurry — these deals won’t last forever! Get them while you can, and make your ideas come to life with incredible savings.',
              }),
            }}
          />
        </div>
      </div>
    </section>
  );
};
