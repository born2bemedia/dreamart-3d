'use server';

import { SERVER_URL } from '@/shared/config/env';

import type { RegistrationSchema } from '../model/registration.schema';

export const registerUser = async (userDTO: Omit<RegistrationSchema, 'confirmPassword'>) => {
  try {
    await fetch(`${SERVER_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...userDTO, role: 'customer' }),
    });

    return { success: true };
  } catch {
    return { success: false };
  }
};
