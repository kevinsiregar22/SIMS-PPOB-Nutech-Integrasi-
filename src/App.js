import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {COLORS} from './utils/Colors';

import RootNavigator from './routers';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RootNavigator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default App;
