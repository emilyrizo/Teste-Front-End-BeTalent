export const formatPhone = (phone: string): string => {
  const cleanedPhone = phone.replace(/^555/, '');
  const ddd = cleanedPhone.slice(0, 2);
  const firstPart = cleanedPhone.slice(2, 7);
  const secondPart = cleanedPhone.slice(7, 11);
  
  return `+55 (${ddd}) ${firstPart}-${secondPart}`;
};