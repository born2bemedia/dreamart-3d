import { getTranslations } from 'next-intl/server';

import { PricingPackage, ReadyToStart, WorkHero, WorkPreview } from './components';

export default async function Work() {
  const t = await getTranslations('work');

  const workPreviews = [
    {
      title: t('title1', {
        fallback: '3D Modelling for Printing',
      }),
      label: t('label1', {
        fallback: 'Turn ideas into prints that speak for themselves.',
      }),
      description: t('text1', {
        fallback:
          'Our 3D models aren’t just designs; they are high-quality creations ready for printing. Whether it’s for prototyping, art, or retail, we specialize in making your vision tangible.',
      }),
      type: 'images' as const,
      previews: [
        {
          src: '/images/work/modeling/image1.png',
        },
        {
          src: '/images/work/modeling/image2.png',
        },
        {
          src: '/images/work/modeling/image3.png',
        },
        {
          src: '/images/work/modeling/image4.png',
        },
      ],
    },
    {
      title: t('title2', {
        fallback: 'Animation Creation',
      }),
      label: t('label2', {
        fallback: 'Bring your story to life, frame by frame.',
      }),
      description: t('text2', {
        fallback:
          'We craft animations that grab attention and tell compelling stories. From promotional content to full cinematic experiences, our animations engage and captivate audiences.',
      }),
      type: 'videos' as const,
      previews: [
        {
          src: '/images/work/animations/video1.mp4',
        },
        {
          src: '/images/work/animations/video2.mp4',
        },
        {
          src: '/images/work/animations/video3.mp4',
        },
        {
          src: '/images/work/animations/video4.mp4',
        },
      ],
    },
    {
      title: t('title3', {
        fallback: 'UI/UX Design',
      }),
      label: t('label3', {
        fallback: 'Designs that flow, users that stay.',
      }),
      description: t('text3', {
        fallback:
          'We create seamless digital experiences that users love. Our UI/UX designs focus on both aesthetics and functionality to ensure a smooth, intuitive journey.',
      }),
      type: 'images' as const,
      previews: [
        {
          src: '/images/work/ux/image1.png',
        },
        {
          src: '/images/work/ux/image2.png',
        },
        {
          src: '/images/work/ux/image3.png',
        },
        {
          src: '/images/work/ux/image4.png',
        },
      ],
    },
    {
      title: t('title4', {
        fallback: 'Video Production',
      }),
      label: t('label4', {
        fallback: 'Capture your vision, leave a lasting impression.',
      }),
      description: t('text4', {
        fallback:
          'We produce videos that make a memorable impact. Whether it’s an explainer, a commercial, or a cinematic project, our videos tell your story in a way that sticks.',
      }),
      type: 'videos' as const,
      previews: [
        {
          src: '/images/work/videos/video1.mp4',
        },
        {
          src: '/images/work/videos/video2.mp4',
        },
        {
          src: '/images/work/videos/video3.mp4',
        },
        {
          src: '/images/work/videos/video4.mp4',
        },
      ],
    },
  ];

  return (
    <>
      <WorkHero />
      {workPreviews.map((preview) => (
        <WorkPreview key={preview.title} {...preview} />
      ))}
      <PricingPackage />
      <ReadyToStart />
    </>
  );
}
