import { z } from 'zod';

export const requestSchema = z.object({
  firstName: z.string().nonempty({ message: 'El nombre es obligatorio.' }),
  lastName: z.string().nonempty({ message: 'El apellido es obligatorio.' }),
  phone: z.string().nonempty({ message: 'El número de teléfono es obligatorio.' }),
  email: z.string().email({ message: 'La dirección de correo electrónico no es válida.' }),
  message: z.string().optional(),
});

export type RequestFormValues = z.infer<typeof requestSchema>;
