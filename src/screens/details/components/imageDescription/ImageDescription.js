import React from 'react';
import {Text, Image, View, FlatList} from 'react-native';

/* ICONS */
import Icon from 'react-native-vector-icons/Ionicons';

import isEmpty from 'lodash/isEmpty';
import strToArr from '../../../../utils/strToArr.utils';

const Resolution = ({item}) => {
  const {imageWidth, imageHeight} = item;
  return (
    <>
      <View style={{marginTop: 10}}>
        <Text style={{fontSize: 16, color: '#fff'}}>
          {imageWidth} x {imageHeight}
        </Text>
        <Text style={{fontSize: 16, color: '#C0C0C0', fontWeight: 'bold'}}>
          Resolution
        </Text>
      </View>
    </>
  );
};

const UserDescription = ({item}) => {
  const {userImageURL, user} = item;
  return (
    <>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {isEmpty(userImageURL) ? (
          <Icon name="person-circle-outline" size={40} color="#C0C0C0" />
        ) : (
          <Image
            resizeMode="cover"
            source={{uri: userImageURL}}
            style={{
              alignSelf: 'center',
              height: 40,
              width: 40,
              borderWidth: 1,
              borderRadius: 75,
            }}
          />
        )}

        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            marginLeft: 10,
            fontWeight: 'bold',
          }}>
          {user}
        </Text>
      </View>
    </>
  );
};

const ImageDescription = ({item}) => {
  const {tags} = item;
  return (
    <View style={{marginTop: 10}}>
      <View style={{marginBottom: 40}}>
        {/* User's Avatar and name */}
        <UserDescription item={item} />
        {/* Resoltion of the image */}
        <Resolution item={item} />
      </View>

      {/* Horizontal List of Tags */}
      <FlatList
        horizontal={true}
        data={strToArr(tags)}
        // extraData={this.state}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <View
            style={{
              borderRadius: 10,
              borderWidth: 2,
              padding: 10,
              backgroundColor: '#80BB65',
            }}>
            <Text style={{fontSize: 16, color: '#fff'}}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ImageDescription;
