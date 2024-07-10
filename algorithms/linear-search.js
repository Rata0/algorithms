const linearSearch = (array, item) => {
  const length = array.length;
  for (let i = 0; i < length; i += 1) {
    if (array[i] === item) {
      return i;
    }
  }

  return -1;
}

export default linearSearch;