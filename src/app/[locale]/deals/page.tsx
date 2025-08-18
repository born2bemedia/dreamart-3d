import { DealsHero } from './components';

import { Deals } from '@/featured/deals/ui/Deals';

export default async function DealsPage() {
  return (
    <>
      <DealsHero />
      <Deals />
    </>
  );
}
