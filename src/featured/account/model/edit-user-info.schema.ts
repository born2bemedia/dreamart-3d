import { z } from 'zod';

export const editUserInfoSchema = z.object({
  firstName: z.string().min(1, { message: 'First Name is required' }),
  lastName: z.string().min(1, { message: 'Last Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phone: z.string().min(1, { message: 'Phone number is required' }),
  address1: z.string().min(1, { message: 'Street Address is required' }),
  address2: z.string().min(1, { message: 'Apartment/Suite is required' }),
  city: z.string().min(1, { message: 'City is required' }),
  country: z.string().min(1, { message: 'Country is required' }),
  zip: z.string().min(1, { message: 'Zip Code is required' }),
});

export type EditUserInfoSchema = z.infer<typeof editUserInfoSchema>;
