import {theme} from './theme';

export const getIconColor = (iconId: number) => {
  switch (iconId) {
    case 1:
    case 2:
    case 3:
    case 19:
      return theme.icon.trainsPrimary;
    case 13:
    case 20:
    case 21:
      return theme.icon.lightRailPrimary;
    case 4:
    case 5:
    case 6:
    case 14:
    case 15:
    case 16:
    case 9:
    case 17:
    case 8:
      return theme.icon.busesPrimary;
    case 7:
    case 22:
      return theme.icon.busesTertiary;
    case 10:
    case 11:
    case 12:
    case 18:
      return theme.icon.ferriesPrimary;
    default:
      return theme.icon.busesPrimary;
  }
};
