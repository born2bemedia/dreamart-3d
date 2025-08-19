import { z } from 'zod';

export const checkoutFormSchema = z.object({
  firstName: z.string().min(1, { message: 'This field must be filled.' }),
  lastName: z.string().min(1, { message: 'This field must be filled.' }),
  address1: z.string().min(1, { message: 'This field must be filled.' }),
  address2: z.string().optional(),
  city: z.string().min(1, { message: 'This field must be filled.' }),
  country: z.string().min(1, { message: 'This field must be filled.' }),
  zip: z.string().min(1, { message: 'This field must be filled.' }),
  phone: z.string().min(1, { message: 'This field must be filled.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  orderNotes: z.string().optional(),
  termsAndConditions: z.boolean().refine((val) => val, {
    message: 'You must agree to the terms and conditions.',
  }),
  refundPolicy: z.boolean().refine((val) => val, {
    message: 'You must agree to the refund policy.',
  }),
});

export type CheckoutFormSchema = z.infer<typeof checkoutFormSchema>;
