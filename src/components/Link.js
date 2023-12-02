import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Colors';

const Link = ({label, color, onPress}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text, {color: color || COLORS.gray2}]}>
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Link;
