// NumberFormatUtils.js
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import NumberFormat from 'react-number-format';

const NumberFormatUtils = ({value, isBalanceVisible, prefix = 'Rp. '}) => {
  return (
    <NumberFormat
      value={value}
      displayType={'text'}
      thousandSeparator={true}
      prefix={isBalanceVisible ? prefix : ''}
      renderText={formattedValue => (
        <Text style={styles.saldoRp}>{formattedValue}</Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  saldoRp: {
    color: 'white',
    fontSize: 26,
    fontWeight: '600',
    paddingVertical: 14,
  },
});

export default NumberFormatUtils;
