// makes copy of array, swaps elements in copy and returns copy
export default function swap(indexOne, indexTwo, array) {
  const arrayCopy = array.slice(0);
  arrayCopy[indexOne] = array[indexTwo];
  arrayCopy[indexTwo] = array[indexOne];
  return arrayCopy;
}
