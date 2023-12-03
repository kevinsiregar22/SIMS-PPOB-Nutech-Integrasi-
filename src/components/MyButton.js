import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Colors';

const MyButton = ({title, bgColor, onPress, disabled}) => {
  const buttonStyles = [
    styles.button,
    {backgroundColor: bgColor},
    bgColor ? null : styles.borderButton,
  ];

  const textStyles = [
    styles.buttonText,
    {color: bgColor ? COLORS.white : COLORS.red},
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '800',
  },
  borderButton: {
    borderWidth: 1,
    borderColor: COLORS.red,
  },
});
