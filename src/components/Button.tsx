import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
  children: React.ReactNode;
  onPress: () => void;
  buttonStyle?: any;
  textStyle?: any;
  titleColor?: string;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  children,
  onPress,
  buttonStyle,
  textStyle,
  titleColor,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button">
      <Text style={textStyle} onPress={disabled ? undefined : onPress} disabled={disabled}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
