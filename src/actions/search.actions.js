import * as searchServices from './search.services';

import debounce from 'lodash/debounce';

/* CONSTANTS */
import {
  FETCHING_IMAGES,
  FETCHED_IMAGES,
  ADDING_TO_IMAGES,
  ADDED_TO_IMAGES,
  SET_QUERY,
  END_OF_LIST,
} from '../constants/actionTypes.constants';

const handleError = error => console.log(error);

const debouncedSearchAPI = debounce((query, offset, dispatch) => {
  // do not call when query is empty
  if (query !== '') {
    dispatch({
      type: FETCHING_IMAGES,
      payload: query,
    });

    searchServices.fetchImages(query, offset).then(data => {
      dispatch({
        type: FETCHED_IMAGES,
        payload: {data},
      });
    }, handleError);
  }
}, 1200);

export function onSearch(query, offset) {
  return dispatch => {
    dispatch({
      type: SET_QUERY,
      payload: query,
    });

    return debouncedSearchAPI(query, offset, dispatch);
  };
}

export function fetchImages(query, offset) {
  if (query !== '') {
    return dispatch => {
      dispatch({
        type: ADDING_TO_IMAGES,
        payload: query,
      });

      return searchServices.fetchImages(query, offset).then(data => {
        if (data.endOfList) {
          dispatch({
            type: END_OF_LIST,
          });
        } else {
          dispatch({
            type: ADDED_TO_IMAGES,
            payload: {data},
          });
        }
      }, handleError);
    };
  }
}
