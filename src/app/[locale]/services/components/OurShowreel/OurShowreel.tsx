'use client';

import { useTranslations } from 'next-intl';

import { Videos } from '@/shared/ui/components/videos/Videos';
import { Label } from '@/shared/ui/kit';

import st from './OurShowreel.module.scss';

export const OurShowreel = () => {
  const t = useTranslations('ourShowreel');

  return (
    <section className="_container">
      <div className={st.layout}>
        <section className={st.titleLayout}>
          <div className={st.titleHeading}>
            <h2>{t('title', { fallback: 'Our Showreel' })}</h2>
            <Label
              text={t('tag', { fallback: 'Roll the Cameras – Check Out Our Projects Overview!' })}
            />
          </div>
          <p className={st.text}>
            {t('description', {
              fallback:
                'Lights, camera, action! Here’s your VIP pass to an exclusive sneak peek of our video production magic. From commercials that make products pop to animated content that tells stories, this showreel serves up the best of what we do. Watch, be amazed, and see how we turn ideas into visual gold.',
            })}
          </p>
        </section>
        <Videos urls={['/videos/fashion.mp4', '/videos/art.mp4', '/videos/animation.mp4']} />
      </div>
    </section>
  );
};
