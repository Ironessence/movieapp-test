import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React from 'react';
import { Text } from 'react-native';
import { PopularMovie } from '../../../utils/Models';

interface Props {
  selectedMovie: PopularMovie;
}

const SelectedMovieSheet = ({ selectedMovie }: Props) => {
  return (
    <BottomSheetScrollView>
      <Text style={{ fontSize: 50, textAlign: 'center' }}>{selectedMovie.original_title}</Text>
    </BottomSheetScrollView>
  );
};

export default SelectedMovieSheet;
