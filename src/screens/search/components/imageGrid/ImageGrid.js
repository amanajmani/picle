import React from 'react';
import {View, ActivityIndicator, FlatList, Image} from 'react-native';

/* REDUX */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../../../../actions';

/* CONSTANTS */
import {PORTRAIT, LANDSCAPE} from '../../../../constants/orientation.constants';

const ImageGrid = ({
  data,
  query,
  fetchImages,
  offset,
  fetching,
  isListEnd,
  orientation,
}) => {
  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = React.useState(true);

  const getData = () => {
    if (!fetching && !isListEnd) {
      fetchImages(query, offset);
    }
  };

  const renderFooter = () => {
    return (
      //Footer View with Loader
      <View>
        {fetching ? (
          <ActivityIndicator color="black" style={{margin: 15}} />
        ) : null}
      </View>
    );
  };

  const numColumns = orientation === PORTRAIT ? 3 : 6;

  return (
    <FlatList
      onEndReachedThreshold={0.5}
      onMomentumScrollBegin={() => {
        setOnEndReachedCalledDuringMomentum(false);
      }}
      key={orientation === PORTRAIT ? PORTRAIT : LANDSCAPE}
      onEndReached={() => {
        if (!onEndReachedCalledDuringMomentum) {
          getData(); // LOAD MORE DATA
          setOnEndReachedCalledDuringMomentum(true);
        }
      }}
      ListFooterComponent={renderFooter}
      data={data}
      numColumns={numColumns}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => (
        <Image
          style={{aspectRatio: 1, flex: 1 / numColumns, margin: 20}}
          source={{uri: item.previewURL}}
        />
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
