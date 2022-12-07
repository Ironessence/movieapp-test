import React, { useCallback, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BottomSheetScrollView, BottomSheetView } from '@gorhom/bottom-sheet';
import axios from 'axios';

import { StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native';
import MAChip from '../../../components/MAChip';
import { useMovies } from '../../../context/movieContext';
import { themeStyles } from '../../../utils/themeStyles';
//@ts-ignore
import { API_KEY } from '@env';

import { MovieCast, MovieDetails } from '../../../utils/Models';
import MACastMemberCard from '../../../components/MACastMemberCard';

import { FlatList } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import MAButton from '../../../components/MAButton';
import { ScreenRoutes } from '../../../constants/ScreenRoutes';

const SelectedMovieSheet = () => {
  const { selectedMovie } = useMovies();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [movieCast, setMovieCast] = useState<MovieCast[] | null>(null);
  const navigation = useNavigation<NavigationProp<any>>();

  const fetchMovieDetails = useCallback(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${selectedMovie?.id}?api_key=${API_KEY}&language=en-US`,
      )
      .then((res) => setMovieDetails(res.data))
      .catch((e) => console.log('fetchMovieDetails'));
  }, [selectedMovie?.id]);

  const fetchMovieCast = useCallback(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${selectedMovie?.id}/credits?api_key=${API_KEY}&language=en-US`,
      )
      .then((res) => setMovieCast(res.data.cast))
      .catch((e) => console.log('fetchMovieCast'));
  }, [selectedMovie?.id]);

  useFocusEffect(
    React.useCallback(() => {
      fetchMovieDetails();
      fetchMovieCast();
    }, [fetchMovieCast, fetchMovieDetails]),
  );

  const onPressMovieDetails = useCallback(() => {
    if (movieDetails) {
      navigation.navigate(ScreenRoutes.MovieDetails, { movieDetails });
    }
  }, [movieDetails, navigation]);

  const renderCastCard = useCallback(
    ({ item }: { item: MovieCast }) => <MACastMemberCard actor={item} />,
    [],
  );

  if (movieDetails === null) {
    return (
      <BottomSheetView>
        <ActivityIndicator />
      </BottomSheetView>
    );
  }

  return (
    <BottomSheetScrollView>
      <Text style={styles.title}>{movieDetails.title}</Text>
      <View style={styles.wrapper}>
        {/* CHIPS + ICONS */}
        <View style={styles.chipsAndIconsContainer}>
          <View style={styles.chipsContainer}>
            <MAChip value={movieDetails.genres[0].name} />
            <MAChip value={movieDetails.adult ? '18+' : '12+'} />
            <MAChip
              value={movieDetails.vote_average.toFixed(1)}
              icon={{ name: 'star', size: 18, color: themeStyles.black }}
              color={themeStyles.darkYellow}
              textColor={themeStyles.black}
            />
          </View>

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

        {/* DESCRIPTION */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{movieDetails.overview}</Text>
        </View>

        {/* MOVIE CAST */}
        <View style={styles.castContainer}>
          <FlatList
            data={movieCast}
            horizontal
            snapToInterval={Dimensions.get('screen').width * 0.9}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_item, index) => 'key-' + index}
            renderItem={renderCastCard}
          />
        </View>

        {/* BUTTON FULL MOVIE DETAILS */}
        <MAButton
          onPress={onPressMovieDetails}
          title={'See complete details'}
          style={styles.button}
        />
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
    paddingHorizontal: 25,
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
  descriptionContainer: {},
  description: {
    fontSize: 14,
    color: themeStyles.white,
    fontWeight: '500',
    letterSpacing: -0.3,
  },
  castContainer: {
    marginTop: 20,
  },
  button: {
    marginTop: 12,
  },
});

export default SelectedMovieSheet;
