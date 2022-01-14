const allTags = (array: any[]) => {
  let listTag: string[] = [];
  for (let element of array) {
    if (array.includes(element)) {
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
