import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MAMovieCardHorizontal from '../../../components/MAMovieCardHorizontal';
import MASliderDots from '../../../components/MASliderDots';
import { Movie } from '../../../utils/Models';
import { sharedStyles } from '../../../utils/sharedStyles';

interface Props {
  upcomingMovies?: Movie[];
  upcomingCarouselRef: any;
  handleChangeUpcomingCarouselItem(index: number): void;
  currentUpcomingSlide?: number;
  onPressMovie: (movie: Movie) => void;
}

const UpcomingSection = ({
  upcomingMovies,
  upcomingCarouselRef,
  handleChangeUpcomingCarouselItem,
  currentUpcomingSlide,
  onPressMovie,
}: Props) => {
  return (
    <View style={styles.root}>
      <View style={styles.popularContainer}>
        <Text style={styles.popularTitle}>Upcoming</Text>
      </View>

      <View style={styles.popularMoviesContainer}>
        {upcomingMovies?.length && (
          <Carousel
            ref={upcomingCarouselRef}
            data={upcomingMovies}
            renderItem={({ item }: { item: Movie }) => (
              <MAMovieCardHorizontal
                poster={item.poster_path}
                onPressMovie={() => onPressMovie(item)}
              />
            )}
            windowSize={Dimensions.get('screen').width}
            sliderWidth={Dimensions.get('screen').width}
            itemWidth={Dimensions.get('screen').width * 0.3}
            enableMomentum={true}
            onSnapToItem={handleChangeUpcomingCarouselItem}
          />
        )}

        {upcomingMovies && upcomingMovies?.length > 1 && (
          <View style={styles.carouselDotsWrapper}>
            <MASliderDots currentActive={currentUpcomingSlide} totalDots={upcomingMovies?.length} />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingBottom: 40,
  },
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

export default UpcomingSection;
