'use client';

import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { DeleteIcon } from '@/shared/ui/icons/delete';
import { Title } from '@/shared/ui/kit';

import styles from './WishlistCard.module.scss';

import type { Product } from '@/featured/products/model/types';
import { removeFromWishlist } from '@/featured/wishlist/api/remove-from-wishlist';
import { useWishlistStore } from '@/featured/wishlist/model/wishlist.store';

export const WishlistCard = ({ id, title, image }: Product) => {
  const { wishlist, setWishlist } = useWishlistStore();

  const t = useTranslations('wishlist');

  const deleteHandle = () => {
    removeFromWishlist(id);
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.productCard}>
      <button className={styles.bucket} onClick={deleteHandle}>
        <DeleteIcon />
      </button>
      <div className={styles.top}>
        <Image src={image.url} alt={title} width={230} height={230} quality={100} />
        <div>
          <Title title={title} tag="h3" />
          <p className={styles.price}>
            {t('productId', { fallback: 'Product ID' })} #{id}
          </p>
        </div>
      </div>
    </div>
  );
};
