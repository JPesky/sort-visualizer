import swap from './helpers';

export default function bubbleSort(array) {
  const arrayLen = array.length;
  const swapStates = [];
  let arrayCopy = array.slice(0);
  swapStates.push(arrayCopy);

  // basic bubble sort implementation
  for (let i = 0; i < arrayLen - 1; i += 1) {
    for (let j = 0; j < arrayLen - i - 1; j += 1) {
      const jBarValue = arrayCopy[j].props.value;
      const jPlusOneBarValue = arrayCopy[j + 1].props.value;

      if (jBarValue > jPlusOneBarValue) {
        arrayCopy = swap(j, j + 1, arrayCopy);
        swapStates.push(arrayCopy);
      }
    }
  }
  return swapStates;
}
