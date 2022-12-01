import React, { useMemo } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { sharedStyles } from '../utils/sharedStyles';
import { basePosterUrl } from '../utils/utils';

interface Props {
  poster: string;
  title: string;
  rating: number;
}

const MAMovieCardHorizontal = ({ poster, title, rating }: Props) => {
  const posterUrl = useMemo(() => basePosterUrl + poster, [poster]);
  return (
    <View style={styles.container}>
      <Image source={{ uri: posterUrl }} style={styles.poster} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    borderRadius: 10,
  },
  poster: {
    height: '100%',
    width: '100%',
  },
  title: {
    ...sharedStyles.title,
  },
  ratingContainer: {
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 2,
    backgroundColor: 'yellow',
  },
  rating: {
    ...sharedStyles.subtitle,
  },
});

export default MAMovieCardHorizontal;
