'use server';

import { SERVER_URL } from '@/shared/config/env';

export async function changePassword(token: string, newPassword: string) {
  const res = await fetch(`${SERVER_URL}/api/users/reset-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token, password: newPassword }),
  });
  const data = await res.json();

  return data;
}
