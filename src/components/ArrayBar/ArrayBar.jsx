import React from 'react';
import './ArrayBar.css';

const PRIMARY_COLOR = '#61dafb';

// eslint-disable-next-line react/prop-types
const ArrayBar = ({ value }) => (
  <div
    className="array-bar"
    style={{
      backgroundColor: `${PRIMARY_COLOR}`,
      height: `${value}px`,
    }}
  />
);

export default ArrayBar;
