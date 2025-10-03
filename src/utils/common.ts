export const sortedByLatest = <T extends Record<string, string>>(
  items: T[],
  field: keyof T
): T[] => {
  return [...items].sort(
    (a, b) => new Date(b[field]).getTime() - new Date(a[field]).getTime()
  );
};
