import type { RequestFormSchema } from '../model/schema';

export const sendRequestPackageForm = async (data: RequestFormSchema) => {
  const response = await fetch(`/api/request-package`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
  return response.json();
};
