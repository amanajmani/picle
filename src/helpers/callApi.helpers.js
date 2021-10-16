function handleError(error) {
  return Promise.reject(error);
}

const STATUS_OK = 200;
const NOT_FOUND = 400;

export default async function callApi(url, config) {
  try {
    const res = await fetch(url, config);
    if (res.status === STATUS_OK) {
      const data = await res.json();
      return data;
    }
    if (res.status === NOT_FOUND) {
      return {endOfList: true, hits: [], totalHits: 0};
    }
    throw new Error('Response status not OK');
  } catch (err) {
    return handleError(err);
  }
}
