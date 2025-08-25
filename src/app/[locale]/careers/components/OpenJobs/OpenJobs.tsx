'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Btn } from '@/shared/ui/kit/btn';
import { List } from '@/shared/ui/kit/list';

import st from './OpenJobs.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';

const getJobs = (t: ReturnType<typeof useTranslations>) => [
  {
    imgUrl: '/images/careers/modelling.png',
    title: t('jobs.0.title', { fallback: '3D Modelling Wizard' }),
    buttonText: t('jobs.0.buttonText', { fallback: 'No Wait – Apply' }),
    responsibilities: [
      t('jobs.0.responsibilities.0', {
        fallback:
          'Transform ideas into tangible 3D creations (from product prototypes to custom miniatures).',
      }),
      t('jobs.0.responsibilities.1', {
        fallback:
          'Work with the team to create print-ready designs for a variety of industries (no pressure, just cool stuff).',
      }),
      t('jobs.0.responsibilities.2', {
        fallback:
          'Push the boundaries of creativity while making sure each model is precision-perfect.',
      }),
      t('jobs.0.responsibilities.3', {
        fallback:
          'Play around with cutting-edge 3D software and stay on top of the latest trends in the industry.',
      }),
    ],
    requirements: [
      t('jobs.0.requirements.0', {
        fallback: 'Solid experience with 3D modelling software (Blender, Autodesk, etc.).',
      }),
      t('jobs.0.requirements.1', {
        fallback: 'A passion for details — because precision is your middle name.',
      }),
      t('jobs.0.requirements.2', {
        fallback: 'Ability to take a concept and turn it into a tangible masterpiece.',
      }),
      t('jobs.0.requirements.3', {
        fallback: 'Good vibes only — bring your creativity and your fun side!',
      }),
    ],
  },
  {
    imgUrl: '/images/careers/animation.png',
    title: t('jobs.1.title', { fallback: 'Animation Ninja' }),
    buttonText: t('jobs.1.buttonText', { fallback: 'Get in the Game!' }),
    responsibilities: [
      t('jobs.1.responsibilities.0', {
        fallback: 'Create eye-popping animations that make people say “Wow!”',
      }),
      t('jobs.1.responsibilities.1', {
        fallback:
          'Work closely with the design team to bring characters, stories, and products to life through animation.',
      }),
      t('jobs.1.responsibilities.2', {
        fallback:
          'Develop motion graphics and cinematic animations for various projects (no boring stuff allowed!).',
      }),
      t('jobs.1.responsibilities.3', {
        fallback: 'Make sure the animation is not just moving, but moving with purpose.',
      }),
    ],
    requirements: [
      t('jobs.1.requirements.0', {
        fallback: 'A strong background in 2D/3D animation and motion graphics.',
      }),
      t('jobs.1.requirements.1', {
        fallback: 'Experience with animation software (Maya, After Effects, etc.).',
      }),
      t('jobs.1.requirements.2', {
        fallback: 'A passionate storyteller who can turn an idea into an engaging experience.',
      }),
      t('jobs.1.requirements.3', {
        fallback: 'Detail-oriented with a pinch of creativity and a dash of humor!',
      }),
    ],
  },
  {
    imgUrl: '/images/careers/design.png',
    title: t('jobs.2.title', { fallback: 'UI/UX Design Guru' }),
    buttonText: t('jobs.2.buttonText', { fallback: 'Don’t Wait – Join Us!' }),
    responsibilities: [
      t('jobs.2.responsibilities.0', {
        fallback:
          'Design smooth, seamless user interfaces that users can’t stop clicking (literally).',
      }),
      t('jobs.2.responsibilities.1', {
        fallback: 'Collaborate with developers to ensure designs are beautiful AND functional.',
      }),
      t('jobs.2.responsibilities.2', {
        fallback:
          'Use your design superpowers to craft user-centric designs that improve every digital experience.',
      }),
      t('jobs.2.responsibilities.3', {
        fallback:
          'Keep up with the latest design trends and innovative techniques to stay ahead of the game.',
      }),
    ],
    requirements: [
      t('jobs.2.requirements.0', {
        fallback: 'A portfolio that showcases your user-centered designs.',
      }),
      t('jobs.2.requirements.1', {
        fallback: 'Proficiency in UI/UX tools (Sketch, Figma, Adobe XD, etc.).',
      }),
      t('jobs.2.requirements.2', {
        fallback: 'An eye for clean, sleek, and modern designs.',
      }),
      t('jobs.2.requirements.3', {
        fallback: 'A problem-solver who thrives on creating seamless user experiences.',
      }),
    ],
  },
  {
    imgUrl: '/images/careers/production.png',
    title: t('jobs.3.title', { fallback: 'Video Production Hero' }),
    buttonText: t('jobs.3.buttonText', { fallback: 'Get Onboard Today!' }),
    responsibilities: [
      t('jobs.3.responsibilities.0', {
        fallback: 'Direct, shoot, and edit high-impact videos that will blow your audience away.',
      }),
      t('jobs.3.responsibilities.1', {
        fallback:
          'Collaborate with the team to create everything from product demos to cinematic brand stories.',
      }),
      t('jobs.3.responsibilities.2', {
        fallback: 'Ensure each video is emotionally captivating, not just “nice to watch.”',
      }),
      t('jobs.3.responsibilities.3', {
        fallback: 'Work your magic with special effects, animations, and some jaw-dropping edits.',
      }),
    ],
    requirements: [
      t('jobs.3.requirements.0', {
        fallback:
          'Proven experience with video production (camera work, editing, lighting, sound, etc.).',
      }),
      t('jobs.3.requirements.1', {
        fallback:
          'Experience in motion graphics and video editing software (Premiere Pro, After Effects, Final Cut Pro).',
      }),
      t('jobs.3.requirements.2', {
        fallback: 'A storyteller who loves making videos that stick in people’s minds.',
      }),
      t('jobs.3.requirements.3', {
        fallback: 'Must love collaborating and having fun along the way!',
      }),
    ],
  },
];

