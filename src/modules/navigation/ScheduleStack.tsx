import ScheduleScreen from '@modules/schedule/ScheduleScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from '@theme';

import { RootStackParamList, Routes } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const ScheduleStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={Routes.Schedule}
      component={ScheduleScreen}
      options={{
        headerShadowVisible: false,
        headerTitleStyle: {
          color: theme.colors.black['50'],
          fontFamily: 'Poppins-Bold',
          fontSize: 18,
          fontWeight: 'bold',
        },
      }}
    />
  </Stack.Navigator>
);

export default ScheduleStack;
