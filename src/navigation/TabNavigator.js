import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../theme/theme';

import HomeStackNavigator from './StackNavigator';
import About from '../screens/about';

const Tab = createBottomTabNavigator();

const getScreenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    borderTopWidth: 0,
    backgroundColor: theme.palette.primary.main,
  },
};

const getTabOptions = iconName => ({
  tabBarIcon: () => (
    <Icon name={iconName} size={25} color={theme.palette.text.secondary} />
  ),
});

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={getScreenOptions}>
      <Tab.Screen
        options={() => getTabOptions('home-outline')}
        name="Home"
        component={HomeStackNavigator}
      />
      <Tab.Screen
        options={() => getTabOptions('information-circle-outline')}
        name="About"
        component={About}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
