'use client';

import { useTranslations } from 'next-intl';

import { Tag } from '@/shared/ui/kit/tag';

import { ReadyTo } from '../ReadyTo/ReadyTo';
import { SectionInfo } from '../SectionInfo/SectionInfo';
import st from './Services.module.scss';

const get3DModelingServices = (t: ReturnType<typeof useTranslations>) => [
  t('services.0', { fallback: 'Product Prototypes' }),
  t('services.1', { fallback: '3D Printing Models' }),
  t('services.2', { fallback: 'Conceptual Designs' }),
  t('services.3', { fallback: 'Custom Figurines' }),
  t('services.4', { fallback: 'Miniatures for Collectibles' }),
  t('services.5', { fallback: 'Jewelry Designs' }),
  t('services.6', { fallback: 'Architectural Models' }),
  t('services.7', { fallback: 'Game Assets & Characters' }),
  t('services.8', { fallback: '3D Icons & Logos' }),
  t('services.9', { fallback: 'Home Decor Models' }),
  t('services.10', { fallback: 'Product Mockups' }),
  t('services.11', { fallback: 'Low Poly & High Poly Models' }),
  t('services.12', { fallback: 'Custom 3D Sculptures' }),
  t('services.13', { fallback: '3D Furniture Models' }),
  t('services.14', { fallback: 'Concept Art Models' }),
  t('services.15', { fallback: 'Architectural Renderings' }),
  t('services.16', { fallback: '3D Illustrations' }),
  t('services.17', { fallback: 'Custom Collectibles' }),
  t('services.18', { fallback: '3D Textures and Mapping' }),
  t('services.19', { fallback: 'Interactive 3D Models' }),
];

export const ThreeDModelling = () => {
  const t = useTranslations('services.3DModelling');

  return (
    <div id="3d-modelling" className={st.serviceLayout}>
      <section className={st.threeDModeling}>
        <div className={st.serviceHero__header}>
          <h2 className={st.serviceHero__title}>{t('title', { fallback: '3D Modelling' })}</h2>
          <Tag className={st.serviceHero__tag} variant="solid">
            {t('tag', { fallback: 'Your Ideas, Now in 3D' })}
          </Tag>
        </div>
        <p className={st.serviceHero__desc}>
          {t('description', {
            fallback:
              'Our 3D models aren’t just cool — they’re print-ready, detailed, and ready to be awesome. From prototypes to figurines, we bring your wildest ideas to life with precision and style. Whether you need a super sleek vase or a custom action figure, we’ve got the modelling skills to make it happen.',
          })}
        </p>
        <div className={st.filter} />
      </section>
      <section className={st.weOffer}>
        <h2 className={st.weOffer__title}>
          {t('servicesWeOffer', { fallback: 'Services We Offer' })}
        </h2>
        <div className={st.weOffer__list}>
          {get3DModelingServices(t).map((item) => (
            <span key={item} className={st.weOffer__tag}>
              {item}
            </span>
          ))}
        </div>
      </section>
      <SectionInfo
        imgUrl="/images/services/3d-modelling.png"
        infoMeta={{
          title: t('exploreTitle', { fallback: 'Explore Our 3D Models' }),
          tag: t('exploreTag', { fallback: 'Ready to Print, Ready to Wow!' }),
          text: t('exploreDescription', {
            fallback:
              'Dive into our collection of 3D models, where creativity meets precision. Whether you’re looking for stunning decor, custom figurines, or prototype designs, our models are perfect for your next project. Browse through a variety of categories and find the perfect design, ready to print and make your vision come to life.',
          }),
        }}
        buttonMeta={{
          label: t('exploreButton', { fallback: 'Shop Our 3D Models' }),
          href: '/shop',
        }}
      />
      <SectionInfo
        imgUrl="/images/services/hot-deal.png"
        infoMeta={{
          title: t('hotDealsTitle', { fallback: 'Hot Deals on Unique Creations' }),
          tag: t('hotDealsTag', { fallback: 'Hurry Before They Vanish!' }),
          text: t('hotDealsDescription', {
            fallback:
              'Time’s ticking! Grab our limited-time deals on 3D models before they’re gone. From quirky figurines to sleek prototypes, these models are ready to bring your ideas to life — and they’re at prices you won’t believe. Don’t wait — make them yours while you still can!',
          }),
        }}
        buttonMeta={{
          label: t('hotDealsButton', { fallback: 'Claim Your Deal Now!' }),
          href: '/deals',
        }}
      />
      <ReadyTo
        title={t('readyToTitle', { fallback: 'Got a wild 3D idea?' })}
        text={t('readyToText', {
          fallback: 'Let’s create a custom masterpiece just for you!',
        })}
        metaButton={{
          label: t('readyToButton', { fallback: 'Get a Quote' }),
          href: '/quote-request-form',
        }}
      />
    </div>
  );
};
