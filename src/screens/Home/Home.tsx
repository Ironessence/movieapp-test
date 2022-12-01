import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeStyles } from '../../utils/themeStyles';
//@ts-ignore

import { sharedStyles } from '../../utils/sharedStyles';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
//@ts-ignore
import { API_KEY } from '@env';
import { PopularMovie } from '../../utils/Models';
import { FlatList } from 'react-native-gesture-handler';
import MAMovieCardHorizontal from '../../components/MAMovieCardHorizontal';

const Home = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [popularMovies, setPopularMovies] = useState<PopularMovie[]>();

  //API

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => setPopularMovies(res.data.results))
      .catch((e) => {
        //TODO: Add Toast here!
        console.log(e);
      });
  }, []);

  return (
    <SafeAreaView style={styles.root}>
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
            colors={[themeStyles.blue, themeStyles.purple]}
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

        <View style={styles.popularContainer}>
          <Text style={styles.popularTitle}>Most Popular</Text>
        </View>

        <View style={styles.popularMoviesContainer}>
          {/* TODO: Fix display, replace Flatlist with Carousel */}
          {popularMovies && (
            <FlatList
              data={popularMovies}
              renderItem={({ item }) => (
                <MAMovieCardHorizontal
                  poster={item.poster_path}
                  title={item.title}
                  rating={item.vote_average}
                />
              )}
            />
          )}
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
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
    marginBottom: 24,
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
  },
  searchInputIcon: {
    position: 'absolute',
    top: 9,
    marginLeft: 5,
  },
  popularContainer: {
    paddingHorizontal: 48,
  },
  popularTitle: {
    ...sharedStyles.title,
    fontSize: 24,
    letterSpacing: 0.3,
  },
  popularMoviesContainer: {},
});

export default Home;
