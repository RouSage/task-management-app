import HomeScreen from '@modules/home/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList, Routes } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Home} component={HomeScreen} />
  </Stack.Navigator>
);

export default HomeStack;
