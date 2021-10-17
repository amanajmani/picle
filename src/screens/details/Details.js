import React from 'react';
import {Image, View} from 'react-native';

/* COMPONENTS */
import Layout from '../../components/layout';
import BackButton from './components/backButton';
import ImageDescription from './components/imageDescription';

const Details = ({route, navigation}) => {
  const {item} = route.params;
  return (
    <Layout style={{flex: 1}}>
      <BackButton navigation={navigation} />

      <View style={{flex: 1}}>
        <Image
          resizeMode="contain"
          source={{uri: item.webformatURL}}
          style={{
            flex: 1,
            borderRadius: 10,
          }}
        />
      </View>

      <ImageDescription item={item} />
    </Layout>
  );
};

export default Details;
