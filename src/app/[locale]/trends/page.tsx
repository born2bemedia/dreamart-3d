import type { Metadata } from 'next';

import { Hero, TrendList } from './components';

import { getTrendsPreview } from '@/featured/trends/api/get-trends-preview';

export const metadata: Metadata = {
  title: 'Moddle 3D Trends | Stay Ahead with the Latest in 3D Design and Animation',
  description:
    'Stay updated on the latest trends in 3D printing, animation, UI/UX design, and video production. Check out our articles and see what’s hot in the creative world.',
  openGraph: {
    title: 'Moddle 3D Trends | Stay Ahead with the Latest in 3D Design and Animation',
    description:
      'Stay updated on the latest trends in 3D printing, animation, UI/UX design, and video production. Check out our articles and see what’s hot in the creative world.',
    images: 'https://moddle3d.com/images/meta.png',
  },
};

export default async function Trends() {
  const trends = await getTrendsPreview();

  return (
    <main>
      <Hero />
      <TrendList trends={trends.reverse()} />
    </main>
  );
}
