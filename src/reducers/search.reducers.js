/* CONSTANTS */
import {
  FETCHING_IMAGES,
  FETCHED_IMAGES,
  SET_QUERY,
} from '../constants/actionTypes.constants';

export default function searchReducers(
  state = {
    query: '',
    fetching: false,
    data: [],
  },
  action,
) {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
        data: [],
      };
    case FETCHING_IMAGES:
      return {
        ...state,
        fetching: true,
      };
    case FETCHED_IMAGES:
      return {
        ...state,
        fetching: false,
        data: action.payload,
      };
    default:
      return state;
  }
}
