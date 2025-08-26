'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { cn } from '@/shared/lib/utils/cn';

import st from './Preloader.module.scss';

export const Preloader = () => {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsVisible(true);
    setIsHidden(false);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setIsHidden(true), 500);
      }, 1500);
    }, 1500);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (isHidden) return null;

  return (
    <div
      className={cn(st.preloader, isLoading ? st.loading : st.notLoading, !isVisible && st.hidden)}
    >
      <Image
        src="/preloader.gif"
        alt="preloader"
        width={200}
        height={200}
        className={cn(
          st.image,
          isLoading ? st.imageLoading : st.imageNotLoading,
          !isVisible && st.imageHidden
        )}
        unoptimized
      />
    </div>
  );
};