export const OpenJobs = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const t = useTranslations('careers.openJobs');

  return (
    <div className="_container">
      <section className={st.layout}>
        <h2 className={st.title}>{t('title', { fallback: 'Current Openings' })}</h2>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          loop
          autoHeight
          className={st.swiper}
          onBeforeInit={(swiper) => {
            // @ts-expect-error without types
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error without types
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1220: { slidesPerView: 3 },
          }}
        >
          {getJobs(t).map((job) => (
            <SwiperSlide key={job.title} className={st.slide}>
              <JobCard {...job} />
            </SwiperSlide>
          ))}

          <div className={st.navWrapper}>
            <button ref={prevRef} className={st.navBtn}>
              ‹
            </button>
            <button ref={nextRef} className={st.navBtn}>
              ›
            </button>
          </div>
        </Swiper>
      </section>
    </div>
  );
};

const JobCard = ({
  imgUrl,
  title,
  responsibilities,
  requirements,
  buttonText,
}: {
  imgUrl: string;
  title: string;
  responsibilities: string[];
  requirements: string[];
  buttonText: string;
}) => {
  const t = useTranslations('careers.openJobs');

  return (
    <article className={st.card}>
      <Image
        className={st.card__img}
        src={imgUrl}
        alt={title}
        width={300}
        height={300}
        unoptimized
      />
      <h3 className={st.card__title}>{title}</h3>
      <section className={st.subtitleSection}>
        <p className={st.card__subtitle}>
          {t('responsibilities', { fallback: 'Responsibilities:' })}
        </p>
        <List values={responsibilities} />
      </section>
      <section className={st.subtitleSection}>
        <p className={st.card__subtitle}>{t('requirements', { fallback: 'Requirements:' })}</p>
        <List values={requirements} />
      </section>
      <Link href="#form" className={st.btn}>
        <Btn fullWidth>{buttonText}</Btn>
      </Link>
    </article>
  );
};
