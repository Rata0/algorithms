const binarySearch = (array, item) => {
  let left = 0;
  let right = array.length - 1;
  let midle;
  let position = -1;

  while (left <= right) {
    midle = Math.floor((left + right) / 2);
    if (array[midle] === item) {
      position = midle;
      return position;
    }

    if (item < array[midle]) {
      right = midle - 1;
    } else {
      left = midle + 1;
    }
  }

  return position
}

export default binarySearch;
