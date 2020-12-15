import React, { useState, useEffect } from 'react';
import ArrayBar from '../ArrayBar/ArrayBar';

function getRandomIntInRange(lowBound, upBound) {
  return Math.random() * (upBound - lowBound) + lowBound;
}

const SortingArray = () => {
  const [arraySize, setArraySize] = useState(0);
  const [array, setArray] = useState(0);

  useEffect(() => {
    const resetArray = () => {
      const dummyArray = [];

      for (let i = 0; i < arraySize; i += 1) {
        dummyArray.push(getRandomIntInRange(5, 50));
      }
      setArray(dummyArray);
    };

    resetArray();
  }, []);
};

export default SortingArray;
