import React from 'react';
import {Image} from 'react-native';

import styles from './about.styles';

/* ASSETS */
import logoLarge from '../../assets/images/logoLarge.png';

import Layout from '../../components/layout';

const About = ({children}) => {
  return (
    <Layout style={styles.root}>
      <Image style={styles.image} source={logoLarge} resizeMode="contain">
        {children}
      </Image>
    </Layout>
  );
};

export default About;
