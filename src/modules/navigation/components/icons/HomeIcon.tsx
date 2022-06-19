import theme from '@theme';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = ({
  width = 24,
  height = 24,
  stroke = theme.colors.primary['50'],
}: React.SVGProps<SVGSVGElement>) => (
  <Svg width={width} height={height} fill='none'>
    <Path
      d='M3 10.182V22h18V10.182L12 2l-9 8.182Z'
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap='square'
      strokeLinejoin='round'
    />
    <Path
      d='M15 14H9v8h6v-8Z'
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap='square'
    />
  </Svg>
);

export default React.memo(HomeIcon);
