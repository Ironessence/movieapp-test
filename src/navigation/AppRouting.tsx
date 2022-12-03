import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from './RootStackNavigator';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const AppRouting = () => {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <RootStackNavigator />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default AppRouting;
