'use client';

import Link from 'next/link';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { BackIcon } from '@/shared/ui/icons/back';
import { Label, Text } from '@/shared/ui/kit';

import styles from './ShopHero.module.scss';

export const ShopHero = ({
  title,
  description,
  backgroundImage,
  label,
  back = false,
}: {
  title: React.ReactNode;
  description: string;
  backgroundImage: string;
  label: string;
  back?: boolean;
}) => {
  const t = useTranslations('shopHero');

  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.hero__background} />
      <div className={'_container'}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.hero__content}
        >
          {back && (
            <Link href="/shop" className={styles.back}>
              <BackIcon />
              {t('back', { fallback: 'Back' })}
            </Link>
          )}
          <Label text={label} />
          <h1 className={styles.title}>{title}</h1>
          <Text text={description} className={'alignLeft'} />
        </motion.div>
      </div>
    </section>
  );
};
