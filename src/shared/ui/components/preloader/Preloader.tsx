'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Preloader: React.FC = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsVisible(false), 200);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        color: '#ffffff',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#0c0c0c',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99999,
        opacity: isLoading ? 1 : 0,
        transition: 'opacity 0.5s ease',
        visibility: isVisible ? 'visible' : 'hidden',
      }}
    >
      <Image src="/images/preloader.gif" alt="preloader" width={150} height={150} quality={100} />
    </div>
  );
};
