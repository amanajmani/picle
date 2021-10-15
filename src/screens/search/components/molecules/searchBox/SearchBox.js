import React from 'react';
import {View, TextInput} from 'react-native';

/* ICONS */
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './searchBox.styles';

const SearchBox = ({placeholder, value, onChangeText}) => (
  <View style={styles.root}>
    <Icon name="ios-search" size={20} color="#000" style={styles.icon} />
    <TextInput
      style={styles.inputStyle}
      autoCorrect={false}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
    />
    <Icon name="close-outline" size={25} color="#000" style={styles.icon} />
  </View>
);

export default SearchBox;
