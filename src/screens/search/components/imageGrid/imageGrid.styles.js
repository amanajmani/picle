import {StyleSheet} from 'react-native';

import theme from '../../../../theme/theme';

/* CONSTANTS */
import {ELEVATION} from './imageGrid.constants';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  grid: {
    margin: theme.spacing(2),
    shadowColor: theme.palette.text.primary,
    elevation: ELEVATION,
  },
  borderRadius: {
    borderRadius: theme.shape.borderRadius,
  },
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
