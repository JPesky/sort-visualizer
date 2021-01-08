import swap from './helpers';

const sortSteps = [];
const swapIndices = [];
const compareIndices = [];
const pivots = [];
// const arrayCopy;

export default function quickSort(array, left = 0, right = array.length - 1) {
  let index;
  if (array.length > 1) {
    sortSteps.push(array);
    index = partition(array, left, right);

    if (left < index - 1) {
      compareIndices.push(left);
      quickSort(array, left, index - 1);
    }

    if (index < right) {
      compareIndices.push(right);
      quickSort(array, index, right);
    }
  }
  return array;
}

function partition(items, left, right) {
  const pivot = items[Math.floor((right + left) / 2)];
  pivots.push(pivot);
  let i = left;
  let j = right;

  while (i <= j) {
    while (items[i] < pivot) {
      i += 1;
    }

    while (items[j] > pivot) {
      j -= 1;
    }

    if (i <= j) {
      swapIndices.push([i, j]);
      swap(items, i, j);
      i += 2;
      j -= 2;
    }
  }
  return i;
}
