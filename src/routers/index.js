import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './StackScreen';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default RootNavigator;
