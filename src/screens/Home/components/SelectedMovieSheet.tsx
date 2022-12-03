import React from 'react';
import { Text, View } from 'react-native';
import { PopularMovie } from '../../../utils/Models';

interface Props {
  selectedMovie: PopularMovie;
}

const SelectedMovieSheet = ({ selectedMovie }: Props) => {
  return (
    <View>
      <Text style={{ fontSize: 50, textAlign: 'center' }}>{selectedMovie.original_title}</Text>
    </View>
  );
};

export default SelectedMovieSheet;
