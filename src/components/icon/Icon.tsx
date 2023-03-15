import IconBus from 'assets/icon_bus.svg';
import IconFerry from 'assets/icon_ferry.svg';
import IconLightRail from 'assets/icon_lightRail.svg';
import IconPrivateCoach from 'assets/icon_privateCoach.svg';
// import IconSchoolBus from 'assets/icon_schoolBus.svg';
import IconTrain from 'assets/icon_train.svg';
import React from 'react';

import {IconProps} from './Icon.types';

const Icon = ({mode}: IconProps) => {
  switch (mode) {
    case 1:
      return <IconTrain width={18} height={18} />;
    case 4:
      return <IconLightRail width={18} height={18} />;
    case 5:
      return <IconBus width={18} height={18} />;
    case 7:
      return <IconPrivateCoach width={18} height={18} />;
    case 9:
      return <IconFerry width={18} height={18} />;
    // case 11:
    //   return <IconSchoolBus width={18} height={18} />;

    default:
      return <></>;
  }
};

export default Icon;
