import React from 'react';

import Home from '../../pages/Home';
import Details from '../../pages/Details';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/Feather';

const BottomTab = createMaterialBottomTabNavigator();

const BottomNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator
      sceneAnimationEnabled
      initialRouteName="Home"
      backBehavior="initialRoute">
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: 'home',
        }}
      />
      <BottomTab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarIcon: () => <Icons name="github" size={23} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigator;
