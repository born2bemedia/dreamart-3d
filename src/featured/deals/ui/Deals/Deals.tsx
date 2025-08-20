import Image from 'next/image';

import { getTranslations } from 'next-intl/server';

import { BlueCheckIcon } from '@/shared/ui/icons';
import { Text, Title } from '@/shared/ui/kit';

import { getDeals } from '../../api/get-deals';
import { AddToCart } from '../AddToCart/AddToCart';
import styles from './Deals.module.scss';

export const Deals = async () => {
  const deals = await getDeals();
  const t = await getTranslations('deals');

  return (
    <section className={styles.deals}>
      <div className="_container">
        <div className={styles.deals__content}>
          {deals.map((deal) => (
            <div key={deal.id} className={styles.deals__item}>
              <div className={styles.col1}>
                <Image src={deal.image.url} alt={deal.title} width={720} height={774} unoptimized />
              </div>
              <div className={styles.col2}>
                <div className={styles.top}>
                  <div className={styles.labels}>
                    <span>{deal.deal_title}</span>
                    <span>
                      {t('discount', {
                        fallback: 'Discount ',
                      })}
                      {deal.deal_discount}%
                    </span>
                  </div>
                  <Title title={deal.title} tag="h4" className="alignLeft" />
                  <Text text={deal.excerpt} className="alignLeft" />
                  <div className={styles.includes}>
                    <h5>
                      {t('models', {
                        fallback: '3D Models:',
                      })}
                    </h5>
                    <ul>
                      {deal.includes.map((include) => (
                        <li key={include.id}>
                          <BlueCheckIcon />
                          <span>{include.model}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <h5>€{deal.deal_old_price}</h5>
                  <h4>€{deal.price}</h4>
                  <AddToCart
                    id={deal.id}
                    title={deal.title}
                    price={deal.price}
                    image={deal.image.url}
                    button_text={deal.button_text}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
