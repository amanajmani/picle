import React from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';

/* ICONS */
import Icon from 'react-native-vector-icons/Ionicons';

/* ASSETS */
import picleLogo from '../../../../assets/images/picleLogo.png';

import isEmpty from 'lodash/isEmpty';
import styles from './searchBox.styles';

const SearchBox = ({placeholder, value, onChangeText, resetValue}) => (
  <View style={styles.root}>
    <Image source={picleLogo} style={{width: 28, height: 28}} />
    <TextInput
      style={styles.inputStyle}
      autoCorrect={false}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#C0C0C0"
    />
    {!isEmpty(value) && (
      <TouchableOpacity onPress={resetValue}>
        <Icon name="close-outline" size={25} color="#fff" style={styles.icon} />
      </TouchableOpacity>
    )}
  </View>
);

export default SearchBox;
