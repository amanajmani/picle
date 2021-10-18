import {Dimensions} from 'react-native';

/**
 * Returns width of the device
 */
const getDeviceWidth = () => {
  return Dimensions.get('window').width;
};

export default getDeviceWidth;
