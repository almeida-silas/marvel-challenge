import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Characters from '../pages/Characters';
import Comics from '../pages/Comics';
import Series from '../pages/Series';
import Stories from '../pages/Stories';
import Events from '../pages/Creators';
import Creators from '../pages/Creators';
import DetailsComics from '../pages/Comics/DetailsComics';
import DetailsSeries from '../pages/Series/DetailsSeries';
import DetailsEvents from '../pages/Events/DetailsEvents';
import DetailsStories from '../pages/Stories/DetailsStories';
import DetailsCharacter from '../pages/Characters/DetailsCharacter';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Characters" component={Characters} />
      <Stack.Screen name="DetailsCharacter" component={DetailsCharacter} />

      <Stack.Screen name="Comics" component={Comics} />
      <Stack.Screen name="DetailsComics" component={DetailsComics} />

      <Stack.Screen name="Series" component={Series} />
      <Stack.Screen name="DetailsSeries" component={DetailsSeries} />

      <Stack.Screen name="Stories" component={Stories} />
      <Stack.Screen name="DetailsStories" component={DetailsStories} />

      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="DetailsEvents" component={DetailsEvents} />

      <Stack.Screen name="Creators" component={Creators} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
