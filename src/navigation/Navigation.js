import React from 'react';

import {Dimensions} from 'react-native';

/* REDUX */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../actions';

/* NAVIGATION */
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* HELPERS */
import {checkOrientation} from '../helpers/checkOrientation.helpers';

/* COMPONENTS */
import Search from '../screens/search';
import Details from '../screens/Details';

const Navigation = ({handleOrientation}) => {
  const Stack = createNativeStackNavigator();

  React.useEffect(() => {
    Dimensions.addEventListener('change', () => {
      handleOrientation(checkOrientation());
    });
  }, [handleOrientation]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
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
