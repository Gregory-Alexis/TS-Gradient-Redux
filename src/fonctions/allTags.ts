const allTags = (list: any[]) => {
  let listTag: string[] = [];
  for (let element of list) {
    if (list.includes(element)) {
      listTag = listTag.concat(element.tags);
    }
  }
  let uniqueTagList: string[] = [];
  listTag.forEach((element) => {
    if (!uniqueTagList.includes(element)) {
      uniqueTagList.push(element);
    }
  });
  return uniqueTagList;
};

export default allTags;
