import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeStyles } from '../../utils/themeStyles';
import { sharedStyles } from '../../utils/sharedStyles';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
//@ts-ignore
import { API_KEY } from '@env';
import { PopularMovie } from '../../utils/Models';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import PopularSection from './components/PopularSection';
import GenresSection from './components/GenresSection';
import UpcomingSection from './components/UpcomingSection';

import { ScreenRoutes } from '../../utils/ScreenRoutes';
import { useNavigation } from '@react-navigation/native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import SelectedMovieSheet from './components/SelectedMovieSheet';
import CustomSheetBg from './components/CustomSheetBg';
import CustomBackdropBg from './components/CustomBackdropBg';
import { useMovies } from '../../context/movieContext';

const Home = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [popularMovies, setPopularMovies] = useState<PopularMovie[]>();
  const [upcomingMovies, setUpcomingMovies] = useState<PopularMovie[]>();
  const [currentPopularSlide, setCurrentPopularSlide] = useState<number>();
  const [currentUpcomingSlide, setCurrentUpcomingSlide] = useState<number>();
  const { selectedMovie, setSelectedMovie, bottomSheetRef } = useMovies();

  const popularCarouselRef = useRef<Carousel<PopularMovie>>(null);
  const upcomingCarouselRef = useRef<Carousel<PopularMovie>>(null);

  //API

  const getPopularMovies = useCallback(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => setPopularMovies(res.data.results.slice(1, 20)))
      .catch(() => {});
  }, []);

  const getUpcomingMovies = useCallback(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => setUpcomingMovies(res.data.results.slice(1, 10)))
      .catch(() => {});
  }, []);

  useEffect(() => {
    getPopularMovies();
    getUpcomingMovies();
  }, [getPopularMovies, getUpcomingMovies]);

  const onPressMovieCard = useCallback(
    (movie: PopularMovie) => {
      setSelectedMovie(movie);
    },
    [setSelectedMovie],
  );

  const handleChangePopularCarouselItem = useCallback((index: number) => {
    setCurrentPopularSlide(index);
  }, []);

  const handleChangeUpcomingCarouselItem = useCallback((index: number) => {
    setCurrentUpcomingSlide(index);
  }, []);

  const snapPoints = useMemo(() => ['55%', '95%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  useEffect(() => {
    if (selectedMovie) {
      bottomSheetRef.current?.present();
    }
  }, [bottomSheetRef, selectedMovie]);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={[themeStyles.blue, themeStyles.purple]}
          style={styles.container}
          start={{ x: 0.1, y: 0.9 }}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.userGreeting}>Hello, Testuser!</Text>
            <Ionicons name={'notifications'} size={24} color={themeStyles.white} />
          </View>

          <View style={styles.searchContainer}>
            <LinearGradient
              colors={[themeStyles.darkBlue, themeStyles.lightBlue]}
              style={styles.inputGradient}
              start={{ x: 0.45, y: 0.1 }}
            >
              <Ionicons
                name={'search'}
                size={24}
                color={themeStyles.gray}
                style={styles.searchInputIcon}
              />
              <TextInput
                style={styles.search}
                value={searchInput}
                placeholder={'Search'}
                onChange={(input: string) => setSearchInput(input)}
                placeholderTextColor={themeStyles.gray}
              />
            </LinearGradient>
          </View>

          {popularMovies ? (
            <PopularSection
              popularMovies={popularMovies}
              popularCarouselRef={popularCarouselRef}
              handleChangePopularCarouselItem={handleChangePopularCarouselItem}
              currentPopularSlide={currentPopularSlide}
              onPressMovie={onPressMovieCard}
            />
          ) : (
            <ActivityIndicator color={themeStyles.blue} />
          )}
          <GenresSection />
          {upcomingMovies ? (
            <UpcomingSection
              upcomingMovies={upcomingMovies}
              upcomingCarouselRef={upcomingCarouselRef}
              handleChangeUpcomingCarouselItem={handleChangeUpcomingCarouselItem}
              currentUpcomingSlide={currentUpcomingSlide}
            />
          ) : (
            <ActivityIndicator color={themeStyles.blue} />
          )}
          <BottomSheetModal
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            backgroundComponent={CustomSheetBg}
            backgroundStyle={styles.bottomSheet}
            backdropComponent={CustomBackdropBg}
          >
            {selectedMovie && <SelectedMovieSheet selectedMovie={selectedMovie} />}
          </BottomSheetModal>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollView: {
    paddingBottom: 40,
  },
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 24,
  },
  userGreeting: {
    ...sharedStyles.subtitle,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  searchContainer: {
    paddingHorizontal: 48,
    justifyContent: 'center',
    marginBottom: 12,
    opacity: 1,
  },
  search: {
    width: '100%',
    borderRadius: 10,
    paddingVertical: 7,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: themeStyles.gray,
    zIndex: 1,
    paddingLeft: 32,
    fontSize: 18,
    color: themeStyles.white,
  },
  inputGradient: {
    zIndex: 2,
    borderRadius: 10,
    flexDirection: 'row',
    opacity: 0.5,
  },
  searchInputIcon: {
    position: 'absolute',
    top: 9,
    marginLeft: 5,
  },
  extraMarginBottom: {
    marginBottom: 40,
  },
  bottomSheet: {
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
  },
});

export default Home;
