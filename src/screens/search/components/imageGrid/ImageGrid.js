import React from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

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
  navigation,
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
        <TouchableOpacity
          style={{
            flex: 1 / numColumns,
            margin: 4,
            shadowColor: 'white',
            elevation: 8,
            aspectRatio: 1,
            borderRadius: 12,
          }}
          onPress={() => {
            navigation.navigate('Details', {
              item,
            });
          }}>
          <Image
            style={{
              aspectRatio: 1,
              borderRadius: 12,
            }}
            source={{uri: item.webformatURL}}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
