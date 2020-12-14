export const plural = (
  number: number,
  singular: string,
  plural?: string
): string => {
  if (number === 1) {
    return singular;
  }

  return plural || `${singular}s`;
};
