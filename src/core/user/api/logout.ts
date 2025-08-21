'use server';

import { cookies } from 'next/headers';

export const logout = async () => {
  try {
    const cookieInst = await cookies();

    cookieInst.delete('token');
    cookieInst.delete('user');

    return { success: true };
  } catch (e) {
    console.error(e);
    return { success: false };
  }
};
