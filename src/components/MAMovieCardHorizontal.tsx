import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { sharedStyles } from '../utils/sharedStyles';
import { themeStyles } from '../utils/themeStyles';
import { basePosterUrl } from '../utils/utils';

interface Props {
  poster: string;
  title?: string;
  rating?: number;
}

const MAMovieCardHorizontal = ({ poster, title, rating }: Props) => {
  const posterUrl = useMemo(() => basePosterUrl + poster, [poster]);
  return (
    <TouchableHighlight style={styles.container}>
      <View>
        <Image source={{ uri: posterUrl }} style={styles.poster} />

        {title && (
          <Text style={title.length < 15 ? styles.title : [styles.title, styles.longTitle]}>
            {title}
          </Text>
        )}
        {rating && (
          <View style={styles.ratingContainer}>
            <Ionicons name={'star'} size={14} color={themeStyles.black} />
            <Text style={styles.rating}>{rating}</Text>
          </View>
        )}
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginHorizontal: 6,
  },
  poster: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
    resizeMode: 'cover',
  },
  title: {
    ...sharedStyles.title,
    position: 'absolute',
    zIndex: 2,
    fontSize: 16,
    left: 12,
    bottom: 12,
    fontWeight: '800',
    letterSpacing: 0.5,
    textShadowColor: themeStyles.black,
    textShadowRadius: 5,
    maxWidth: '100%',
  },
  ratingContainer: {
    borderRadius: 10,
    paddingVertical: 2,
    backgroundColor: themeStyles.darkYellow,
    position: 'absolute',
    right: 12,
    bottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  rating: {
    ...sharedStyles.subtitle,
    color: themeStyles.black,
    marginLeft: 3,
    fontWeight: '800',
  },
  longTitle: {
    bottom: 12,
    width: '60%',
  },
});

export default MAMovieCardHorizontal;
