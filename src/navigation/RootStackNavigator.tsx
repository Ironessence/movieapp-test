import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home/Home';
import MovieDetails from '../screens/Home/screens/MovieDetails';
import { ScreenRoutes } from '../utils/ScreenRoutes';
import Main from './BottomTabNavigator';

const RootStackNavigator = () => {
  const RootStack = createStackNavigator();

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={ScreenRoutes.Main} component={Main} />
      <RootStack.Screen name={ScreenRoutes.Home} component={Home} />
      <RootStack.Screen name={ScreenRoutes.MovieDetails} component={MovieDetails} />
    </RootStack.Navigator>
  );
};

export default RootStackNavigator;
