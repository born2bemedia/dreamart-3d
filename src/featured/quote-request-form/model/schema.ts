import { z } from 'zod';

export const quoteRequestFormSchema = z.object({
  firstName: z.string().min(1, { message: 'This field must be filled.' }),
  lastName: z.string().min(1, { message: 'This field must be filled.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  phone: z.string().min(5, { message: 'This field must be filled.' }),
  contactMethod: z.string().min(1, { message: 'This field must be filled.' }),
  service: z.string().min(1, { message: 'This field must be filled.' }),
  otherService: z.string().optional(),
  projectType: z.string().min(1, { message: 'This field must be filled.' }),
  files: z.array(z.instanceof(File)).optional(),
  description: z.string().min(1, { message: 'This field must be filled.' }),
  budget: z.string().min(1, { message: 'This field must be filled.' }),
  projectDeadline: z.string().min(1, { message: 'This field must be filled.' }),
  urgencyLevel: z.string().min(1, { message: 'This field must be filled.' }),
  fileFormat: z.string().min(1, { message: 'This field must be filled.' }),
  revision: z.string().min(1, { message: 'This field must be filled.' }),
  wouldCall: z.string().min(1, { message: 'This field must be filled.' }),
  isAgree: z.boolean().refine((val) => val, {
    message: 'You must agree to the terms and conditions.',
  }),
});
