import React from 'react';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';

/* ICONS */
import Icon from 'react-native-vector-icons/Ionicons';

/* ASSETS */
import picleLogo from '../../../../assets/images/picleLogo.png';

/* UTILS */
import isEmpty from 'lodash/isEmpty';

/* STLES */
import styles from './searchBox.styles';

/* THEME */
import theme from '../../../../theme/theme';

const SearchBox = ({placeholder, value, onChangeText, resetValue}) => (
  <View style={[styles.root, styles.padding]}>
    <Image source={picleLogo} style={styles.logo} />

    <TextInput
      style={[styles.textInput, styles.padding]}
      autoCorrect={false}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={theme.palette.text.secondary}
    />

    {!isEmpty(value) && (
      <TouchableOpacity onPress={resetValue}>
        <Icon
          name="close-outline"
          size={25}
          color={theme.palette.text.primary}
          style={styles.icon}
        />
      </TouchableOpacity>
    )}
  </View>
);

export default SearchBox;
