'use client';

import { useEffect } from 'react';

import type { ReactNode } from 'react';

import type { User } from './types';
import { useUserStore } from './user.store';

export function UserStoreProvider({
  children,
  initialUser,
}: {
  children: ReactNode;
  initialUser: User | null;
}) {
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    if (initialUser) {
      setUser(initialUser);
    }
  }, [initialUser, setUser]);

  return <>{children}</>;
}
