/* CONSTANTS */
import {
  ORIENTATION_CHANGE,
  DEVICE_WIDTH_CHANGE,
  UPDATE_GRID_INDEX,
} from '../constants/screenActionTypes.constants';

import getOrientation from '../helpers/getOrientation.helpers';
import getDeviceWidth from '../helpers/getDeviceWidth.helpers';

export function handleOrientation() {
  return dispatch => {
    dispatch({
      type: ORIENTATION_CHANGE,
      payload: getOrientation(),
    });
  };
}

export function handleDeviceWidth() {
  return dispatch => {
    dispatch({
      type: DEVICE_WIDTH_CHANGE,
      payload: getDeviceWidth(),
    });
  };
}

export function updateGridIndex(index) {
  return dispatch => {
    dispatch({
      type: UPDATE_GRID_INDEX,
      payload: index,
    });
  };
}
