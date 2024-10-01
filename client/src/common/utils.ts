export const toUpperCase = (value: string) => {
  const lowerCaseValue = value.toLowerCase();
  return lowerCaseValue.charAt(0).toUpperCase() + lowerCaseValue.slice(1);
};
