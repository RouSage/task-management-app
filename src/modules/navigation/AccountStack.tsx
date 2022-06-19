import AccountScreen from '@modules/account/AccountScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList, Routes } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AccountStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Account} component={AccountScreen} />
  </Stack.Navigator>
);

export default AccountStack;
