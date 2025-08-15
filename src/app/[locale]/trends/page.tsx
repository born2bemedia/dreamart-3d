import { Hero, TrendList } from './components';

import { getTrendsPreview } from '@/featured/trends/api/get-trends-preview';

export default async function Trends() {
  const trends = await getTrendsPreview();

  console.log('trends', trends);

  return (
    <main>
      <Hero />
      <TrendList trends={trends.reverse()} />
    </main>
  );
}
