import React, { useRef, useCallback } from 'react';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { MovieProvider } from '../context/movieContext';
import { LinkingConfig } from './LinkingConfig';

const AppRouting = () => {
  const navigationRef = useRef<NavigationContainerRef>(null);
  const routeNameRef = React.useRef<any>();

  const handleNavigationReady = useCallback(() => {
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
  }, []);

  const handleNavigationStateChange = useCallback(async () => {
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    if (routeNameRef?.current) {
      routeNameRef.current = currentRouteName;
    }
  }, []);

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={handleNavigationReady}
      onStateChange={handleNavigationStateChange}
    >
      <MovieProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <RootStackNavigator />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </MovieProvider>
    </NavigationContainer>
  );
};

export default AppRouting;
