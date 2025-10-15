'use client';

import { useTranslations } from 'next-intl';

import { Videos } from '@/shared/ui/components/videos/Videos';
import { Label } from '@/shared/ui/kit';

import st from './ProjectsOverview.module.scss';

export const ProjectsOverview = () => {
  const t = useTranslations('projectsOverview');

  return (
    <section className="_container">
      <div className={st.layout}>
        <section className={st.titleLayout}>
          <div className={st.titleHeading}>
            <h2>{t('title', { fallback: 'Projects Overview' })}</h2>
            <Label text={t('tag', { fallback: 'What We’ve Been Up To – Prepare to Be Amazed!' })} />
          </div>
          <p className={st.text}>
            {t('description', {
              fallback:
                'Step right up and see what we’ve been creating! In this section, we’re showcasing our latest masterpieces, from mind-blowing 3D prototypes to animations that’ll make you want to hit replay. Spoiler: It’s all awesome.',
            })}
          </p>
        </section>
        <Videos
          urls={['/videos/gaming.mp4', '/videos/dreamart-tech.mp4', '/videos/int-design.mp4']}
        />
      </div>
    </section>
  );
};
