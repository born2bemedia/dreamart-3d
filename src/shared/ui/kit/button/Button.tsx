'use client';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import styles from './Button.module.scss';

export const Button = ({
  className,
  text,
  type,
  href,
}: {
  className?: string;
  text: string;
  type: 'link' | 'button';
  href?: string;
}) => {
  const t = useTranslations('button');

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return type === 'button' ? (
    <button className={`${className ? styles[className] : styles.button}`} onClick={scrollToFooter}>
      {text}
    </button>
  ) : (
    <Link className={`${className ? styles[className] : styles.button}`} href={href || ''}>
      {text}
    </Link>
  );
};
