import React, { useState, useEffect } from 'react';
import ArrayBar from '../ArrayBar/ArrayBar';
import './SortingArray.css';

function getRandomIntInRange(lowBound, upBound) {
  return Math.random() * (upBound - lowBound) + lowBound;
}

const SortingArray = () => {
  // const [arraySize, setArraySize] = useState(0);
  const [array, setArray] = useState([]);

  // setArraySize(15);
  useEffect(() => {
    const resetArray = () => {
      const dummyArray = [];
      for (let i = 0; i < 50; i += 1) {
        const randInt = getRandomIntInRange(5, 300);
        dummyArray.push(
          <ArrayBar
            value={randInt}
            key={i}
          />,
        );
      }
      setArray(dummyArray);
    };
    resetArray();
  }, []);

  const handleClickQuickSort = () => alert('Test Click');

  if (array === undefined || array === null) return null;

  return (
    <>
      <div className="array">
        {array}
      </div>
      <div>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={handleClickQuickSort}>QuickSort</button>
      </div>
    </>
  );
};

export default SortingArray;
