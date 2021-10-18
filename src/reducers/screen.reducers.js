/* HELPERS */
import getOrientation from '../helpers/getOrientation.helpers';
import getDeviceWidth from '../helpers/getDeviceWidth.helpers';

/* CONSTANTS */
import {
  ORIENTATION_CHANGE,
  DEVICE_WIDTH_CHANGE,
  UPDATE_GRID_INDEX,
} from '../constants/screenActionTypes.constants';

export default function screenReducers(
  state = {
    orientation: getOrientation(),
    deviceWidth: getDeviceWidth(),
    gridIndex: 0,
  },
  action,
) {
  switch (action.type) {
    case ORIENTATION_CHANGE:
      return {
        ...state,
        orientation: action.payload,
      };
    case DEVICE_WIDTH_CHANGE:
      return {
        ...state,
        deviceWidth: action.payload,
      };
    case UPDATE_GRID_INDEX:
      return {
        ...state,
        gridIndex: action.payload,
      };
    default:
      return state;
  }
}