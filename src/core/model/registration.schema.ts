import { z } from 'zod';

export const registrationSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(5, { message: 'Phone is required' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
  confirmPassword: z
    .string()
    .min(8)
    .refine((val: string) => val === val, {
      message: "Passwords don't match",
    }),
  isAgree: z.literal(true, {
    errorMap: () => ({ message: 'You must agree with Terms of Use and Privacy Policy' }),
  }),
});

export type RegistrationSchema = z.infer<typeof registrationSchema>;
