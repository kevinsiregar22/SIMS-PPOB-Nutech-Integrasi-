import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import {COLORS} from './utils/Colors';
import RootNavigator from './routers';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default App;
