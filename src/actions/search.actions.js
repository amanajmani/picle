import * as searchServices from './search.services';

import debounce from 'lodash/debounce';

/* CONSTANTS */
import {
  FETCHING_IMAGES,
  FETCHED_IMAGES,
  SET_QUERY,
} from '../constants/actionTypes.constants';

const handleError = error => console.log(error);

const debouncedSearchAPI = debounce((query, dispatch) => {
  // do not call when query is empty
  if (query !== '') {
    dispatch({
      type: FETCHING_IMAGES,
      payload: query,
    });

    searchServices.fetchImages(query).then(data => {
      dispatch({
        type: FETCHED_IMAGES,
        payload: data,
      });
    }, handleError);
  }
}, 1200);

export function onSearch(query) {
  return dispatch => {
    dispatch({
      type: SET_QUERY,
      payload: query,
    });

    return debouncedSearchAPI(query, dispatch);
  };
}
