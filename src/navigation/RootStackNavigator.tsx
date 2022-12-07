import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screens/Home/Home';
import { ScreenRoutes } from '../constants/ScreenRoutes';
import Main from './BottomTabNavigator';
import { StatusBar } from 'react-native';
import { themeStyles } from '../utils/themeStyles';
import MovieDetails from '../screens/Home/screens/MovieDetails';
import { NavigationParamList } from './NavigationParamList';

const RootStackNavigator = () => {
  const RootStack = createStackNavigator<NavigationParamList>();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={themeStyles.blue} />
      <RootStack.Navigator screenOptions={{ headerShown: false, presentation: 'modal' }}>
        <RootStack.Screen name={ScreenRoutes.Main} component={Main} />
        <RootStack.Screen name={ScreenRoutes.Home} component={Home} />
        <RootStack.Screen name={ScreenRoutes.MovieDetails} component={MovieDetails} />
      </RootStack.Navigator>
    </>
  );
};

export default RootStackNavigator;
