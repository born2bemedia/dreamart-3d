'use client';

import { useEffect, useState } from 'react';

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

  return (
    <div
      className={cn(st.cookiePopup, {
        [st.visible]: isVisible,
      })}
    >
      <h2>{t('title', { fallback: 'We Like to Keep Things Tasty (and Transparent)!' })}</h2>
      <p>
        {t('text', {
          fallback:
            'We use cookies to enhance your experience on our site, whether it’s for keeping you logged in or providing you with great content. By continuing to browse, you’re agreeing to our use of cookies. If you’re not a fan, you can adjust your cookie settings anytime — but hey, cookies are pretty sweet, aren’t they?',
        })}
      </p>
      <div className={st.buttons}>
        <button onClick={handleAccept} className={cn(st.accept)}>
          {t('accept', { fallback: 'Accept Cookies' })}
        </button>
      </div>
    </div>
  );
};
