import React from 'react';
import {Image, View} from 'react-native';

/* COMPONENTS */
import Layout from '../../components/layout';
import BackButton from './components/backButton';
import ImageDescription from './components/imageDescription';

import theme from '../../theme/theme';

/* STYLES */
import styles from './details.styles';

const Details = ({route, navigation}) => {
  const {item} = route.params;

  return (
    <Layout style={styles.flex}>
      <BackButton navigation={navigation} />

      <View style={styles.flex}>
        <Image
          resizeMode="contain"
          source={{uri: item.webformatURL}}
          style={[styles.flex, {borderRadius: theme.shape.borderRadius}]}
        />
      </View>

      <ImageDescription item={item} />
    </Layout>
  );
};

export default Details;
