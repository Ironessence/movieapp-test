import React from 'react';
import { StyleSheet, View } from 'react-native';
import { themeStyles } from '../utils/themeStyles';

interface Props {
  currentActive?: number;
  totalDots: number;
}

const MASliderDots = ({ currentActive, totalDots }: Props) => {
  const renderDot = (index: number) => {
    return (
      <View
        key={index}
        style={[styles.dot, currentActive === index ? styles.activeDot : undefined]}
      />
    );
  };

  return (
    <View style={styles.dotsContainer}>
      {[...Array(totalDots)].map((dots, index) => renderDot(index))}
    </View>
  );
};

const styles = StyleSheet.create({
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: themeStyles.blueInactiveDot,
    borderRadius: 20,
    marginHorizontal: 3,
  },
  activeDot: {
    width: 10,
    height: 10,
    backgroundColor: themeStyles.blueActiveDot,
  },
});

export default MASliderDots;
