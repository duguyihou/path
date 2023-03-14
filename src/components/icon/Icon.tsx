import React from 'react';
import {Text, View} from 'react-native';

import {IconProps} from './Icon.types';

const Icon = ({mode}: IconProps) => {
  return (
    <View>
      <Text>{mode}</Text>
    </View>
  );
};

export default Icon;
