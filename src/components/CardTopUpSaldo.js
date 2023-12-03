import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../utils/Colors';

const CardTopUpSaldo = ({price, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textPrice}>{price}</Text>
    </TouchableOpacity>
  );
};

export default CardTopUpSaldo;

const styles = StyleSheet.create({
  container: {
    height: 45,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.gray2,
  },
  textPrice: {
    fontSize: 16,
    textAlign: 'center',
  },
});
