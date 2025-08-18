'use client';

import { useTranslations } from 'next-intl';

import { BlueCheckIcon } from '@/shared/ui/icons';
import { Button } from '@/shared/ui/kit';

import styles from './PricingItem.module.scss';

import type { PricingItem as PricingItemType } from '@/featured/prices/model/types';

export const PricingItem = ({
  title,
  description,
  price,
  includes,
  button_text,
}: PricingItemType) => {
  const t = useTranslations('prices');

  return (
    <div className={styles.pricingItem}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>{t('includes', { fallback: 'Includes' })}:</h4>
        <ul>
          {includes.map((include) => (
            <li key={include.id}>
              <BlueCheckIcon />
              <span>{include.feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className={styles.pricingItem__price}>
          {t('price', { fallback: 'From' })} <span>€{price}</span>
        </div>
        <Button text={button_text} type="button" />
      </div>
    </div>
  );
};
