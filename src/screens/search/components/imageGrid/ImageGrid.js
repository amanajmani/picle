import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {TouchableOpacity, FlatList, Image} from 'react-native';
const ImageList = ({data, query, fetchImages, offset, fetching, isListEnd}) => {
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

  const [
    onEndReachedCalledDuringMomentum,
    setOnEndReachedCalledDuringMomentum,
  ] = React.useState(true);

  return (
    <FlatList
      onEndReachedThreshold={0.5}
      onMomentumScrollBegin={() => {
        setOnEndReachedCalledDuringMomentum(false);
      }}
      onEndReached={() => {
        if (!onEndReachedCalledDuringMomentum) {
          getData(); // LOAD MORE DATA
          setOnEndReachedCalledDuringMomentum(true);
        }
      }}
      ListFooterComponent={renderFooter}
      data={data}
      contentContainerStyle={{paddingBottom: 20}}
      keyExtractor={(item, index) => index}
      renderItem={({item}) => (
        <TouchableOpacity>
          <Image
            source={{uri: item.previewURL}}
            style={[{height: 30, width: 30}]}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default ImageList;
