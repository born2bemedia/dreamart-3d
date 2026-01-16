import type { Metadata } from 'next';

import { DealsHero } from './components';

import { Deals } from '@/featured/deals/ui/Deals/Deals';

export const metadata: Metadata = {
  title: 'Moddle 3D Deals | Hot Discounts on 3D Models, Animations, and More',
  description:
    'Check out our exclusive limited-time deals on 3D models, animations, and design services. Don’t miss out on these amazing offers!',
  openGraph: {
    title: 'Moddle 3D Deals | Hot Discounts on 3D Models, Animations, and More',
    description:
      'Check out our exclusive limited-time deals on 3D models, animations, and design services. Don’t miss out on these amazing offers!',
    images: 'https://moddle3d.com/images/meta.png',
  },
};

export default async function DealsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <DealsHero />
      <Deals locale={locale} />
    </>
  );
}
