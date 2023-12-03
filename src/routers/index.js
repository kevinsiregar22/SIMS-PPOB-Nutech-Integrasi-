import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './StackScreen';
import {navigationRef} from './navigate';

const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Router />
    </NavigationContainer>
  );
};

export default RootNavigator;
