import React from 'react';
import {View, ActivityIndicator} from 'react-native';

/* LODASH */
import isEmpty from 'lodash/isEmpty';

/* COMPONENTS */
import ImageGrid from '../imageGrid';

const SearchResults = ({fetching, data}) => {
  if (fetching) {
    return <ActivityIndicator />;
  }

  if (isEmpty(data)) {
    return null;
  }

  return (
    <View>
      <ImageGrid data={data} />
    </View>
  );
};

export default SearchResults;
