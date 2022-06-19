import { Box, FormControl, Input, Text } from 'native-base';
import React, { useState } from 'react';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedLabel = Animated.createAnimatedComponent(FormControl.Label);
const AnimatedText = Animated.createAnimatedComponent(Text);

const ANIMATION_CONFIG = {
  duration: 300,
  easing: Easing.linear,
};

interface Props {
  label: string;
  value: string;
  onChange: (text: string) => void;
  isDisabled?: boolean;
}

const TextInput = ({ label, value, onChange, isDisabled }: Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const animation = useDerivedValue(() => {
    return withTiming(Number(isFocused || Boolean(value)), ANIMATION_CONFIG);
  }, [isFocused, value]);

  const labelContainerStyle = useAnimatedStyle(() => {
    const translateY = interpolate(animation.value, [0, 1], [30, -8]);
    const translateX = interpolate(animation.value, [0, 1], [17, 0]);

    return { transform: [{ translateY }, { translateX }] };
  });
  const labelTextStyle = useAnimatedStyle(() => {
    const fontSize = interpolate(animation.value, [0, 1], [16, 12]);

    return { fontSize };
  });

  return (
    <Box pt='5' position='relative' opacity={isDisabled ? 0.7 : 1}>
      <Input
        borderRadius='lg'
        borderWidth={1}
        borderColor='transparent'
        bg='trueGray.100'
        py='3'
        px='4'
        _input={{
          color: 'black.50',
          fontSize: 'md',
          fontWeight: 'medium',
        }}
        _focus={{
          borderColor: 'primary.50',
          bg: 'trueGray.100',
        }}
        selectionColor='black.50'
        isDisabled={isDisabled}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={onChange}
      />
      <AnimatedLabel
        position='absolute'
        style={labelContainerStyle}
        opacity={0.5}>
        <AnimatedText
          color='black.100'
          fontWeight='medium'
          style={labelTextStyle}>
          {label}
        </AnimatedText>
      </AnimatedLabel>
    </Box>
  );
};

export default TextInput;
