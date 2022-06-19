import { Button } from 'native-base';
import React, { memo } from 'react';

interface Props {
  text: string;
  isDisabled?: boolean;
}

const PrimaryButton = ({ text, isDisabled }: Props) => {
  return (
    <Button
      disabled={isDisabled}
      bg='primary.50'
      py='4'
      borderRadius='lg'
      opacity={isDisabled ? 0.7 : 1}
      _pressed={{
        bg: 'primary.200',
      }}
      _text={{
        color: 'white.400',
        fontWeight: 'bold',
        fontSize: 'md',
      }}>
      {text}
    </Button>
  );
};

export default memo(PrimaryButton);
