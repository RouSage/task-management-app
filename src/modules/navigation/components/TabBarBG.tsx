import theme from '@theme';
import { Box } from 'native-base';
import React from 'react';
import Animated, {
  SharedValue,
  useAnimatedProps,
} from 'react-native-reanimated';
import { interpolatePath, parse } from 'react-native-redash';
import Svg, { Path } from 'react-native-svg';

const ORIGINAL_WIDTH = 428;
const ORIGINAL_HEIGHT = 86;
const ASPECT_RATIO = ORIGINAL_WIDTH / ORIGINAL_HEIGHT;

const PATH_CURVED = parse(
  'M0 0h176.5c0 22.75 10.5 39.464 37 39.464 28 0 36.5-16.714 36.5-39.428h214v65H0V0Z'
);
const PATH_FILLED = parse(
  'M0 0H176.5C176.5 0 184 0 210.5 0C238.5 0 250 0 250 0H428V65H0V0Z'
);

const AnimatedPath = Animated.createAnimatedComponent(Path);

interface Props {
  animationValue: SharedValue<number>;
  width: number;
}

const TabBarBG = ({ width, animationValue }: Props) => {
  const animatedProps = useAnimatedProps(() => {
    const d = interpolatePath(
      animationValue.value,
      [0, 1],
      [PATH_FILLED, PATH_CURVED]
    );

    return { d };
  });

  return (
    <Box
      style={{
        width,
        aspectRatio: ASPECT_RATIO,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
      }}>
      <Svg
        width='100%'
        height='100%'
        viewBox={`0 0 ${ORIGINAL_WIDTH} ${ORIGINAL_HEIGHT}`}
        fill='none'>
        <AnimatedPath
          animatedProps={animatedProps}
          fill={theme.colors.white['50']}
        />
      </Svg>
    </Box>
  );
};

export default TabBarBG;
