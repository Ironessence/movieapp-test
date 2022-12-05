import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { themeStyles } from '../utils/themeStyles';

interface IconProps {
  color: string;
  size: number;
  name: string;
}

interface Props {
  color?: string;
  value: string | number;
  icon?: IconProps;
  textColor?: string;
}

const MAChip = ({ color, value, icon, textColor = themeStyles.white }: Props) => {
  return (
    <LinearGradient
      style={[
        styles.container,
        {
          backgroundColor: color,
          elevation: 6,
          shadowColor: themeStyles.black,
          shadowRadius: 6,
        },
      ]}
      colors={
        color ? [themeStyles.darkYellow, 'yellow'] : [themeStyles.darkBlue, themeStyles.lightBlue]
      }
      start={{ x: 0.45, y: 0.1 }}
    >
      {icon && (
        <Ionicons name={icon.name} color={icon.color} size={icon.size} style={styles.chipIcon} />
      )}
      <Text style={[styles.text, { color: textColor }]}>{value}</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 15,
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 14,
    color: themeStyles.white,
    fontWeight: '700',
    letterSpacing: 0.6,
    textAlign: 'center',
  },
  chipIcon: {
    marginRight: 5,
  },
});

export default MAChip;
