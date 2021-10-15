import React from 'react';
import {View} from 'react-native';

/* REDUX */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../../actions';

/* COMPONENTS */
import SearchBox from './components/molecules/searchBox';

const Search = ({onSearch, query}) => {
  return (
    <View>
      <SearchBox
        placeholder="picle away"
        onChangeText={onSearch}
        value={query}
      />
    </View>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    query: state.search.query,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
