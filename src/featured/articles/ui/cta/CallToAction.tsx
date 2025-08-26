'use client';

import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { Btn } from '@/shared/ui/kit/btn';

import st from './CallToAction.module.scss';

export const CallToAction = ({ slug }: { slug: string }) => {
  const t = useTranslations('trendsCta');

  const ctaModels: Record<string, { title?: string; btn: string; href: string }> = {
    'the-rise-of-3d-printing-whats-next': {
      title: t('theRiseOf3dPrintingWhatsNext.title', {
        fallback: 'Ready to bring your 3D projects to life?',
      }),
      btn: t('theRiseOf3dPrintingWhatsNext.btn', {
        fallback: 'Explore Our 3D Models in the Shop',
      }),
      href: '/shop',
    },
    'uiux-design-trends-making-digital-spaces-more-human': {
      title: t('uiuxDesignTrendsMakingDigitalSpacesMoreHuman.title', {
        fallback: "Are you ready to create a design experience that's as unique as your users?",
      }),
      btn: t('uiuxDesignTrendsMakingDigitalSpacesMoreHuman.btn', {
        fallback: 'Explore Our UI/UX Design Solutions',
      }),
      href: '/services',
    },
    'animations-in-2025-whats-hot-and-whats-not': {
      title: t('animationsIn2025WhatsHotAndWhatsNot.title', {
        fallback: 'Ready to bring your animation ideas to life?',
      }),
      btn: t('animationsIn2025WhatsHotAndWhatsNot.btn', {
        fallback: 'Ready to bring your animation ideas to life?',
      }),
      href: '/prices',
    },
    'video-content-in-2025-interactive-immersive-and-everywhere': {
      title: t('videoContentIn2025InteractiveImmersiveAndEverywhere.title', {
        fallback: 'Ready to create video content that stands out in 2025?',
      }),
      btn: t('videoContentIn2025InteractiveImmersiveAndEverywhere.btn', {
        fallback: 'Explore Our Video Production Packages',
      }),
      href: '/services',
    },
  };

  const { title, btn, href } = ctaModels[slug];

  return (
    <section className={st.layout}>
      <div className={st.content}>
        <h3>{title}</h3>
        <Link href={href}>
          <Btn fullWidth>{btn}</Btn>
        </Link>
      </div>
      <video src="/videos/trends/cta.mp4" autoPlay muted loop />
    </section>
  );
};
