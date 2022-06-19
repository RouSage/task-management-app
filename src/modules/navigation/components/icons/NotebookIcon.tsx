import theme from '@theme';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const NotebookIcon = ({
  width = 24,
  height = 24,
  stroke = theme.colors.primary['50'],
}: React.SVGProps<SVGSVGElement>) => (
  <Svg width={width} height={height} fill='none'>
    <Path
      d='M9 8h5M18 3v18H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12Z'
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M5 19v-1a1 1 0 0 1 1-1h12'
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default React.memo(NotebookIcon);
