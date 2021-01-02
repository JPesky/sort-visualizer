import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import ArrayBar from '../ArrayBar/ArrayBar';
import './SortingArray.css';
import bubbleSort from '../../algorithms/bubbleSort';

const ANIMATION_SPEED_MS = 100;
const NUMBER_OF_BARS = 15;
const RANDOM_NUMS = [];
let finalArrayOfStates;

const SortingArray = () => {
  const [sortArray, setSortArray] = useState([]);

  const randomlyFillArray = () => {
    // const array = [];
    RANDOM_NUMS.length = 0;
    for (let i = 0; i < NUMBER_OF_BARS; i += 1) {
      RANDOM_NUMS.push(getRandomIntInRange(4, 100));
    }
    setSortArray(() => RANDOM_NUMS.map((val, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <ArrayBar value={val} key={`${-1}_${val}_${index}`} />
    )));
  };

  // initializes randomly filled array onMount
  useEffect(() => {
    randomlyFillArray();
  }, []);

  // nums/swapIndices/compareIndices passed as 1D Array
  // maps over that nums 1D Array
  const createBar = (nums, swapIndices, compareIndices, stateNum) => nums.map((val, index) => {
    if (swapIndices.includes(index)) {
      // eslint-disable-next-line react/no-array-index-key
      return <ArrayBar value={val} key={`${stateNum}_${val}_${index}`} beingSwapped />;
    }
    if (compareIndices.includes(index)) {
      // eslint-disable-next-line react/no-array-index-key
      return <ArrayBar value={val} key={`${stateNum}_${val}_${index}`} beingCompared />;
    }
    // eslint-disable-next-line react/no-array-index-key
    return <ArrayBar value={val} key={`${stateNum}_${val}_${index}`} />;
  });

  const fillArrayWithBars = (nums, swapIndices, compareIndices) => {
    // start at 1 ---> 0 is original array (no comparisons or swaps being made)
    const numsCopy = nums.slice();
    for (let state = 0; state < nums.length - 1; state += 1) {
      numsCopy[state + 1] = createBar(
        nums[state + 1],
        swapIndices[state],
        compareIndices[state],
        state,
      );
    }
    return numsCopy;
  };

  const animateSort = (filledArrayStates) => {
    filledArrayStates.forEach((element, index) => {
      setTimeout(() => {
        setSortArray(element);
      }, index * ANIMATION_SPEED_MS);
    });
  };

  const handleClickBubbleSort = () => {
    const [states, swapIndices, compareIndices] = bubbleSort(RANDOM_NUMS);
    finalArrayOfStates = fillArrayWithBars(states, swapIndices, compareIndices);
    animateSort(finalArrayOfStates);
  };

  const handleClickReanimate = () => {
    if (!finalArrayOfStates) {
      return;
    }
    animateSort(finalArrayOfStates);
  };

  return (
    <>
      <Button onClick={randomlyFillArray} type="button">Generate New Array</Button>
      <Button onClick={handleClickBubbleSort} type="button">Bubble Sort</Button>
      <Button onClick={handleClickReanimate} type="button">Reanimate</Button>
      <div className="array">
        {sortArray}
      </div>
    </>
  );
};

export default SortingArray;

function getRandomIntInRange(lowBound, upBound) {
  return Math.floor(Math.random() * (upBound - lowBound) + lowBound);
}
