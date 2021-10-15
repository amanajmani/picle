import React from 'react';

/* REDUX */
import {Provider} from 'react-redux';
import store from './src/config/store';

/* NAVIGATION */
import Navigation from './src/navigation';

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
