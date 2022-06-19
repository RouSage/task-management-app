import NotesScreen from '@modules/notes/NotesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList, Routes } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const NotesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name={Routes.Notes} component={NotesScreen} />
  </Stack.Navigator>
);

export default NotesStack;
