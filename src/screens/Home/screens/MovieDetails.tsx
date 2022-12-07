import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationParamList } from '../../../navigation/NavigationParamList';
import { ScreenRoutes } from '../../../constants/ScreenRoutes';

const MovieDetails = ({
  navigation,
  route,
}: StackScreenProps<NavigationParamList, ScreenRoutes.MovieDetails>) => {
  const movie = route?.params?.movieDetails;

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <View>
      <Text>THE MOVIE IS:</Text>
      <Text>{movie.title}</Text>
    </View>
  );
};

export default MovieDetails;
