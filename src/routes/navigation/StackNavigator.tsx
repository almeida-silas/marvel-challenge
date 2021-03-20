import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './BottomNavigator';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
