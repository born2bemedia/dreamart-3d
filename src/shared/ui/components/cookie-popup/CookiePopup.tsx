'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';

import st from './CookiePopup.module.scss';

export const CookiePopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const t = useTranslations('cookiePopup');

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={cn(st.cookiePopup, {
        [st.visible]: isVisible,
      })}
    >
      <h2>{t('title', { fallback: 'Cookie settings' })}</h2>
      <p>
        {t('text.0', {
          fallback:
            'Cookies help us improve our website. By clicking &apos;Accept,&apos; you agree to our use of cookies for functionality, analytics, and personalized content. Learn more in our',
        })}{' '}
        <Link href="/cookie-policy">{t('text.1', { fallback: 'Cookie Policy' })}</Link>.
      </p>
      <div className={st.buttons}>
        <button onClick={handleDecline} className={cn(st.decline)}>
          {t('decline', { fallback: 'Decline' })}
        </button>
        <button onClick={handleAccept} className={cn(st.accept)}>
          {t('accept', { fallback: 'Accept' })}
        </button>
      </div>
    </div>
  );
};
