'use client';

import { useTranslations } from 'next-intl';

import { Tag } from '@/shared/ui/kit/tag';

import { ReadyTo } from '../ReadyTo/ReadyTo';
import { SectionInfo } from '../SectionInfo/SectionInfo';
import st from './Services.module.scss';

const get3DModelingServices = (t: ReturnType<typeof useTranslations>) => [
  t('services.0', { fallback: '2D Animation' }),
  t('services.1', { fallback: '3D Animation' }),
  t('services.2', { fallback: 'Explainer Videos' }),
  t('services.3', { fallback: 'Commercial Animations' }),
  t('services.4', { fallback: 'Product Demo Animations' }),
  t('services.5', { fallback: 'Motion Graphics' }),
  t('services.6', { fallback: 'Character Animations' }),
  t('services.7', { fallback: 'Animated Logos' }),
  t('services.8', { fallback: 'Cinematic Animations' }),
  t('services.9', { fallback: 'Social Media Videos' }),
  t('services.10', { fallback: 'Infographic Animations' }),
  t('services.11', { fallback: 'Music Videos' }),
  t('services.12', { fallback: 'Animated Titles' }),
  t('services.13', { fallback: 'Augmented Reality Animations' }),
  t('services.14', { fallback: 'Virtual Reality Animations' }),
  t('services.15', { fallback: 'Gif Animations' }),
  t('services.16', { fallback: 'Stop Motion Animations' }),
  t('services.17', { fallback: 'Storyboarding' }),
  t('services.18', { fallback: 'Video Game Animations' }),
  t('services.19', { fallback: 'Interactive Animations' }),
];

export const AnimationCreation = () => {
  const t = useTranslations('services.animationCreation');

  return (
    <div id="animation-creation" className={st.serviceLayout}>
      <section className={st.animationCreation}>
        <div className={st.serviceHero__header}>
          <h2 className={st.serviceHero__title}>
            {t('title', { fallback: 'Animation Creation' })}
          </h2>
          <Tag className={st.serviceHero__tag} variant="solid">
            {t('tag', { fallback: 'Let’s Make Your Ideas Spark' })}
          </Tag>
        </div>
        <p className={st.serviceHero__desc}>
          {t('description', {
            fallback:
              'Animation isn’t just about moving pictures — it’s about making magic happen on screen. From explainer videos that make complex ideas simple to epic animated commercials that will make your audience go, “Wow!”, we’ve got the skills to make your story come to life. Grab some popcorn, because your ideas are about to hit the big screen!',
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
          title: 'Why Choose Dreamart 3D Solutions?',
          tag: 'Animations That Knock Your Socks Off!',
          text: (
            <>
              This story is not just moving pictures — our animations capture attention and keep it.
              From explainer videos to cinematic masterpieces, we bring your concepts to life with
              flair, precision, and a touch of fun.
              <br />
              <br />
              Why settle for ordinary when you can have animations that grab attention and make your
              audience go “wow”? We focus on your vision, combining creativity with cutting-edge
              techniques to deliver high-quality animations that speak for themselves.
            </>
          ),
        }}
        buttonMeta={{
          label: 'See Our Packages & Prices',
          href: '/prices',
        }}
      />
      <ReadyTo
        title="Got a quirky vision?"
        text="Let’s animate it into something special!"
        metaButton={{
          label: 'Start Your Project',
          href: '/quote-request-form',
        }}
      />
    </div>
  );
};
