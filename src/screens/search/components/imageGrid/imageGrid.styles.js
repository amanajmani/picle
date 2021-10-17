import {StyleSheet} from 'react-native';

import theme from '../../../../theme/theme';

/* CONSTANTS */
import ELEVATION from './elevation.constants';

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
  image: {
    aspectRatio: 1,
  },
});

export default styles;
