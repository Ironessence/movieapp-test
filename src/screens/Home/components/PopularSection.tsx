import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MAMovieCardHorizontal from '../../../components/MAMovieCardHorizontal';
import MASliderDots from '../../../components/MASliderDots';
import { Movie } from '../../../utils/Models';
import { sharedStyles } from '../../../utils/sharedStyles';

interface Props {
  popularMovies?: Movie[];
  popularCarouselRef: any;
  handleChangePopularCarouselItem(index: number): void;
  currentPopularSlide?: number;
  onPressMovie: (movie: Movie) => void;
}

const PopularSection = ({
  popularMovies,
  popularCarouselRef,
  handleChangePopularCarouselItem,
  currentPopularSlide,
  onPressMovie,
}: Props) => {
  return (
    <>
      <View style={styles.popularContainer}>
        <Text style={styles.popularTitle}>Most Popular</Text>
      </View>

      <View style={styles.popularMoviesContainer}>
        {popularMovies?.length && (
          <Carousel
            ref={popularCarouselRef}
            data={popularMovies}
            renderItem={({ item }: { item: Movie }) => (
              <MAMovieCardHorizontal
                poster={item.backdrop_path ? item.backdrop_path : item.poster_path}
                title={item.title}
                rating={item.vote_average}
                onPressMovie={() => onPressMovie(item)}
              />
            )}
            windowSize={Dimensions.get('screen').width}
            sliderWidth={Dimensions.get('screen').width}
            itemWidth={Dimensions.get('screen').width * 0.7}
            enableMomentum={true}
            onSnapToItem={handleChangePopularCarouselItem}
          />
        )}

        {popularMovies && popularMovies?.length > 1 && (
          <View style={styles.carouselDotsWrapper}>
            <MASliderDots currentActive={currentPopularSlide} totalDots={popularMovies?.length} />
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  popularContainer: {
    paddingHorizontal: 48,
  },
  popularTitle: {
    ...sharedStyles.title,
    fontSize: 24,
    letterSpacing: 0.3,
    marginBottom: 15,
  },
  popularMoviesContainer: {},
  carouselDotsWrapper: {
    marginTop: 10,
  },
});

export default PopularSection;
