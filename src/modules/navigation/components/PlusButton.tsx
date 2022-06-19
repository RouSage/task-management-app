import theme from '@theme';
import { Box } from 'native-base';
import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useAnimatedStyle,
  withSpring,
  SharedValue,
} from 'react-native-reanimated';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg';

const AnimatedBox = Animated.createAnimatedComponent(Box);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

interface Props {
  animationValue: SharedValue<number>;
  size?: number;
}

const PlusButton = ({ size = 58, animationValue }: Props) => {
  const buttonStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(animationValue.value),
      },
    ],
  }));

  return (
    <AnimatedBox
      style={buttonStyle}
      top={-28}
      size={`${size}px`}
      pointerEvents='box-none'
      borderRadius='full'
      bgColor='transparent'
      alignItems='center'
      justifyContent='center'>
      <Svg
        width='100%'
        height='100%'
        style={StyleSheet.absoluteFillObject}
        fill='none'>
        <Circle cx={size / 2} cy={size / 2} r={size / 2} fill='url(#a)' />
        <Defs>
          <LinearGradient id='a' x1='0' y1='0%' x2='100%' y2='50%'>
            <Stop stopColor={theme.colors.primary['100']} />
            <Stop offset={1} stopColor={theme.colors.secondary['50']} />
          </LinearGradient>
        </Defs>
      </Svg>
      <AnimatedSvg width={24} height={24} fill='none' style={buttonStyle}>
        <Path
          d='M20 12H4m8-8v16'
          stroke={theme.colors.white['50']}
          strokeWidth={2}
          strokeLinecap='round'
        />
      </AnimatedSvg>
    </AnimatedBox>
  );
};

export default memo(PlusButton);
