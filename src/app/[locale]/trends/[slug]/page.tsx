import Image from 'next/image';
import Link from 'next/link';

import type { Metadata } from 'next';

import { SERVER_URL } from '@/shared/config/env';
import { Btn } from '@/shared/ui/kit/btn';

import st from './page.module.css';

import { getArticle } from '@/featured/articles/api/get-article';
import { getCtaModel } from '@/featured/articles/model/utils';
import { CallToAction } from '@/featured/articles/ui/cta';
import { Layout } from '@/featured/articles/ui/layout';
import { ArticleRenderer } from '@/featured/articles/ui/renderer';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const article = await getArticle({ slug, locale: 'en' });

  return {
    title: article.seo_title,
    description: article.seo_description,
    openGraph: {
      title: article.seo_title,
      description: article.seo_description,
    },
  };
}

export default async function TrendPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const article = await getArticle({ slug, locale });

  const cta = getCtaModel({ slug });

  return (
    <Layout>
      <Image
        className={st.image}
        src={`${SERVER_URL}/${article.image.url}`}
        alt={article.title}
        width={840}
        height={200}
        unoptimized
      />
      <h1 className={st.title}>{article.title}</h1>
      <ArticleRenderer content={article.content.root.children} />
      {cta?.title ? (
        <CallToAction title={cta.title} btn={cta.btn} href={cta.href} />
      ) : (
        <Link href={cta.href} className={st.ctaLink}>
          <Btn>{cta.btn}</Btn>
        </Link>
      )}
    </Layout>
  );
}
