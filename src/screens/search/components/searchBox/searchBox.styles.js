import {StyleSheet} from 'react-native';

/* THEME */
import theme from '../../../../theme/theme';

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.palette.primary.dark,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    ...theme.typography.h1,
    flex: 1,
    color: theme.palette.text.secondary,
  },
  padding: {
    padding: theme.spacing(5),
  },
  logo: {
    width: 28,
    height: 28,
  },
});

export default styles;
