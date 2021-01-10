import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import ArrayBar from '../ArrayBar/ArrayBar';
import './SortingArray.css';
import bubbleSort from '../../algorithms/bubbleSort';

const ANIMATION_SPEED_MS = 350;
const NUMBER_OF_BARS = 10;
let RANDOM_NUMS = [];
let sortStepsWithBars;
let animating = false;

const SortingArray = () => {
  const [sortArray, setSortArray] = useState([]);

  const randomlyFillArray = () => {
    if (animating) return;
    RANDOM_NUMS.length = 0;
    RANDOM_NUMS = generateRandomNumArray(5, 40);
    setSortArray(() => RANDOM_NUMS.map((randNum) => (
      <ArrayBar value={randNum} />
    )));
  };

  // initializes randomly filled array onMount
  useEffect(() => {
    randomlyFillArray();
  }, []);

  const animateSort = () => {
    animating = true;
    sortStepsWithBars.forEach((sortStep, index) => {
      setTimeout(() => {
        setSortArray(sortStep);
      }, index * ANIMATION_SPEED_MS);
    });
    // change variable at end of animation
    setTimeout(() => {
      animating = false;
    }, ANIMATION_SPEED_MS * sortStepsWithBars.length);
  };

  // sortStep/swapIndices/compareIndices passed as 1D Array aka One Sort Step
  const createBar = (sortStep, swapIndices, compareIndices) => sortStep.map((element, index) => {
    if (swapIndices.includes(index)) {
      return <ArrayBar value={element} beingSwapped />;
    }
    if (compareIndices.includes(index)) {
      return <ArrayBar value={element} beingCompared />;
    }
    return <ArrayBar value={element} />;
  });

  const fillArrayWithBars = (sortSteps, swapIndices, compareIndices) => sortSteps
    .map((step, index) => (
      createBar(step, swapIndices[index], compareIndices[index])
    ));

  const handleClickSort = (sortingAlgorithm) => {
    if (animating) return;
    const [sortSteps, swapIndices, compareIndices] = sortingAlgorithm(RANDOM_NUMS);
    sortStepsWithBars = fillArrayWithBars(sortSteps, swapIndices, compareIndices);
    animateSort();
  };

  return (
    <>
      <Button onClick={randomlyFillArray}>Generate New Array</Button>
      <Button onClick={() => handleClickSort(bubbleSort)}>Bubble Sort</Button>
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
    array.push(getRandomIntInRange(lo, hi));
  }
  return array;
}
