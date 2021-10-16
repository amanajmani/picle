/* CONSTANTS */
import {ORIENTATION_CHANGE} from '../constants/screenActionTypes.constants';

export function handleOrientation(type) {
  return dispatch => {
    dispatch({
      type: ORIENTATION_CHANGE,
      payload: type,
    });
  };
}
