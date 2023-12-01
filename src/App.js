import {View, Text, Image} from 'react-native';
import React from 'react';
import {HomeScreen} from './screens';
import {Images} from './assets/images';
import {Icons} from './assets/icons';

const App = () => {
  return (
    <View>
      <Text>App Screen </Text>
      <HomeScreen />
      <Image source={Images.Banner2} style={{width: 80, height: 80}} />
      <Image source={Icons.Game} style={{width: 80, height: 80}} />
    </View>
  );
};

export default App;
