import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useMovies } from '../../../context/movieContext';
import { themeStyles } from '../../../utils/themeStyles';
import { basePosterUrl } from '../../../utils/utils';

const CustomBackdropBg = () => {
  const { selectedMovie, bottomSheetRef } = useMovies();

  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity style={styles.backIcon} onPress={() => bottomSheetRef?.current?.close()}>
        <Ionicons name={'chevron-back-circle-outline'} size={35} color={themeStyles.white} />
      </TouchableOpacity>
      <Image source={{ uri: basePosterUrl + selectedMovie.poster_path }} style={styles.image} />
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
