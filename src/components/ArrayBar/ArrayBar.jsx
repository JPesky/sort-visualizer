import React from 'react';
import './ArrayBar.css';

const PRIMARY_COLOR = '#61dafb';
const SWAPPED_COLOR = '#00FF00';

// eslint-disable-next-line react/prop-types
const ArrayBar = ({ value, beingSwapped }) => (
  <div
    className="array-bar"
    style={{
      backgroundColor: beingSwapped ? `${SWAPPED_COLOR}` : `${PRIMARY_COLOR}`,
      height: `${value}px`,
    }}
  />
);

export default ArrayBar;
