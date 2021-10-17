import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../../../../theme/theme';

const BackButton = ({navigation}) => (
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Icon
      name="chevron-back-outline"
      size={30}
      color={theme.palette.text.primary}
    />
  </TouchableOpacity>
);

export default BackButton;
