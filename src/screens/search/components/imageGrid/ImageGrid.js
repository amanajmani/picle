import React from 'react';
import {FlatList, Image, TouchableOpacity} from 'react-native';

/* REDUX */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../../../../actions';

/* CONSTANTS */
import {PORTRAIT} from '../../../../constants/orientation.constants';

/* COMPONENTS */
import ImageGridFooter from '../imageGridFooter/ImageGridFooter';

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
  const imageWidth = Math.trunc(deviceWidth / numColumns);

  const getData = () => {
    if (!fetching && !isListEnd) {
      fetchImages(query, offset);
    }
  };

  const onScroll = event => {
    let yOffset = Math.trunc(event.nativeEvent.contentOffset.y / imageWidth);
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
      updateGridIndex(Math.trunc(tempGridIndex / 2));
    } else {
      updateGridIndex(Math.trunc(tempGridIndex * 2));
    }
  }, [orientation]);

  React.useEffect(() => {
    // reset index
    updateGridIndex(0);
  }, [query]);

  const renderItem = item => (
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
  );

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
      ListFooterComponent={
        <ImageGridFooter fetching={fetching} totalHits={totalHits} />
      }
      data={data}
      onScroll={e => onScroll(e)}
      showsVerticalScrollIndicator={false}
      getItemLayout={getItemLayout}
      numColumns={numColumns}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => renderItem(item)}
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
