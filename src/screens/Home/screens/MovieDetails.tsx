import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationParamList } from '../../../navigation/NavigationParamList';
import { ScreenRoutes } from '../../../utils/ScreenRoutes';
import { basePosterUrl } from '../../../utils/utils';

const MovieDetails = ({
  route,
}: StackScreenProps<NavigationParamList, ScreenRoutes.MovieDetails>) => {
  const { backdrop_path } = route.params.selectedMovie;
  return (
    <View style={styles.container}>
      <Image source={{ uri: basePosterUrl + backdrop_path }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default MovieDetails;
