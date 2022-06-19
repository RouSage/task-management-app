import PrimaryButton from '@components/buttons/PrimaryButton';
import TextInput from '@components/inputs/TextInput';
import { Box } from 'native-base';
import React, { useState } from 'react';

const HomeScreen = () => {
  const [value, setValue] = useState('');

  return (
    <Box flex={1} bg='white.400' px='25px'>
      <PrimaryButton text='Hello World!' />
      <Box mt='2'>
        <TextInput label='Title' value={value} onChange={setValue} />
      </Box>
    </Box>
  );
};

export default HomeScreen;
