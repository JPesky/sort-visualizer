import React from 'react';
import './ArrayBar.css';

const PRIMARY_COLOR = '#EFE7DA';
const SWAPPED_COLOR = '#E55812';
const COMPARED_COLOR = '#00AFB9';

// eslint-disable-next-line react/prop-types
const ArrayBar = ({ value, beingSwapped, beingCompared }) => {
  const getColor = () => {
    if (beingSwapped) {
      return SWAPPED_COLOR;
    }
    if (beingCompared) {
      return COMPARED_COLOR;
    }
    return PRIMARY_COLOR;
  };

  // let name = beingSwapped ? 'transition' : "array-bar";
  return (
    <div
      className="array-bar"
      style={{
        backgroundColor: `${getColor()}`,
        height: `${value * 10}px`,
        marginInline: beingCompared || beingSwapped ? `${10}px` : `${3}px`,
        color: `${getColor()}`,
      }}
    >
      {value}
    </div>
  );
};

export default ArrayBar;
