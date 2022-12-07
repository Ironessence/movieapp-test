import React from 'react';
import { StyleSheet, View } from 'react-native';
import MACategoryCard from '../../../components/MACategoryCard';

const GenresSection = () => {
  return (
    <View style={styles.genresContainer}>
      <MACategoryCard iconName={'pricetags-outline'} title={'Genres'} />
      <MACategoryCard iconName={'tv-outline'} title={'TV Series'} />
      <MACategoryCard iconName={'videocam-outline'} title={'Movies'} />
      <MACategoryCard iconName={'eye-outline'} title={'In Theatre'} />
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
