import React from 'react';
import './ArrayBar.css';
import PropTypes from 'prop-types';

const PRIMARY_COLOR = '#EFE7DA';
const SWAPPED_COLOR = '#E55812';
const COMPARED_COLOR = '#00AFB9';

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
        height: `${value * 10}px`,
        marginInline: beingCompared || beingSwapped ? `${10}px` : `${3}px`,
      }}
    />
  );
};

export default ArrayBar;

ArrayBar.defaultProps = {
  beingSwapped: false,
  beingCompared: false,
};

ArrayBar.propTypes = {
  value: PropTypes.number.isRequired,
  beingSwapped: PropTypes.bool,
  beingCompared: PropTypes.bool,
};
