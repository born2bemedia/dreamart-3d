'use server';

import { cookies } from 'next/headers';

import type { ChangePasswordSchema } from '../model/change-password.schema';

export const changePassword = async ({
  newPassword,
  userId,
}: ChangePasswordSchema & { userId: number }) => {
  const cookieInst = await cookies();

  const token = cookieInst.get('token')?.value;

  const res = await fetch(`${process.env.SERVER_URL}/api/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      password: newPassword,
      confirmPassword: newPassword,
    }),
  });

  return await res.json();
};
