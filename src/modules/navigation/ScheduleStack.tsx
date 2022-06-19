import ScheduleScreen from '@modules/schedule/ScheduleScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList, Routes } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const ScheduleStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Schedule} component={ScheduleScreen} />
  </Stack.Navigator>
);

export default ScheduleStack;
