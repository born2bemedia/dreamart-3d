export const lsWrite = (key: string, value: string) => {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.setItem(key, value);
};

export const lsRead = (key: string) => {
  if (typeof window === 'undefined') {
    return;
  }
  return localStorage.getItem(key);
};
