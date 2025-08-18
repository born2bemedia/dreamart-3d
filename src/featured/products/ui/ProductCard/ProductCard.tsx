import Image from 'next/image';

import { Plus } from '@/shared/ui/icons/plus';
import { Text, Title } from '@/shared/ui/kit';

import type { Product } from '../../model/types';
import styles from './ProductCard.module.scss';

export const ProductCard = ({ title, image, excerpt, price }: Product) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.top}>
        <Image src={image.url} alt={title} width={230} height={230} quality={100} />
        <div>
          <Title title={title} tag="h3" />
          <Text text={excerpt} />
        </div>
      </div>
      <div className={styles.bottom}>
        <h4>€{price}</h4>
        <button>
          <Plus />
        </button>
      </div>
    </div>
  );
};
