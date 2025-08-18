import styles from './ProductsList.module.scss';

import type { Product } from '@/featured/products/model/types';
import { ProductCard } from '@/featured/products/ui/ProductCard/ProductCard';

export const ProductsList = ({ products }: { products: Product[] }) => {
  return (
    <section className={styles.productsList}>
      <div className="_container">
        <div className={styles.productsList__products}>
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
