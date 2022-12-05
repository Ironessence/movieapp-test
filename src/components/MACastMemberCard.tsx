import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { MovieCast } from '../utils/Models';
import { themeStyles } from '../utils/themeStyles';

import { basePosterUrl } from '../utils/utils';

const MACastMemberCard = ({ actor }: MovieCast) => {
  return (
    <View style={styles.container}>
      <Image
        source={
          actor.profile_path
            ? { uri: basePosterUrl + actor.profile_path }
            : require('../assets/images/unknownPerson.jpg')
        }
        style={styles.image}
      />
      <Text style={styles.name}>{actor.name}</Text>
      <Text style={styles.character}>{actor.character}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 55,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 15,
    elevation: 5,
    shadowColor: themeStyles.black,
    shadowRadius: 5,
    marginBottom: 2,
  },
  name: {
    fontSize: 14,
    color: themeStyles.white,
    fontWeight: '600',
    textShadowColor: themeStyles.black,
    textShadowRadius: 3,
    textAlign: 'center',
  },
  character: {
    fontSize: 13,
    color: themeStyles.gray,
    fontWeight: '400',
    opacity: 0.8,
    textAlign: 'center',
  },
});

export default MACastMemberCard;
