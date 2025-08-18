'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useLenis } from 'lenis/react';
import { useTranslations } from 'next-intl';

import { BurgerMenu, Cart, Facebook, Instagram, X } from '@/shared/ui/icons';

import styles from './Header.module.scss';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();

  const t = useTranslations('header');

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      lenis?.stop();
    } else {
      document.body.style.overflow = 'auto';
      lenis?.start();
    }
  }, [isMobileMenuOpen, lenis]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__top}>
          <div className={'_container'}>
            <div className={styles.header__top_row}>
              <div className={styles.socials}>
                <Link href="#">
                  <X />
                </Link>
                <Link href="#">
                  <Facebook />
                </Link>
                <Link href="#">
                  <Instagram />
                </Link>
              </div>
              <div className={styles.contacts}>
                <Link href="mailto:example@gmail.com">example@gmail.com</Link>
                <Link href="tel:+1 000 000 000">+1 000 000 000</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.header__main}>
          <div className={'_container'}>
            <div className={styles.header__main_row}>
              <Link href="/" className={styles.header__logo}>
                <Image src="/images/logo.svg" alt="DreamArt 3D" width={125} height={24} />
              </Link>
              <nav className={styles.nav}>
                <Link href="/">{t('home', { fallback: 'Home' })}</Link>
                <Link href="/shop">{t('shop', { fallback: 'Shop' })}</Link>
                <Link href="#">{t('work', { fallback: 'Work' })}</Link>
                <Link href="#">{t('services', { fallback: 'Services' })}</Link>
                <Link href="/impact">{t('impact', { fallback: 'Impact' })}</Link>
                <Link href="/prices">{t('prices', { fallback: 'Prices' })}</Link>
                <Link href="/deals">{t('deals', { fallback: 'Deals' })}</Link>
                <Link href="/trends">{t('trends', { fallback: 'Trends' })}</Link>
                <Link href="#">{t('careers', { fallback: 'Careers' })}</Link>
                <Link href="/contacts">{t('contacts', { fallback: 'Contacts' })}</Link>
              </nav>
              <div className={styles.actions}>
                <Link href="#" className={styles.cart}>
                  <Cart />
                </Link>
                <Link href="#" className={styles.login}>
                  {t('login', { fallback: 'Login' })}
                </Link>
                <Link href="#" className={styles.signup}>
                  {t('signup', { fallback: 'Sign Up' })}
                </Link>
                <span
                  className={styles.burger}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <BurgerMenu />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.active : ''}`}>
        <nav className={styles.nav}>
          <Link href="/">{t('home', { fallback: 'Home' })}</Link>
          <Link href="/shop">{t('shop', { fallback: 'Shop' })}</Link>
          <Link href="#">{t('work', { fallback: 'Work' })}</Link>
          <Link href="#">{t('services', { fallback: 'Services' })}</Link>
          <Link href="/impact">{t('impact', { fallback: 'Impact' })}</Link>
          <Link href="/prices">{t('prices', { fallback: 'Prices' })}</Link>
          <Link href="/deals">{t('deals', { fallback: 'Deals' })}</Link>
          <Link href="/trends">{t('trends', { fallback: 'Trends' })}</Link>
          <Link href="#">{t('careers', { fallback: 'Careers' })}</Link>
          <Link href="/contacts">{t('contacts', { fallback: 'Contacts' })}</Link>
        </nav>
        <div className={styles.actions}>
          <Link href="#" className={styles.loginMobile}>
            {t('login', { fallback: 'Login' })}
          </Link>
          <Link href="#" className={styles.signupMobile}>
            {t('signup', { fallback: 'Sign Up' })}
          </Link>
        </div>
        <div className={styles.bottom}>
          <div className={styles.socials}>
            <Link href="#">
              <X />
            </Link>
            <Link href="#">
              <Facebook />
            </Link>
            <Link href="#">
              <Instagram />
            </Link>
          </div>
          <div className={styles.contacts}>
            <Link href="mailto:example@gmail.com">example@gmail.com</Link>
            <Link href="tel:+1 000 000 000">+1 000 000 000</Link>
          </div>
        </div>
      </div>
    </>
  );
};
