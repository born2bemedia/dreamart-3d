import Image from 'next/image';

import { Plus } from '@/shared/ui/icons/plus';
import { Text, Title } from '@/shared/ui/kit';

import type { Product } from '../../model/types';
import styles from './ProductCard.module.scss';

import { useCartStore } from '@/featured/cart/model/store';

export const ProductCard = ({ title, image, excerpt, price }: Product) => {
  const { addToCart, setTotal, total } = useCartStore();

  const handleAddToCart = () => {
    addToCart({
      id: title,
      name: title,
      price,
      image: image.url,
      quantity: 1,
      subtotal: price,
      
    });
    setTotal(total + price);

  };

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
        <button onClick={handleAddToCart}>
          <Plus />
        </button>
      </div>
    </div>
  );
};
