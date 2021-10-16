import {combineReducers} from 'redux';

import searchReducers from './search.reducers';
import screenReducers from './screen.reducers';

export default combineReducers({
  search: searchReducers,
  screen: screenReducers,
});
