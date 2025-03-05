export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  return `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`;
};