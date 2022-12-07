import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  StatusBar,
} from 'react-native';

import { themeStyles } from '../../utils/themeStyles';
import { sharedStyles } from '../../utils/sharedStyles';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
//@ts-ignore
import { API_KEY } from '@env';
import { Movie } from '../../utils/Models';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import PopularSection from './components/PopularSection';
import GenresSection from './components/GenresSection';
import UpcomingSection from './components/UpcomingSection';

import { BottomSheetModal } from '@gorhom/bottom-sheet';
import SelectedMovieSheet from './components/SelectedMovieSheet';
import CustomSheetBg from './components/CustomSheetBg';
import CustomBackdropBg from './components/CustomBackdropBg';
import { useMovies } from '../../context/movieContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MAButton from '../../components/MAButton';
import { useNavigation } from '@react-navigation/native';
import { ScreenRoutes } from '../../utils/ScreenRoutes';

const Home = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [popularMovies, setPopularMovies] = useState<Movie[]>();
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>();
  const [currentPopularSlide, setCurrentPopularSlide] = useState<number>();
  const [currentUpcomingSlide, setCurrentUpcomingSlide] = useState<number>();
  const { selectedMovie, setSelectedMovie, bottomSheetRef } = useMovies();

  const popularCarouselRef = useRef<Carousel<Movie>>(null);
  const upcomingCarouselRef = useRef<Carousel<Movie>>(null);
  const insets = useSafeAreaInsets();
  const androidTopStatusBar = StatusBar.currentHeight;
  const iosTopStatusBar = insets.top;
  const navigation = useNavigation();

  //API

  const getPopularMovies = useCallback(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => setPopularMovies(res.data.results.slice(1, 10)))
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
    (movie: Movie) => {
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

  const onPressMovieDetails = useCallback(() => {
    bottomSheetRef.current?.close();
    navigation.navigate(ScreenRoutes.Account);
  }, [bottomSheetRef, navigation]);

  useEffect(() => {
    if (selectedMovie) {
      bottomSheetRef.current?.present();
    }
  }, [bottomSheetRef, selectedMovie]);

  return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          colors={[themeStyles.blue, themeStyles.purple]}
          style={styles.linearGradient}
          start={{ x: 0.1, y: 0.9 }}
        >
          <View
            style={[
              styles.headerContainer,
              { marginTop: Platform.OS === 'ios' ? iosTopStatusBar : androidTopStatusBar },
            ]}
          >
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
                onChangeText={(input: string) => setSearchInput(input)}
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
              onPressMovie={onPressMovieCard}
            />
          ) : (
            <ActivityIndicator color={themeStyles.blue} />
          )}

          <BottomSheetModal
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            backgroundComponent={CustomSheetBg}
            backgroundStyle={styles.bottomSheet}
            backdropComponent={CustomBackdropBg}
          >
            {selectedMovie && <SelectedMovieSheet onPressMovieDetails={onPressMovieDetails} />}
          </BottomSheetModal>
        </LinearGradient>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexGrow: 1,
  },
  linearGradient: {
    flex: 1,
    flexGrow: 1,
  },
  headerContainer: {
    paddingHorizontal: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 32,
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
  bottomSheet: {
    borderTopRightRadius: 45,
    borderTopLeftRadius: 45,
  },
});

export default Home;
