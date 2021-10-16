import React from 'react';
import {View, Text} from 'react-native';

/* REDUX */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../../actions';

/* COMPONENTS */
import SearchBox from './components/searchBox';
import SearchResult from './components/searchResult';

const Search = ({
  onSearch,
  query,
  data,
  fetching,
  fetchImages,
  offset,
  isListEnd,
  totalHits,
}) => {
  return (
    <View>
      <SearchBox
        placeholder="picle away"
        onChangeText={q => onSearch(q, offset)}
        value={query}
      />

      {totalHits ? (
        <SearchResult
          query={query}
          data={data}
          fetching={fetching}
          fetchImages={fetchImages}
          offset={offset}
          isListEnd={isListEnd}
        />
      ) : (
        <Text>
          {totalHits !== 0
            ? 'Enter the world of picle and type away'
            : 'Sorry, no picle results found'}
        </Text>
      )}
    </View>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    query: state.search.query,
    offset: state.search.offset,
    data: state.search.data,
    fetching: state.search.fetching,
    isListEnd: state.search.isListEnd,
    totalHits: state.search.totalHits,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
