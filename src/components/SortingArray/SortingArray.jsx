import React, { useState, useEffect } from 'react';
import ArrayBar from '../ArrayBar/ArrayBar';
import './SortingArray.css';
import bubbleSort from '../../algorithms/bubbleSort';

const NUMBER_OF_BARS = 75;
const ANIMATION_SPEED_MS = 2;

function getRandomIntInRange(lowBound, upBound) {
  return Math.random() * (upBound - lowBound) + lowBound;
}

const SortingArray = () => {
  const [sortArray, setSortArray] = useState([]);
  // const [sortedIndices, setSortedIndices] = useState([]);

  const randomlyFillArray = () => {
    const array = [];
    for (let i = 0; i < NUMBER_OF_BARS; i += 1) {
      array.push(
        <ArrayBar
          value={getRandomIntInRange(2, 300)}
          key={`Data ${i}`}
          beingSwapped={false}
        />,
      );
    }
    setSortArray(array);
  };

  // initializes randomly filled array on page load
  useEffect(() => {
    randomlyFillArray();
  }, []);

  const animateSort = (sortStatesArray) => {
    sortStatesArray.forEach((element, index) => {
      setTimeout(() => {
        setSortArray(element);
      }, index * ANIMATION_SPEED_MS);
    });
  };

  const handleClickBubbleSort = () => {
    const states = bubbleSort(sortArray);
    animateSort(states);
  };

  return (
    <>
      <button onClick={randomlyFillArray} type="button">Generate New Array</button>
      <button onClick={handleClickBubbleSort} type="button">Bubble Sort</button>
      <div className="array">
        {sortArray}
      </div>
    </>
  );
};

export default SortingArray;
