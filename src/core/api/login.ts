'use server';

import { cookies } from 'next/headers';

import { SERVER_URL } from '@/shared/config/env';

export const login = async ({ email, password }: { email: string; password: string }) => {
  const res = await fetch(`${SERVER_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const result = await res.json();

  if (result.token) {
    const cookieInst = await cookies();
    cookieInst.set('token', result.token, {
      httpOnly: true,
    });
    cookieInst.set('user', JSON.stringify(result.user));
    return { message: result.message, success: true, user: result.user };
  } else {
    return {
      message: result.errors.map(({ message }: { message: string }) => message).join(', '),
      success: false,
    };
  }
};
