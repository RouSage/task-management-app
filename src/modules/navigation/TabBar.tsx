import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from '@theme';

import AccountStack from './AccountStack';
import HomeStack from './HomeStack';
import NotesStack from './NotesStask';
import ScheduleStack from './ScheduleStack';
import TabBarIcon from './components/icons/TabBarIcon';
import { Routes } from './types';

const Tab = createBottomTabNavigator();

const TabBar = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: theme.colors.primary['50'],
      tabBarInactiveTintColor: theme.colors.primary['50'],
      tabBarShowLabel: false,
      tabBarIcon: ({ color, focused }) => (
        <TabBarIcon color={color} focused={focused} routeName={route.name} />
      ),
    })}>
    <Tab.Screen name={Routes.HomeStack} component={HomeStack} />
    <Tab.Screen name={Routes.ScheduleStack} component={ScheduleStack} />
    <Tab.Screen name={Routes.NotesStack} component={NotesStack} />
    <Tab.Screen name={Routes.AccountStack} component={AccountStack} />
  </Tab.Navigator>
);

export default TabBar;
