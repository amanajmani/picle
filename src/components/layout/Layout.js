import React from 'react';
import {View} from 'react-native';

const Layout = props => {
  return (
    <View
      {...props}
      style={[{padding: 15, backgroundColor: '#1F2326'}, props.style]}>
      {props.children}
    </View>
  );
};

export default Layout;
