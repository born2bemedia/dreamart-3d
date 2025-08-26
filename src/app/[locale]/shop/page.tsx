import { getTranslations } from 'next-intl/server';

import { ShopHero } from './components';

import { getProductCategories } from '@/featured/products/api/products';
import { FeaturedCategories } from '@/featured/products/ui/FeaturedCategory/FeaturedCategory';

export default async function ShopPage() {
  const t = await getTranslations('shop');
  const categories = await getProductCategories();

  return (
    <>
      <ShopHero
        title={
          <>
            {t('title.0', {
              fallback: '3D Models That Make Your Ideas',
            })}
            <br />
            {t('title.1', { fallback: 'Walk, Talk, and Print' })}
          </>
        }
        description={t('description', {
          fallback:
            'Welcome to Dreamart 3D’s playground, where your wildest ideas go from “just a thought” to “look at that!” in a few clicks. From quirky home decor to iconic movie characters, our 3D models are designed to bring your creative visions to life without the complexity. Browse through our collection, pick your favorite, and let’s turn those brilliant ideas into tangible prints.',
        })}
        label={t('label', {
          fallback: 'Who knew 3D printing could be this fun?',
        })}
        backgroundImage={'/images/shop/hero.webp'}
      />
      {categories.map((category) => (
        <FeaturedCategories key={category.id} category={category} />
      ))}
    </>
  );
}
