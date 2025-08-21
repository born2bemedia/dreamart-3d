export const downloadFile = (url: string) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = `invoice-${url.split('/').pop()}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
