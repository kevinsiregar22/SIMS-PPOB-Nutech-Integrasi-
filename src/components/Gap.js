import React from 'react';
import {View} from 'react-native';

const Gap = ({width, height}) => {
  return <View style={{width: width || 0, height: height || 0}} />;
};

export default Gap;
