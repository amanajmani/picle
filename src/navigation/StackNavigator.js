import React from 'react';

/* NAVIGATION */
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* COMPONENTS */
import Search from '../screens/search';
import Details from '../screens/details';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;
