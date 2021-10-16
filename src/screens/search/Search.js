import React from 'react';
import {View, Text} from 'react-native';

/* REDUX */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../../actions';

/* COMPONENTS */
import SearchBox from './components/searchBox';
import SearchResult from './components/searchResult';

/* LODASH */
import isEmpty from 'lodash/isEmpty';

const Search = ({onSearch, query, data, fetching}) => {
  return (
    <View>
      <SearchBox
        placeholder="picle away"
        onChangeText={onSearch}
        value={query}
      />
      {isEmpty(query) && <Text>Search for something</Text>}
      <SearchResult data={data} fetching={fetching} />
    </View>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    query: state.search.query,
    data: state.search.data,
    fetching: state.search.fetching,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
