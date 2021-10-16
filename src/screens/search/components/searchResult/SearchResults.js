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
}) => {
  return (
    <ImageGrid
      data={data}
      query={query}
      fetchImages={fetchImages}
      offset={offset}
      fetching={fetching}
      isListEnd={isListEnd}
    />
  );
};

export default SearchResults;
