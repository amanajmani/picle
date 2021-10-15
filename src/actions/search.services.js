/* CONSTANTS */
// import BASE_URL from '../../constants/baseURL';

/* HELPERS */
import callApi from '../helpers/callApi.helpers';

export function fetchImages(query) {
  const url = `https://pixabay.com/api/?key=23859345-3ef4a0e071920cfc7b6e3efc7&q=${query}&image_type=photo&pretty=true`;
  return callApi(url);
}
