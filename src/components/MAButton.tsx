import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { themeStyles } from '../utils/themeStyles';

interface Props {
  style?: StyleProp<ViewStyle>;
  title: string;
  onPress: () => void;
  disabled?: boolean;
  titleStyle?: StyleProp<TextStyle>;
  titleColor?: string;
}

const MAButton = ({
  style,
  title,
  onPress,
  disabled = false,
  titleStyle,
  titleColor = themeStyles.white,
}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]} disabled={disabled}>
      <Text style={[styles.title, titleStyle, { color: titleColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: themeStyles.accent,
    width: '60%',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 15,
    elevation: 5,
    alignSelf: 'center',
    shadowColor: themeStyles.black,
    shadowRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default MAButton;
