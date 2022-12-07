import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions, StyleSheet, Text } from 'react-native';
import { themeStyles } from '../utils/themeStyles';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

interface Props {
  iconName: string;
  iconSize?: number;
  iconColor?: string;
  title: string;
}

const MACategoryCard = ({
  iconName,
  iconSize = 35,
  iconColor = themeStyles.white,
  title,
}: Props) => {
  return (
    <TouchableWithoutFeedback style={styles.wrapper}>
      <LinearGradient
        colors={[themeStyles.darkBlue, themeStyles.lightBlue]}
        style={styles.container}
        start={{ x: 0.1, y: 0.9 }}
      >
        <Ionicons name={iconName} size={iconSize} color={iconColor} style={styles.icons} />
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  container: {
    height: Dimensions.get('screen').height / 8,
    width: Dimensions.get('screen').width / 5,
    minHeight: 80,
    minWidth: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    opacity: 0.9,
    borderWidth: 0.5,
    borderColor: themeStyles.lightBlue,
    alignContent: 'center',
  },
  icons: {},
  title: {
    fontSize: 12,
    flexWrap: 'wrap',
    marginTop: 5,
    color: themeStyles.white,
    fontWeight: '600',
  },
});

export default MACategoryCard;
