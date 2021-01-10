import swap from './helpers';

export default function bubbleSort(array) {
  const arrayLen = array.length;
  const sortSteps = [];
  const swapIndices = [];
  const compareIndices = [];
  let arrayCopy = array.slice(0);

  // basic bubble sort implementation
  for (let i = 0; i < arrayLen - 1; i += 1) {
    for (let j = 0; j < arrayLen - i - 1; j += 1) {
      sortSteps.push(arrayCopy);

      if (arrayCopy[j] > arrayCopy[j + 1]) {
        swapIndices.push([j, j + 1]);
        arrayCopy = swap(j, j + 1, arrayCopy);
      } else {
        swapIndices.push([]);
      }
      compareIndices.push([j, j + 1]);
    }
  }
  // omits the 1st push (original array before any swap or comparisons are made)
  return [sortSteps.slice(1), swapIndices, compareIndices];
}
