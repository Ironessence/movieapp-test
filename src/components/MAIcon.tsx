import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { themeStyles } from '../utils/themeStyles';

interface Props {
  name: React.ComponentProps<typeof Ionicons>['name'];
  size?: number;
  color?: string;
  iconStyle?: StyleProp<ViewStyle>;
}

const MAIcon = ({ name, size = 24, color = themeStyles.white, iconStyle }: Props) => {
  return <Ionicons name={name} size={size} color={color} style={iconStyle} />;
};

export default MAIcon;
