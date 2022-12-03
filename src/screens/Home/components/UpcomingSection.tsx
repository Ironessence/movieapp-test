import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MAMovieCardHorizontal from '../../../components/MAMovieCardHorizontal';
import MASliderDots from '../../../components/MASliderDots';
import { PopularMovie } from '../../../utils/Models';
import { sharedStyles } from '../../../utils/sharedStyles';

interface Props {
  upcomingMovies?: PopularMovie[];
  upcomingCarouselRef: any;
  handleChangeUpcomingCarouselItem(index: number): void;
  currentUpcomingSlide?: number;
}

const UpcomingSection = ({
  upcomingMovies,
  upcomingCarouselRef,
  handleChangeUpcomingCarouselItem,
  currentUpcomingSlide,
}: Props) => {
  return (
    <View style={styles.extraMarginBottom}>
      <View style={styles.popularContainer}>
        <Text style={styles.popularTitle}>Upcoming</Text>
      </View>

      <View style={styles.popularMoviesContainer}>
        {upcomingMovies?.length && (
          <Carousel
            ref={upcomingCarouselRef}
            data={upcomingMovies}
            renderItem={({ item }: { item: PopularMovie }) => (
              <MAMovieCardHorizontal poster={item.poster_path} />
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
  extraMarginBottom: {
    marginBottom: 40,
  },
});

export default UpcomingSection;
