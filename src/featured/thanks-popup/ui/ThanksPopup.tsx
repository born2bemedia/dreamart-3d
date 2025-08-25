'use client';

import { useEffect } from 'react';
import Image from 'next/image';

import { useLenis } from 'lenis/react';
import { useTranslations } from 'next-intl';

import { Button, Text, Title } from '@/shared/ui/kit';

import { useThanksPopupStore } from '../store/store';
import styles from './ThanksPopup.module.scss';

export const ThanksPopup = () => {
  const { isOpen, setIsOpen } = useThanksPopupStore();
  const t = useTranslations('thanksPopup');
  const lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = 'auto';
      lenis?.start();
    }
  }, [isOpen, lenis]);

  return (
    <div className={`${styles.thanksPopupWrapper} ${isOpen ? styles.open : ''}`}>
      <div className={styles.overlay} onClick={() => setIsOpen(false)} />
      <div className={styles.thanksPopup}>
        <Image src="/images/thanks.svg" alt="thanks-popup" width={64} height={64} />
        <Title
          tag="h3"
          title={
            <>
              {t('title.0', { fallback: 'Your Creative' })}
              <br />
              {t('title.1', { fallback: 'Journey Begins Here!' })}
            </>
          }
        />
        <Text
          text={t('description', {
            fallback:
              "Thank you for reaching out to Dreamart 3D. We’re thrilled to bring your vision to life and collaborate on something extraordinary. Our team will be in touch soon to start crafting the perfect solution for your project. Let's create something amazing together!",
          })}
        />
        <Button
          text={t('close', { fallback: 'Continue' })}
          type="button"
          onClick={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
};
