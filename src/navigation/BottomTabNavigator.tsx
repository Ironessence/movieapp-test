import React from 'react';
import { ScreenRoutes } from '../constants/ScreenRoutes';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import Home from '../screens/Home/Home';
import Favorites from '../screens/Favorites/Favorites';
import Search from '../screens/Search/Search';
import Account from '../screens/Account/Account';
import Settings from '../screens/Settings/Settings';
import { themeStyles } from '../utils/themeStyles';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenRoutes.Home}
      screenOptions={({ route }) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let routeName = route.name;

          if (routeName === ScreenRoutes.Home) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (routeName === ScreenRoutes.Favorites) {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (routeName === ScreenRoutes.Search) {
            iconName = focused ? 'search' : 'search-outline';
          } else if (routeName === ScreenRoutes.Account) {
            iconName = focused ? 'person' : 'person-outline';
          } else if (routeName === ScreenRoutes.Settings) {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: themeStyles.accent,
        tabBarStyle: {
          paddingVertical: Platform.OS === 'ios' ? 10 : 2,
          backgroundColor: themeStyles.blue,
        },
        tabBarHideOnKeyboard: true,
      })}
    >
      <Tab.Screen name={ScreenRoutes.Home} component={Home} options={{ headerShown: false }} />
      <Tab.Screen name={ScreenRoutes.Favorites} component={Favorites} />
      <Tab.Screen name={ScreenRoutes.Search} component={Search} />
      <Tab.Screen name={ScreenRoutes.Account} component={Account} />
      <Tab.Screen name={ScreenRoutes.Settings} component={Settings} />
    </Tab.Navigator>
  );
};

export default Main;
