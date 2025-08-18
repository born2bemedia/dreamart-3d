import { getTranslations } from 'next-intl/server';

import { getPolicy } from '@/featured/policies/api/get-policy';
import { ContactInfo } from '@/featured/policies/ui/contact-info';
import { Hero } from '@/featured/policies/ui/hero/Hero';
import { Layout } from '@/featured/policies/ui/layout';
import { PolicyRenderer } from '@/featured/policies/ui/renderer/PolicyRenderer';

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const privacyPolicy = await getPolicy({ id: '2', locale });

  const t = await getTranslations('privacyPolicy');

  return (
    <main>
      <Hero title={privacyPolicy.title} lastUpdate="2025-08-18" />
      <Layout>
        <PolicyRenderer content={privacyPolicy.content.root.children} />
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
