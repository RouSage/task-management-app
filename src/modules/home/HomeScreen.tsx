import PrimaryButton from '@components/buttons/PrimaryButton';
import { Box } from 'native-base';
import React from 'react';

const HomeScreen = () => {
  return (
    <Box flex={1} bg='white.400' px='25px'>
      <PrimaryButton text='Hello World!' />
    </Box>
  );
};

export default HomeScreen;
