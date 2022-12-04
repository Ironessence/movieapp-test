import { Ionicons } from '@expo/vector-icons';
import { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MAChip from '../../../components/MAChip';
import { useMovies } from '../../../context/movieContext';
import { themeStyles } from '../../../utils/themeStyles';

const SelectedMovieSheet = () => {
  const { selectedMovie } = useMovies();

  return (
    <BottomSheetScrollView>
      <Text style={styles.title}>{selectedMovie?.original_title}</Text>
      <View style={styles.wrapper}>
        <View style={styles.chipsAndIconsContainer}>
          {selectedMovie && (
            <View style={styles.chipsContainer}>
              <MAChip value={'Action'} />
              <MAChip value={selectedMovie?.adult ? '18+' : '12+'} />
              <MAChip
                value={selectedMovie?.vote_average}
                icon={{ name: 'star', size: 18, color: themeStyles.black }}
                color={themeStyles.darkYellow}
                textColor={themeStyles.black}
              />
            </View>
          )}
          <View style={styles.iconsContainer}>
            <Ionicons
              name={'arrow-redo-outline'}
              color={themeStyles.white}
              size={24}
              style={styles.icon}
            />
            <Ionicons
              name={'heart-outline'}
              color={themeStyles.white}
              size={24}
              style={styles.icon}
            />
          </View>
        </View>
      </View>
    </BottomSheetScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: themeStyles.white,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 5,
    letterSpacing: 0.5,
  },
  wrapper: {
    paddingHorizontal: 52,
  },
  chipsAndIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chipsContainer: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 3,
  },
});

export default SelectedMovieSheet;
