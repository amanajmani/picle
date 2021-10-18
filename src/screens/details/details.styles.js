import {StyleSheet} from 'react-native';

import theme from '../../theme/theme';

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  root: {
    padding: theme.spacing(8),
  },
  portrait: {
    flexDirection: 'column',
  },
  landscape: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
});

export default styles;
