import React from 'react';
import {View, Text} from 'react-native';

/* REDUX */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ActionCreators from '../../actions';

/* COMPONENTS */
import SearchBox from './components/searchBox';
import ImageGrid from './components/imageGrid';
import Layout from '../../components/layout';

/* CONSTANTS */
import {NO_RESULTS, PLACEHOLDER} from './constants/searchInfoText.constants';

/* STYLES */
import styles from './search.styles';

const Search = ({
  onSearch,
  query,
  offset,
  totalHits,
  navigation,
  resetQuery,
}) => {
  return (
    <View style={styles.flex}>
      <SearchBox
        placeholder={PLACEHOLDER}
        onChangeText={q => onSearch(q, offset)}
        value={query}
        resetValue={resetQuery}
      />
      <Layout style={styles.flex}>
        {totalHits ? (
          <ImageGrid navigation={navigation} />
        ) : (
          <Text>{totalHits === 0 && NO_RESULTS}</Text>
        )}
      </Layout>
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
