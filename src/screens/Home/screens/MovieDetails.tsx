import { StackScreenProps } from '@react-navigation/stack';
import { View, Image, StyleSheet } from 'react-native';
import { NavigationParamList } from '../../../navigation/NavigationParamList';
import { ScreenRoutes } from '../../../utils/ScreenRoutes';
import { basePosterUrl } from '../../../utils/utils';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import SelectedMovieSheet from '../components/SelectedMovieSheet';
import { useRef, useMemo, useCallback, useEffect } from 'react';
import React from 'react';
import CustomSheetBg from '../components/CustomSheetBg';
import { Ionicons } from '@expo/vector-icons';
import { themeStyles } from '../../../utils/themeStyles';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const MovieDetails = ({
  navigation,
  route,
}: StackScreenProps<NavigationParamList, ScreenRoutes.MovieDetails>) => {
  const { poster_path } = route?.params?.selectedMovie;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backIcon}>
        <Ionicons name={'chevron-back-circle-outline'} size={35} color={themeStyles.darkBlue} />
      </TouchableOpacity>
      {poster_path && <Image source={{ uri: basePosterUrl + poster_path }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
  backIcon: {
    position: 'absolute',
    zIndex: 15,
    top: 25,
    left: 25,
  },
});

export default MovieDetails;
