/* HELPERS */
import {checkOrientation} from '../helpers/checkOrientation.helpers';

/* CONSTANTS */
import {ORIENTATION_CHANGE} from '../constants/screenActionTypes.constants';

export default function screenReducers(
  state = {
    orientation: checkOrientation(),
  },
  action,
) {
  switch (action.type) {
    case ORIENTATION_CHANGE:
      return {
        orientation: action.payload,
      };
    default:
      return state;
  }
}
