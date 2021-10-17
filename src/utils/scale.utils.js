// For responsive font sizes/images

import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

// Based on of standard (5") phones
const standardWidth = 350;

const scale = size => (width / standardWidth) * size;
const factoredScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export default factoredScale;
