import { getTranslations } from 'next-intl/server';

import { getPolicy } from '@/featured/policies/api/get-policy';
import { ContactInfo } from '@/featured/policies/ui/contact-info';
import { Hero } from '@/featured/policies/ui/hero/Hero';
import { Layout } from '@/featured/policies/ui/layout';
import { PolicyRenderer } from '@/featured/policies/ui/renderer';

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const cookiePolicy = await getPolicy({ id: '3', locale });

  const t = await getTranslations('cookiePolicy');

  return (
    <main>
      <Hero title={cookiePolicy.title} lastUpdate="2025-08-18" />
      <Layout>
        <PolicyRenderer content={cookiePolicy.content.root.children} />
        <ContactInfo
          title={t('contactTitle', { fallback: 'Contact Information' })}
          description={t('contactDescription', {
            fallback: 'For any questions, contact us at:',
          })}
        />
      </Layout>
    </main>
  );
}
