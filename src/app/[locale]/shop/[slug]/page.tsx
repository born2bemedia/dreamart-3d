import { SERVER_URL } from '@/shared/config/env';

import { ProductsList, ShopHero } from '../components';

import { getCategoryBySlug, getProducts } from '@/featured/products/api/products';

export default async function ShopPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  console.log('slug', slug);
  const category = await getCategoryBySlug(slug);
  console.log('category', category);
  const products = await getProducts(category?.id || '');
  console.log('products', products);

  return (
    <>
      <ShopHero
        title={category?.title || ''}
        description={category?.description || ''}
        label={category?.subtitle || ''}
        backgroundImage={`${SERVER_URL}${category?.image?.url}` || ''}
        back={true}
      />
      <ProductsList products={products} />
    </>
  );
}
