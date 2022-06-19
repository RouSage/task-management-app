import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import TabBar from './TabBar';
import { RootStackParamList, Routes } from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name={Routes.TabBar} component={TabBar} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
