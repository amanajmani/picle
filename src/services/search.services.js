/* CONSTANTS */
import {BASE_URL} from '../constants/baseURL.constants';

/* HELPERS */
import callApi from '../helpers/callApi.helpers';

export function fetchImages(query, offset) {
  const url = `${BASE_URL}23859345-3ef4a0e071920cfc7b6e3efc7&q=${query}&image_type=photo&pretty=true&per_page=200&page=${offset}`;
  return callApi(url);
}
