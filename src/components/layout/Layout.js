import React from 'react';
import {View} from 'react-native';

/* STYLES */
import styles from './layout.styles';

const Layout = props => {
  return (
    <View {...props} style={[styles.root, props.style]}>
      {props.children}
    </View>
  );
};

export default Layout;
