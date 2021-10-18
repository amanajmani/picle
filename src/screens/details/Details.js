import React from 'react';
import {Image, View} from 'react-native';

/* COMPONENTS */
import Layout from '../../components/layout';
import BackButton from './components/backButton';
import ImageDescription from './components/imageDescription';

/* REDUX */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../../actions';

import theme from '../../theme/theme';

/* CONSTANTS */
import {PORTRAIT} from '../../constants/orientation.constants';

/* STYLES */
import styles from './details.styles';

const Details = ({route, navigation, orientation}) => {
  const {item} = route.params;

  return (
    <Layout style={[styles.flex, styles.root]}>
      <BackButton navigation={navigation} />

      <View
        style={[
          orientation === PORTRAIT ? styles.portrait : styles.landscape,
          styles.flex,
        ]}>
        <View style={styles.flex}>
          <Image
            resizeMode="contain"
            source={{uri: item.webformatURL}}
            style={[styles.flex, styles.image]}
          />
        </View>
        <ImageDescription item={item} orientation={orientation} />
      </View>
    </Layout>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    orientation: state.screen.orientation,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
