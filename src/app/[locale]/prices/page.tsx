import { PriceList, PricesHero, PricingCategory } from './components';

import { getPricingCategories } from '@/featured/prices/api/get-prices';
import { RequestPackagePopup } from '@/featured/request-package-popup/ui/RequestPackagePopup';
import { ThanksPopup } from '@/featured/thanks-popup/ui/ThanksPopup';

export default async function PricesPage() {
  const categories = await getPricingCategories();

  return (
    <>
      <PricesHero />
      {categories.map((category) => (
        <PricingCategory key={category.id} category={category} />
      ))}
      <PriceList />
      <RequestPackagePopup />
      <ThanksPopup />
    </>
  );
}
