import { Ionicons } from '@expo/vector-icons';
import React, { useCallback } from 'react';
import { ActivityIndicator, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useMovies } from '../../../context/movieContext';
import { themeStyles } from '../../../utils/themeStyles';
import { basePosterUrl } from '../../../utils/utils';

const CustomBackdropBg = () => {
  const { selectedMovie, setSelectedMovie, bottomSheetRef } = useMovies();

  const handleBottomSheetClose = useCallback(() => {
    bottomSheetRef?.current?.close();
    setSelectedMovie(null);
  }, [bottomSheetRef, setSelectedMovie]);

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity style={styles.backIcon} onPress={handleBottomSheetClose}>
        <Ionicons name={'arrow-back-outline'} size={35} color={themeStyles.white} />
      </TouchableOpacity>
      {selectedMovie ? (
        <Image source={{ uri: basePosterUrl + selectedMovie.poster_path }} style={styles.image} />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 35,
    height: 35,
    zIndex: 15,
  },
});

export default CustomBackdropBg;
