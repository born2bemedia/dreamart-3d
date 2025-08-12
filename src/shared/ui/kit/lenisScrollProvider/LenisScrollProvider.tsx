'use client';

import { useEffect, useRef } from 'react';
import { useParams, usePathname } from 'next/navigation';

import { cancelFrame, frame } from 'framer-motion';
import { type LenisRef, ReactLenis } from 'lenis/react';

export const LenisScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const locale = useParams();
  const pathname = usePathname();
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  useEffect(() => {
    lenisRef.current?.lenis?.resize();
  }, [pathname]);

  useEffect(() => {
    lenisRef.current?.lenis?.resize();
  }, [locale]);

  return (
    <ReactLenis
      root
      options={{ autoRaf: false, lerp: 0.2, duration: 2, smoothWheel: true }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
};
