import React from 'react';
import { StyleSheet, View } from 'react-native';
import MACategoryCard from '../../../components/MACategoryCard';

const GenresSection = () => {
  return (
    <View style={styles.genresContainer}>
      <MACategoryCard iconName={'pricetags-outline'} />
      <MACategoryCard iconName={'tv-outline'} />
      <MACategoryCard iconName={'videocam-outline'} />
      <MACategoryCard iconName={'eye-outline'} />
    </View>
  );
};

const styles = StyleSheet.create({
  genresContainer: {
    flexDirection: 'row',
    marginVertical: 14,
    alignSelf: 'center',
  },
});

export default GenresSection;
