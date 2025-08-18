import { toast } from 'sonner';

export const notifyWarning = (message: string) => toast.warning(message);

export const notifySuccess = (message: string) => toast.success(message);
