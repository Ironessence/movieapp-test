import { BottomSheetBackgroundProps } from '@gorhom/bottom-sheet';

import React, { useMemo } from 'react';

import Animated, { interpolateColor, useAnimatedStyle } from 'react-native-reanimated';
import { themeStyles } from '../../../utils/themeStyles';

const CustomSheetBg: React.FC<BottomSheetBackgroundProps> = ({ style, animatedIndex }) => {
  //#region styles
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    // @ts-ignore
    backgroundColor: interpolateColor(
      animatedIndex.value,
      [0, 1],
      [themeStyles.blue, themeStyles.darkBlue],
    ),
  }));
  const containerStyle = useMemo(
    () => [style, containerAnimatedStyle],
    [style, containerAnimatedStyle],
  );
  //#endregion

  // render
  return <Animated.View pointerEvents="none" style={containerStyle} />;
};

export default CustomSheetBg;
