import {StyleSheet} from 'react-native';

import theme from '../../../../theme/theme';

const styles = StyleSheet.create({
  noResultsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 400,
  },
  noResultsPrimaryText: {
    ...theme.typography.h1,
    color: theme.palette.secondary.main,
  },
  noResultsSecondaryText: {
    ...theme.typography.caption,
    textAlign: 'center',
    marginTop: theme.spacing(8),
    color: theme.palette.text.secondary,
  },
  activityIndicator: {
    margin: theme.spacing(20),
    transform: [{scale: 2}],
  },
});

export default styles;
