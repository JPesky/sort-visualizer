import './App.css';
import React, { useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';
import SortingArray from './components/SortingArray/SortingArray';

export default function App() {
  const { toggleColorMode } = useColorMode();
  useEffect(toggleColorMode, []);
  return (
    <div className="App">
      <SortingArray />
    </div>
  );
}
