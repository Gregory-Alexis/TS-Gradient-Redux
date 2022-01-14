export const filterByTag = (data: [], filter: string, a: string) => {
  const list = data.filter((el: any) => {
    if (filter === a) {
      return true;
    }
    return el.tags.includes(filter);
  });
  return list;
};
