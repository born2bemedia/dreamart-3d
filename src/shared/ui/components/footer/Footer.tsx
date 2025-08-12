'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import styles from './Footer.module.scss';

//import { RequestForm } from '@/featured/contact-popup/ui/RequestForm/RequestForm';
//import { ThankyouModal } from '@/featured/contact-popup/ui/ThankyouModal/ThankyouModal';

export const Footer = () => {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      
    </footer>
  );
};
