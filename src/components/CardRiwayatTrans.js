import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../utils/Colors';

const CardRiwayatTrans = ({nominal, tipeService, tanggalJam}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.nominalText}>{nominal}</Text>
        <Text style={styles.tipeServiceText}>{tipeService}</Text>
      </View>
      <Text style={styles.tanggalJamText}>{tanggalJam}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.gray2,
    borderRadius: 6,
    // height: 80,
    padding: 10,
    marginBottom: 12,
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  nominalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.red,
  },
  tipeServiceText: {
    fontSize: 12,
    color: COLORS.black2,
  },
  tanggalJamText: {
    fontSize: 12,
    color: COLORS.gray2,
    paddingTop: 8,
  },
});

export default CardRiwayatTrans;
