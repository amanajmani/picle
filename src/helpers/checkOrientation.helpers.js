import {Dimensions} from 'react-native';

/* CONSTANTS */
import {PORTRAIT, LANDSCAPE} from '../constants/orientation.constants';

/**
 * Returns true if the screen is in portrait mode
 */
const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};

export const checkOrientation = () => (isPortrait() ? PORTRAIT : LANDSCAPE);
