'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';

import st from './Navigation.module.scss';

const getNav = (t: ReturnType<typeof useTranslations>) => [
  { label: t('3DModelling', { fallback: '3D Modelling' }), value: '3d-modelling' },
  {
    label: t('animationCreation', { fallback: 'Animation Creation' }),
    value: 'animation-creation',
  },
  { label: t('uiuxDesign', { fallback: 'UI/UX Design' }), value: 'ui-ux-design' },
  { label: t('videoProduction', { fallback: 'Video Production' }), value: 'video-production' },
];

export const Navigation = () => {
  const t = useTranslations('services.navigation');

  const items = useMemo(() => getNav(t), [t]);
  const ids = useMemo(() => items.map((i) => i.value), [items]);

  const [active, setActive] = useState<string>(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      return window.location.hash.slice(1);
    }
    return ids[0] ?? '3d-modelling';
  });

  const activeRef = useRef(active);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const OFFSET = 120; // высота фикс-хедера

    const pickCurrent = () => {
      const markerY = window.scrollY + OFFSET;

      // по умолчанию — первая доступная секция
      let current: string | null = null;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;

        // если верх секции выше линии — считаем её текущей
        if (markerY >= el.offsetTop) {
          current = id;
        } else {
          // как только нашли секцию ниже маркера — выходим
          break;
        }
      }

      // если все секции ниже маркера — активируем самую первую существующую
      if (!current) {
        for (const id of ids) {
          if (document.getElementById(id)) {
            current = id;
            break;
          }
        }
      }

      if (current && current !== activeRef.current) {
        setActive(current);
        history.replaceState(null, '', `#${current}`);
      } else if (!window.location.hash && current) {
        // если хеша не было — всё равно проставим
        history.replaceState(null, '', `#${current}`);
      }
    };

    let ticking = false;
    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          pickCurrent();
          ticking = false;
        });
      }
    };

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });

    // инициализация: после рендера и после загрузки ресурсов (изображения могут сдвинуть разметку)
    requestAnimationFrame(pickCurrent);
    window.addEventListener('load', pickCurrent);

    return () => {
      window.removeEventListener('scroll', onScrollOrResize);
      window.removeEventListener('resize', onScrollOrResize);
      window.removeEventListener('load', pickCurrent);
    };
  }, [ids]);

  const handleClick = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    const OFFSET = 120;
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
      setActive(id);
      history.replaceState(null, '', `#${id}`);
    } else {
      window.location.hash = id; // запасной путь
    }
  };

  return (
    <nav className={st.navigation}>
      {items.map((item) => (
        <Link
          key={item.value}
          href={`#${item.value}`}
          onClick={handleClick(item.value)}
          className={cn(st.navigation__item, {
            [st.navigation__activeItem]: active === item.value,
          })}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
