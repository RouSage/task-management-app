import { Routes } from '@modules/navigation/types';
import { Box } from 'native-base';

import AccountIcon from './AccountIcon';
import CalendarIcon from './CalendarIcon';
import HomeIcon from './HomeIcon';
import NotebookIcon from './NotebookIcon';

const ACTIVE_OPACITY = 1;
const INACTIVE_OPACITY = 0.6;

interface Props {
  routeName: string;
  focused: boolean;
  color: string;
}

const TabBarIcon = ({ routeName, color, focused }: Props) => {
  const Icon = getIcon(routeName as Routes);
  const opacity = focused ? ACTIVE_OPACITY : INACTIVE_OPACITY;

  if (!Icon) return null;

  return (
    <Box opacity={opacity}>
      <Icon stroke={color} />
    </Box>
  );
};

export default TabBarIcon;

const getIcon = (routeName: Routes) => {
  switch (routeName) {
    case Routes.HomeStack:
      return HomeIcon;
    case Routes.ScheduleStack:
      return CalendarIcon;
    case Routes.NotesStack:
      return NotebookIcon;
    case Routes.AccountStack:
      return AccountIcon;

    default:
      return null;
  }
};
