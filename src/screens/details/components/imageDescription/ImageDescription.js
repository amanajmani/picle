import React from 'react';
import {Text, Image, View, FlatList} from 'react-native';

/* ICONS */
import Icon from 'react-native-vector-icons/Ionicons';

import isEmpty from 'lodash/isEmpty';
import strToArr from '../../../../utils/strToArr.utils';

import theme from '../../../../theme/theme';

/* STYLE */
import styles from './imageDescription.styles';

const Resolution = ({item}) => {
  const {imageWidth, imageHeight} = item;

  return (
    <View style={styles.resolutionContainer}>
      <Text style={[styles.bodyText, styles.primaryText]}>
        {imageWidth} x {imageHeight}
      </Text>
      <Text style={styles.resolution}>Resolution</Text>
    </View>
  );
};

const UserDescription = ({item}) => {
  const {userImageURL, user} = item;
  return (
    <>
      <View style={styles.userDescriptionContainer}>
        {isEmpty(userImageURL) ? (
          <Icon
            name="person-circle-outline"
            size={40}
            color={theme.palette.text.secondary}
          />
        ) : (
          <Image
            resizeMode="cover"
            source={{uri: userImageURL}}
            style={styles.avatar}
          />
        )}

        <Text style={[styles.userName, styles.primaryText]}>{user}</Text>
      </View>
    </>
  );
};

const ImageDescription = ({item}) => {
  const {tags} = item;
  return (
    <View style={{marginTop: theme.spacing(2)}}>
      <View style={{marginBottom: theme.spacing(20)}}>
        {/* User's Avatar and name */}
        <UserDescription item={item} />

        {/* Resoltion of the image */}
        <Resolution item={item} />
      </View>

      {/* Horizontal List of Tags */}
      <FlatList
        horizontal={true}
        data={strToArr(tags)}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <View style={styles.tagsContainer}>
            <Text style={[styles.bodyText, styles.primaryText]}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ImageDescription;
