import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Authentication from '../pages/Authentication';

const Stack = createStackNavigator();

const StackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={Authentication} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
