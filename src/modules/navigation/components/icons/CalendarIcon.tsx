import theme from '@theme';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarIcon = ({
  width = 24,
  height = 24,
  stroke = theme.colors.primary['50'],
}: React.SVGProps<SVGSVGElement>) => (
  <Svg width={width} height={height} fill='none'>
    <Path
      d='M3 5h18v16H3V5ZM21 9H3M7 5V3M17 5V3'
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);

export default React.memo(CalendarIcon);
