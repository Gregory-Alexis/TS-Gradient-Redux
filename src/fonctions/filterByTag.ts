export const filterByTag = (data: [], filter: string, value: string) => {
  const list = data.filter((el: any) => {
    if (filter === value) {
      return true;
    }
    return el.tags.includes(filter);
  });
  return list;
};
