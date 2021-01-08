import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';
import ArrayBar from '../ArrayBar/ArrayBar';
import './SortingArray.css';
import bubbleSort from '../../algorithms/bubbleSort';

const ANIMATION_SPEED_MS = 250;
const NUMBER_OF_BARS = 15;
let RANDOM_NUMS = [];
let sortStepsWithBars;

const SortingArray = () => {
  const [sortArray, setSortArray] = useState([]);

  const randomlyFillArray = () => {
    RANDOM_NUMS.length = 0;
    RANDOM_NUMS = generateRandomNumArray(5, 40);
    setSortArray(() => RANDOM_NUMS.map((randNum) => (
      <ArrayBar value={randNum.value} key={`${randNum.id}`} />
    )));
  };

  // initializes randomly filled array onMount
  useEffect(() => {
    randomlyFillArray();
  }, []);

  const animateSort = () => {
    sortStepsWithBars.forEach((sortStep, index) => {
      setTimeout(() => {
        setSortArray(sortStep);
      }, index * ANIMATION_SPEED_MS);
    });
  };

  // sortStep/swapIndices/compareIndices passed as 1D Array aka One Sort Step
  const createBar = (sortStep, swapIndices, compareIndices) => sortStep.map((randNum, index) => {
    if (swapIndices.includes(index)) {
      return <ArrayBar value={randNum.value} key={`${randNum.id}`} beingSwapped />;
    }
    if (compareIndices.includes(index)) {
      return <ArrayBar value={randNum.value} key={`${randNum.id}`} beingCompared />;
    }
    return <ArrayBar value={randNum.value} key={`${randNum.id}`} />;
  });

  const fillArrayWithBars = (sortSteps, swapIndices, compareIndices) => sortSteps
    .map((step, index) => (
      createBar(step, swapIndices[index], compareIndices[index])
    ));

  const handleClickSort = (sortingAlgorithm) => {
    const [sortSteps, swapIndices, compareIndices] = sortingAlgorithm(RANDOM_NUMS);
    sortStepsWithBars = fillArrayWithBars(sortSteps, swapIndices, compareIndices);
    animateSort();
  };

  const handleClickReanimate = () => {
    // can't reanimate the sort if it hasn't been sorted yet
    if (!sortStepsWithBars) {
      return;
    }
    animateSort(sortStepsWithBars);
  };

  return (
    <>
      <Button onClick={randomlyFillArray}>Generate New Array</Button>
      <Button onClick={() => handleClickSort(bubbleSort)}>Bubble Sort</Button>
      <Button onClick={handleClickReanimate}>Reanimate</Button>
      <div>
        <div className="orange-square">Being Swapped</div>
        <div className="blue-square">Being Compared</div>
      </div>
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

function generateRandomNumArray(lo, hi) {
  const array = [];
  for (let i = 0; i < NUMBER_OF_BARS; i += 1) {
    array.push({ value: getRandomIntInRange(lo, hi), id: uuidv4() });
  }
  return array;
}
