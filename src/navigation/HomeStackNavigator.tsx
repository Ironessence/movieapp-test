import { PathConfig } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MovieDetails from '../screens/Home/screens/MovieDetails';
import Popular from '../screens/Popular/Popular';
import Upcoming from '../screens/Upcoming/Upcoming';
import { ScreenRoutes } from '../utils/ScreenRoutes';

const HomeStackNavigator = () => {
  const HomeStack = createStackNavigator();

  <HomeStack.Navigator>
    <HomeStack.Screen name={ScreenRoutes.Popular} component={Popular} />
    <HomeStack.Screen name={ScreenRoutes.Upcoming} component={Upcoming} />
  </HomeStack.Navigator>;
};

export const HomeStackPathConfig: PathConfig = {
  path: [ScreenRoutes.HomeStack],
  screens: {
    [ScreenRoutes.Popular]: ScreenRoutes.Popular,
    [ScreenRoutes.Upcoming]: [ScreenRoutes.Upcoming],
  },
};

export default HomeStackNavigator;
