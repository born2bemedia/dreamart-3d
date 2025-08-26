import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

export const changePasswordSchema = z.object({
  newPassword: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
