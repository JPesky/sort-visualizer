import './App.css';
import React from 'react';
import SortingArray from './components/SortingArray/SortingArray';
import Toolbar from './components/Toolbar/Toolbar';

export default function App() {
  return (
    <div className="App">
      <Toolbar />
      <SortingArray />
    </div>
  );
}
