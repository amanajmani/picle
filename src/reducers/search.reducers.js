export default function searchReducers(state = {}, action) {
  switch (action.type) {
    case 'SEARCH':
      return action.results;
    default:
      return state;
  }
}
