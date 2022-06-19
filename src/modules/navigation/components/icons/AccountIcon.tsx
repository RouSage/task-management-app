import theme from '@theme';
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const AccountIcon = ({
  width = 24,
  height = 24,
  stroke = theme.colors.primary['50'],
}: React.SVGProps<SVGSVGElement>) => (
  <Svg width={width} height={height} fill='none'>
    <Path
      d='M4 20c0-3 4-3 6-5 1-1-2-1-2-6 0-3.333 1.333-5 4-5s4 1.667 4 5c0 5-3 5-2 6 2 2 6 2 6 5'
      stroke={stroke}
      strokeWidth={2}
      strokeLinecap='round'
    />
  </Svg>
);

export default React.memo(AccountIcon);
