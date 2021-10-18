import React from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

/* REDUX */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../../../../actions';

import theme from '../../../../theme/theme';

/* CONSTANTS */
import {PORTRAIT} from '../../../../constants/orientation.constants';

/* STYLES */
import styles from './imageGrid.styles';

import {NO_RESULTS_PRIMARY, NO_RESULTS_SECONDARY} from './imageGrid.constants';

/* ASSETS */
import noResults from '../../../../assets/images/noResults.png';

const ImageGrid = ({
  data,
  query,
  fetchImages,
  offset,
  fetching,
  isListEnd,
  orientation,
  navigation,
  deviceWidth,
  updateGridIndex,
  gridIndex,
  totalHits,
}) => {
  const [onEndMomentumReached, setOnEndMomentumReached] = React.useState(true);

  const numColumns = orientation === PORTRAIT ? 3 : 6;
  const imageWidth = deviceWidth / numColumns;

  const getData = () => {
    if (!fetching && !isListEnd) {
      fetchImages(query, offset);
    }
  };

  const onScroll = event => {
    let yOffset = event.nativeEvent.contentOffset.y / imageWidth;
    updateGridIndex(yOffset);
  };

  const getItemLayout = (data, index) => ({
    length: imageWidth,
    offset: imageWidth * index,
    index,
  });

  React.useEffect(() => {
    let tempGridIndex = gridIndex;
    if (orientation !== PORTRAIT) {
      updateGridIndex(tempGridIndex / 2);
    } else {
      updateGridIndex(tempGridIndex * 2);
    }
  }, [orientation]);

  React.useEffect(() => {
    // reset index
    updateGridIndex(0);
  }, [query]);

  const renderFooter = ({children}) => {
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
            <Image
              style={styles.image}
              source={noResults}
              resizeMode="center"
            />
            <Text style={styles.noResultsPrimaryText}>
              {NO_RESULTS_PRIMARY}
            </Text>
            <Text style={styles.noResultsSecondaryText}>
              {NO_RESULTS_SECONDARY}
            </Text>
          </View>
        )}
      </>
    );
  };

  return (
    <FlatList
      initialScrollIndex={gridIndex}
      onEndReachedThreshold={0.5}
      onMomentumScrollBegin={() => {
        setOnEndMomentumReached(false);
      }}
      key={orientation === PORTRAIT ? PORTRAIT : 'LANDSCAPE'}
      onEndReached={() => {
        if (!onEndMomentumReached) {
          getData(); // LOAD MORE DATA
          setOnEndMomentumReached(true);
        }
      }}
      ListFooterComponent={renderFooter}
      data={data}
      onScroll={e => onScroll(e)}
      showsVerticalScrollIndicator={false}
      getItemLayout={getItemLayout}
      numColumns={numColumns}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details', {
              item,
            });
          }}>
          <Image
            resizeMode="cover"
            source={{uri: item.webformatURL}}
            style={[
              {
                height: imageWidth,
                width: imageWidth,
              },
            ]}
          />
        </TouchableOpacity>
      )}
    />
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    orientation: state.screen.orientation,
    query: state.search.query,
    offset: state.search.offset,
    data: state.search.data,
    fetching: state.search.fetching,
    isListEnd: state.search.isListEnd,
    totalHits: state.search.totalHits,
    deviceWidth: state.screen.deviceWidth,
    gridIndex: state.screen.gridIndex,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
