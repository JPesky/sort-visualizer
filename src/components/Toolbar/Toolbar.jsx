import { useColorMode } from '@chakra-ui/react';

import React, { useEffect } from 'react';

const Toolbar = () => {
  const { toggleColorMode } = useColorMode();
  useEffect(toggleColorMode, []);

  return (
    <>
    </>
  );
};

export default Toolbar;
