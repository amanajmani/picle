/* CONSTANTS */
import BASE_URL from '../constants/baseURL.constants';

/* HELPERS */
import callApi from '../helpers/callApi.helpers';

export function fetchImages(query, offset) {
  const url = `${BASE_URL}=${encodeURIComponent(
    query,
  )}&image_type=photo&per_page=50&page=${offset}`;
  return callApi(url);
}
