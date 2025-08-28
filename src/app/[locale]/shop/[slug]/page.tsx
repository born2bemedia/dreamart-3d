import type { Metadata } from 'next';

import { SERVER_URL } from '@/shared/config/env';

import { ProductsList, ShopHero } from '../components';

import { getCategoryBySlug, getProducts } from '@/featured/products/api/products';

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
    locale: string;
  }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const data = await getCategoryBySlug(slug, locale);

  return {
    title:
      data?.seo_title ?? 'Dreamart 3D Shop | Unique 3D Models for Printing, Animation, and More',
    description:
      data?.seo_description ??
      'Welcome to Dreamart 3D, where we turn your creative ideas into reality! Explore our 3D models, animations, and UI/UX design solutions designed to make your projects stand out.',
    openGraph: {
      title:
        data?.seo_title ?? 'Dreamart 3D Shop | Unique 3D Models for Printing, Animation, and More',
      description:
        data?.seo_description ??
        'Welcome to Dreamart 3D, where we turn your creative ideas into reality! Explore our 3D models, animations, and UI/UX design solutions designed to make your projects stand out.',
      images: 'https://dreamart3d.com/images/meta.png',
    },
    twitter: {
      card: 'summary_large_image',
      title:
        data?.seo_title ?? 'Dreamart 3D Shop | Unique 3D Models for Printing, Animation, and More',
      description:
        data?.seo_description ??
        'Welcome to Dreamart 3D, where we turn your creative ideas into reality! Explore our 3D models, animations, and UI/UX design solutions designed to make your projects stand out.',
      images: 'https://dreamart3d.com/images/meta.png',
    },
  };
}

export default async function ShopPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const awaitedParams = await params;
  const { slug, locale } = awaitedParams;
  const category = await getCategoryBySlug(slug, locale);
  const products = await getProducts(category?.id || '', locale);

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
