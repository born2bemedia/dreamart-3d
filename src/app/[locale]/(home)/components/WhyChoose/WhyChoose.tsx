'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { fadeInUp } from '@/shared/lib/helpers/animations';
import { ChevronRight } from '@/shared/ui/icons/chevron-right/chevron-right';
import { Button, Label, Text, Title } from '@/shared/ui/kit';

import styles from './WhyChoose.module.scss';

export const WhyChoose = () => {
  const t = useTranslations('whyChoose');
  const [activeTab, setActiveTab] = useState(0);
  const [heights, setHeights] = useState<{ [key: number]: number }>({});
  const [activeImage, setActiveImage] = useState(0);

  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setActiveImage(index);
  };

  useEffect(() => {
    const newHeights: { [key: number]: number } = {};
    tabRefs.current.forEach((ref, index) => {
      if (ref) {
        newHeights[index] = ref.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, []);

  const tabs = [
    {
      title: t('title1', {
        fallback: 'Innovation',
      }),
      description: t('description1', {
        fallback: 'We’re always ahead of the curve, bringing the latest techniques to our work.',
      }),
    },
    {
      title: t('title2', {
        fallback: 'Customization',
      }),
      description: t('description2', {
        fallback: 'Your vision, our designs. Everything we do is tailored to your needs.',
      }),
    },
    {
      title: t('title3', {
        fallback: 'Quality',
      }),
      description: t('description3', {
        fallback: 'Your vision, our designs. Everything we do is tailored to your needs.',
      }),
    },
    {
      title: t('title4', {
        fallback: 'Creativity',
      }),
      description: t('description4', {
        fallback: 'Your vision, our designs. Everything we do is tailored to your needs.',
      }),
    },
  ];

  const images = [
    {
      src: '/images/home/whyChoose1.png',
      alt: 'whyChoose1',
    },
    {
      src: '/images/home/whyChoose2.png',
      alt: 'whyChoose2',
    },
    {
      src: '/images/home/whyChoose3.png',
      alt: 'whyChoose3',
    },
    {
      src: '/images/home/whyChoose4.png',
      alt: 'whyChoose4',
    },
  ];

  return (
    <section className={styles.whyChoose}>
      <div className={'_container'}>
        <div className={styles.whyChoose__content}>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.left}
          >
            <div className={styles.top}>
              <Title
                title={
                  <>
                    {t('title.0', {
                      fallback: 'Why Choose',
                    })}
                    <br />
                    {t('title.1', {
                      fallback: 'Dreamart 3D?',
                    })}
                  </>
                }
                className={'alignLeft'}
              />
              <Label
                text={t('label', {
                  fallback: 'We’re Not Just a 3D Studio — We’re Your Creative Powerhouse',
                })}
              />
              <Text
                text={t('description', {
                  fallback:
                    'Our crew combines creativity, technology, and a touch of brilliance. We’re the team you call when you need more than just a 3D model or a pretty animation. You need a partner who can deliver stunning, high-quality content with a sprinkle of fun and creativity.',
                })}
                className={'alignLeft'}
              />
            </div>

            <div className={styles.accordion}>
              {tabs.map((tab, index) => (
                <div
                  key={index}
                  className={`${styles.accordion__item} ${
                    activeTab === index ? styles.active : ''
                  }`}
                  onClick={() => handleTabClick(index)}
                >
                  <div className={styles.accordion__item__title}>
                    <span>{tab.title}</span>
                  </div>
                  <div
                    className={`${styles.accordion__item__description} ${
                      activeTab === index ? styles.active : ''
                    }`}
                    style={{
                      height: activeTab === index ? heights[index] || 0 : 0,
                    }}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                  >
                    <Text text={tab.description} className={'alignLeft'} />
                  </div>
                  <ChevronRight />
                </div>
              ))}
            </div>

            <Button
              text={t('button', {
                fallback: 'See How We Inspire',
              })}
              type="link"
              href="/impact"
            />
          </motion.div>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.right}
          >
            <Image
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              width={523}
              height={844}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
