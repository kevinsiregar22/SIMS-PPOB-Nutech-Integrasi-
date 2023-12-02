import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/Colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: COLORS.white,
  },
});
