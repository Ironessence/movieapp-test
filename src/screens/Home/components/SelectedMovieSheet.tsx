import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React from 'react';
import { Text } from 'react-native';
import { Movie } from '../../../utils/Models';

interface Props {
  selectedMovie: Movie;
}

const SelectedMovieSheet = ({ selectedMovie }: Props) => {
  return (
    <BottomSheetScrollView>
      <Text style={{ fontSize: 50, textAlign: 'center' }}>{selectedMovie.original_title}</Text>
    </BottomSheetScrollView>
  );
};

export default SelectedMovieSheet;
