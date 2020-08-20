const linearSearch = (list, target) => {
  if (!list.length) return list;
  let found = -1;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      found = i;
      break
    }
  }

  return found !== -1;
}

export default linearSearch;
