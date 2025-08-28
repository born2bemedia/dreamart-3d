import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { ShopHero } from './components';

import { getProductCategories } from '@/featured/products/api/products';
import { FeaturedCategories } from '@/featured/products/ui/FeaturedCategory/FeaturedCategory';

export const metadata: Metadata = {
  title: 'Dreamart 3D Shop | Unique 3D Models for Printing, Animation, and More',
  description:
    'Browse our collection of high-quality 3D models for printing, animation, and digital design. Shop now for exclusive creations to bring your ideas to life.',
  openGraph: {
    title: 'Dreamart 3D Shop | Unique 3D Models for Printing, Animation, and More',
    description:
      'Browse our collection of high-quality 3D models for printing, animation, and digital design. Shop now for exclusive creations to bring your ideas to life.',
    images: 'https://dreamart3d.com/images/meta.png',
  },
};

export default async function ShopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('shop');
  const categories = await getProductCategories(locale);

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
