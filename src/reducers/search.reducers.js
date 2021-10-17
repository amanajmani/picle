/* CONSTANTS */
import {
  FETCHING_IMAGES,
  FETCHED_IMAGES,
  SET_QUERY,
  END_OF_LIST,
  ADDING_TO_IMAGES,
  ADDED_TO_IMAGES,
  RESET_QUERY,
} from '../constants/searchActionTypes.constants';

export default function searchReducers(
  state = {
    query: '',
    fetching: false,
    data: [],
    offset: 1,
    isListEnd: false,
    totalHits: null,
  },
  action,
) {
  switch (action.type) {
    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
        offset: 1,
        data: [],
        totalHits: null,
      };
    case RESET_QUERY:
      return {
        ...state,
        query: '',
        fetching: false,
        data: [],
        offset: 1,
        isListEnd: false,
        totalHits: null,
      };
    case FETCHING_IMAGES:
      return {
        ...state,
        fetching: true,
        isListEnd: false,
      };
    case FETCHED_IMAGES:
      return {
        ...state,
        fetching: false,
        data: [...state.data, ...action.payload.data.hits],
        totalHits: action.payload.data.totalHits,
      };
    case ADDING_TO_IMAGES:
      return {
        ...state,
        fetching: true,
        isListEnd: false,
      };
    case ADDED_TO_IMAGES:
      return {
        ...state,
        fetching: false,
        offset: state.offset + 1,
        data: [...state.data, ...action.payload.data.hits],
        totalHits: action.payload.data.totalHits,
      };
    case END_OF_LIST:
      return {
        ...state,
        fetching: false,
        isListEnd: true,
        offset: 1,
      };
    default:
      return state;
  }
}
