import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const AppRouting = () => {
  return (
    <NavigationContainer>
      <BottomSheetModalProvider>
        <RootStackNavigator />
      </BottomSheetModalProvider>
    </NavigationContainer>
  );
};

export default AppRouting;
