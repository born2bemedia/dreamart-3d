'use client';
import Link from 'next/link';

import styles from './Button.module.scss';

export const Button = ({
  className,
  text,
  type,
  href,
  onClick,
}: {
  className?: string;
  text: string;
  type: 'link' | 'button';
  href?: string;
  onClick?: () => void;
}) => {

  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return type === 'button' ? (
    <button className={`${className ? styles[className] : styles.button}`} onClick={onClick || scrollToFooter}>
      {text}
    </button>
  ) : (
    <Link className={`${className ? styles[className] : styles.button}`} href={href || ''}>
      {text}
    </Link>
  );
};
