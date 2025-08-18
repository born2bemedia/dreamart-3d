import { PriceList, PricesHero, PricingCategory } from './components';

import { getPricingCategories } from '@/featured/prices/api/get-prices';

export default async function PricesPage() {
  const categories = await getPricingCategories();

  return (
    <>
      <PricesHero />
      {categories.map((category) => (
        <PricingCategory key={category.id} category={category} />
      ))}
      <PriceList />
    </>
  );
}
