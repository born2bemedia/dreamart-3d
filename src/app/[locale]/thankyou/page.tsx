'use client';
import Image from 'next/image';

import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button/Button';

import styles from './page.module.scss';

export default function ThankYouPage() {
  const t = useTranslations('thankyouPage');
  return (
    <section className={styles.hero}>
      <video
        src="/videos/homeBanner.mp4"
        autoPlay
        muted
        loop
        playsInline
        className={styles.hero__video}
      />
      <div className={styles.hero__overlay} />
      <div className={'_container'}>
        <div className={styles.hero__content}>
          <Image src="/images/thanks.svg" alt="thanks" width={64} height={64} />
          <h1
            dangerouslySetInnerHTML={{
              __html: t('title', {
                fallback: 'Woohoo! Your Order is In!',
              }),
            }}
          />
          <p
            dangerouslySetInnerHTML={{
              __html: t('description', {
                fallback:
                  'Thank you for choosing Moddle 3D — your creative journey starts now! Our team will be in touch soon to confirm the details and get things rolling. We can’t wait to bring your vision to life!',
              }),
            }}
          />
          <Button
            text={t('button', {
              fallback: 'Home',
            })}
            type="button"
          />
        </div>
      </div>
    </section>
  );
}
