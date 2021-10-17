import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const BackButton = ({navigation}) => (
  <TouchableOpacity onPress={() => navigation.goBack()}>
    <Icon name="chevron-back-outline" size={30} color="#fff" />
  </TouchableOpacity>
);

export default BackButton;
