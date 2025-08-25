import { z } from 'zod';

export const careerSchema = z.object({
  fullName: z.string().min(1, { message: 'This field must be filled.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  resume: z.array(z.instanceof(File)).min(1, { message: 'This field must be filled.' }),
  message: z.string().optional(),
  coverLetter: z.array(z.instanceof(File)).optional(),
  position: z.string().min(1, { message: 'This field must be filled.' }),
});

export type CareerSchema = z.infer<typeof careerSchema>;
