import * as SearchActions from './search.actions';
import * as ScreenActions from './screen.actions';

const ActionCreators = {
  ...SearchActions,
  ...ScreenActions,
};

export default ActionCreators;
