import React from 'react';

/* COMPONENTS */
import ImageGrid from '../imageGrid';

const SearchResults = ({
  fetching,
  data,
  query,
  fetchImages,
  offset,
  isListEnd,
  navigation,
}) => {
  return (
    <ImageGrid
      data={data}
      query={query}
      fetchImages={fetchImages}
      offset={offset}
      fetching={fetching}
      isListEnd={isListEnd}
      navigation={navigation}
    />
  );
};

export default SearchResults;
