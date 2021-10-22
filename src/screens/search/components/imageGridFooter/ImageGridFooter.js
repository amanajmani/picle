import React from 'react';
import {View, ActivityIndicator, Image, Text} from 'react-native';

import theme from '../../../../theme/theme';

/* STYLES */
import styles from './imageGrid.styles';

import {NO_RESULTS_PRIMARY, NO_RESULTS_SECONDARY} from './imageGrid.constants';

/* ASSETS */
import noResults from '../../../../assets/images/noResults.png';

const ImageGridFooter = ({children, fetching, totalHits}) => {
  return (
    //Footer View with Loader
    <>
      {fetching ? (
        <ActivityIndicator
          color={theme.palette.secondary.main}
          style={styles.activityIndicator}
        />
      ) : null}
      {totalHits === 0 && (
        <View style={styles.noResultsContainer}>
          <Image style={styles.image} source={noResults} resizeMode="center" />
          <Text style={styles.noResultsPrimaryText}>{NO_RESULTS_PRIMARY}</Text>
          <Text style={styles.noResultsSecondaryText}>
            {NO_RESULTS_SECONDARY}
          </Text>
        </View>
      )}
    </>
  );
};

export default ImageGridFooter;
