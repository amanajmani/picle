import React from 'react';

import {Dimensions} from 'react-native';

/* REDUX */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions';

/* NAVIGATION */
import {NavigationContainer} from '@react-navigation/native';

/* COMPONENTS */
import TabNavigator from './TabNavigator';

const Navigation = ({handleOrientation, handleDeviceWidth}) => {
  React.useEffect(() => {
    Dimensions.addEventListener('change', () => {
      handleOrientation();
      handleDeviceWidth();
    });
  }, [handleOrientation, handleDeviceWidth]);

  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
