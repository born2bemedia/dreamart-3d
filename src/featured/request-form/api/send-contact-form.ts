import type { RequestFormSchema } from '../model/schema';

export const sendContactForm = async (data: RequestFormSchema) => {
  const response = await fetch(`/api/contact`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return response.json();
};
