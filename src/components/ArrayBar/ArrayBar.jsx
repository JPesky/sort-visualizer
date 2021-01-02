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

  return (
    <div
      className="array-bar"
      style={{
        backgroundColor: `${getColor()}`,
        height: `${value * 6}px`,
        marginInline: beingCompared || beingSwapped ? `${5}px` : `${1}px`,
        color: `${getColor()}`, // makes value same color as background - solid bar
      }}
    >
      {value}
    </div>
  );
};

export default ArrayBar;
