import React from 'react';
import {Text} from 'react-native';
import {getIconColor} from 'shared/color';

import {ColoredNameProps} from './ColoredName.types';

const ColoredName = (props: ColoredNameProps) => {
  const {style, iconId, name} = props;
  return (
    <Text style={[style, {backgroundColor: getIconColor(iconId)}]}>{name}</Text>
  );
};

export default ColoredName;
