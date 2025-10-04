export const sortedByLatest = <T, K extends keyof T>(
  items: T[],
  field: K
): T[] => {
  return [...items].sort(
    (a, b) =>
      new Date(String(b[field])).getTime() -
      new Date(String(a[field])).getTime()
  );
};
