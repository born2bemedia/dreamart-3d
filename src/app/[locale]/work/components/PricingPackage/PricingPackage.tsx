'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { Button, Text, Title } from '@/shared/ui/kit';

import styles from './PricingPackage.module.scss';

export const PricingPackage = () => {
  const t = useTranslations('pricingPackage');

  return (
    <section className={styles.pricingPackage}>
      <div className={'_container'}>
        <div className={styles.pricingPackage__content}>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Title
              title={t('title', {
                fallback: 'Pricing & Packages',
              })}
              className="alignLeft"
              tag="h2"
            />
            <Text
              text={t('description', {
                fallback:
                  'We believe in fair, transparent pricing for all our services. From emerging artists to established creators, we offer flexible packages designed to suit your vision and budget. Get the high-quality, personalized service you deserve, without hidden costs. Let’s bring your creative ideas to life at a price that works for you.',
              })}
              className="alignLeft"
            />
            <Button
              text={t('button', {
                fallback: 'See Our Prices',
              })}
              type="link"
              href="/prices"
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image src="/images/work/pricing.png" alt="pricing-package" width={523} height={523} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
