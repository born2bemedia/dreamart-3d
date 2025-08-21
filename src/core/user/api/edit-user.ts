'use server';

import { cookies } from 'next/headers';

import type { EditUserInfoSchema } from '@/featured/account/model/edit-user-info.schema';

export async function editUser(data: EditUserInfoSchema & { id: number }) {
  const cookieInst = await cookies();

  const res = await fetch(`${process.env.SERVER_URL}/api/users/${data.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const resData = await res.json();

  cookieInst.set('user', JSON.stringify(resData.doc));

  return resData;
}
