type Item = {
  updatedAt: string;
  [key: string]: string | number;
};

export const sortedByLatest = (items: Item[]): Item[] => {
  return [...items].sort((a, b) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
  });
};
