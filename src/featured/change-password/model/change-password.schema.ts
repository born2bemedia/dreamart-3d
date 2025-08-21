import { z } from 'zod';

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, { message: 'Current password is required' }),
    retypeCurrentPassword: z.string().min(1, { message: 'Retype current password is required' }),
    newPassword: z.string().min(1, { message: 'New password is required' }),
  })
  .refine((data) => data.retypeCurrentPassword === data.currentPassword, {
    path: ['retypeCurrentPassword'],
    message: 'Passwords must match',
  });

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
